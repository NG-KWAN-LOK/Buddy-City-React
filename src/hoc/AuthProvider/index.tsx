import React, { useState, createContext, useCallback } from "react";

export interface UserRole {
  admin: boolean;
  name: string;
  write: boolean;
}

export const AuthContext = createContext({
  userRole: null as UserRole | null,
  setAdminRole: (role: UserRole | null) => {},
});

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const setAdminRole = useCallback((role: UserRole | null) => {
    setUserRole(role);
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, setAdminRole }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
