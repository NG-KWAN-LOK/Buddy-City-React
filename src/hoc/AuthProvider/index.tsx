import React, { useState, createContext, useCallback, useEffect } from "react";
import { auth, getUserData, signInWithGooglePopup } from "../../utils/firebase";
import { onValue } from "firebase/database";
import { signOut } from "firebase/auth";

export interface UserRole {
  admin: boolean;
  name: string;
  write: boolean;
}

export const AuthContext = createContext({
  userRole: null as UserRole | null,
  signInWithGoogle: () => {},
  logoutGoogle: () => {},
});

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const setAdminRole = useCallback((role: UserRole | null) => {
    setUserRole(role);
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setAdminRole(null);
        return;
      }
      const userDataRef = getUserData(user.uid);

      onValue(userDataRef, (snapshot) => {
        if (!snapshot.exists()) {
          signOut(auth);
          alert("很抱歉，您不是管理員，請您找管理員尋求協助");
          return;
        }

        alert("歡迎管理員 " + snapshot.val().name + " 大大\n請記得登出系統");

        setAdminRole(snapshot.val());
      });
    });
  }, [auth]);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const logoutGoogle = async () => {
    try {
      await signOut(auth).then(() => {
        alert("登出成功");
      });
    } catch (error) {
      alert("登出失敗");
    }
  };

  return (
    <AuthContext.Provider value={{ userRole, signInWithGoogle, logoutGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
