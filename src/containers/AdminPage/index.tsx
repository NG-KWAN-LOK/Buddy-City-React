import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import findTitle from "../../utils/titleName";
import { useTranslation } from "react-i18next";
import { auth, getUserData, signInWithGooglePopup } from "../../utils/firebase";
import { onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import AdminContent from "./AdminContent";
import useAuth from "../../hoc/AuthProvider";

const AdminPage = () => {
  const { t } = useTranslation();
  const { userRole, setAdminRole } = useAuth();

  useEffect(() => {
    document.title = `${findTitle(["管理員頁面"])}${t("title")}`;
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
        alert("歡迎管理員 " + snapshot.val().name + " 大大");
        setAdminRole(snapshot.val());
      });
    });
  }, [auth]);

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      alert("登入失敗");
    }
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
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.admin}>
          <div className={styles.admin__title__content}>
            <div className={styles.admin__title}>管理員頁面</div>
            <div className={styles.admin__text}>
              這個是一個不公開的頁面，如非系統管理員，切勿進入。
            </div>
          </div>
          <div className={styles.admin__content}>
            {userRole ? (
              <>
                <div className={styles.admin__content__title}>
                  歡迎管理員 {userRole.name} 大大
                </div>
                <div className={styles.admin__content__logout}>
                  <div
                    className={styles.admin__content__logout__btn}
                    onClick={logoutGoogle}
                  >
                    登出系統
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.admin__login}>
                <div className={styles.admin__login__title}>請先登入</div>
                <div
                  className={styles.admin__login__button}
                  onClick={signInWithGoogle}
                >
                  使用google帳號登入
                </div>
              </div>
            )}
          </div>
          {userRole && <AdminContent />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
