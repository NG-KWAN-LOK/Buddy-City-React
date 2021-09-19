import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./hoc/ThemeProvider";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "./i18n/index.js";
import Loading from "./components/Loading";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Loading containersClassName={false} />}>
          <App />
        </Suspense>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
