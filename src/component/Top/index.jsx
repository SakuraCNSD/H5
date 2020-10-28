import React from 'react';
import styles from './index.less';
import logo from "@/assets/Image/logo.png";
export default function index(props) {
  return (
    <header className={styles.top} >
      <img src={logo} className={styles.logo} alt="logo" />
    </header>
  )
}
