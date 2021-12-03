import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./index.module.css";
import App from "./components/App"
ReactDOM.render(
  <React.StrictMode>
    <App className={styles.App} />
  </React.StrictMode>,
  document.getElementById('root')
);


