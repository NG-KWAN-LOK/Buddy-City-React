import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./style.module.scss";
import useTheme from "../../hoc/ThemeProvider";

import "../../i18n/index.js";
import Header from "../../components/Header";
import Dashboard from "../Dashboard";
import Footer from "../../components/Footer";
function App() {
  document.title = "Kwan Lok NG";
  const { themeMode } = useTheme();
  return (
    <div className={styles.app} data-theme={themeMode}>
      <div className={styles.PaddingTop}>　</div>
      <div className={styles.content}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
