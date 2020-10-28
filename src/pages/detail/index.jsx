import React from "react";
import styles from "./index.less";
import Footer from "@/component/Footer";
export default function index(props) {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{props.location.query.data}</h5>
      <div className={styles.content}>{props.location.query.data}</div>
      <Footer />
    </div>
  )
}
