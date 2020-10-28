import React from "react";
import styles from "./index.less";
import Top from "@/component/Top";
import Block from "@/component/RandomBlockList";
import introduce from "@/assets/Image/introduce.png";
import left from "@/assets/Image/left.png";
import right from "@/assets/Image/right.png";
import scope from "@/assets/Image/scope.png";
export default class index extends React.PureComponent {
  jump = () => {
    this.props.history.push("/content");
  }
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Top />
          <div className={styles.introduce}>
            <img src={introduce} alt="introduce" className={styles.content} />
          </div>
          <div className={styles.delivery}>
            <div className={styles.left}>
              <img src={left} alt="delevery" />
            </div>
            <div className={styles.right}>
              <img src={right} alt="delevery" />
            </div>
          </div>
          <div className={styles.scope}>
            <img src={scope} alt="scope" />
          </div>
          <div className={styles.btn}>
            <i className={styles.mask} />
            <span className={styles.title} onClick={this.jump}>案例展示</span>
          </div>
        </div>
        <div className={styles.blockContainer}>
          <Block />
        </div>
      </div>
    )
  }
}
