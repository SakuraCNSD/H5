import React from 'react';
import styles from './index.less';
import Top from '@/component/Top';
import Footer from '@/component/Footer';
import withScroll from '@/component/withScroll/withScroll';
import progress from '@/assets/Image/progress.png';
import cooperation from '@/assets/Image/cooperation.png';
import triger from '@/assets/Image/triger.jpg';
function index(props) {
  function jump(data) {
    props.history.push(`/detail?data=${data}`);
  }
  const list = new Array(9).fill({ src: triger }).map((item, index) => {
    return (
      <div className={styles.contentItem} key={index}>
        <img src={item.src} alt="content" onClick={jump.bind(null, index)} />
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.content}>{list}</div>
      <div className={styles.progress}>
        <img src={progress} alt="progress" />
      </div>
      <div className={styles.title}>
        <span>客户的支持让我们不断向前</span>
      </div>
      <div className={styles.cooperation}>
        <img src={cooperation} alt="cooperation" />
      </div>
      <Footer />
    </div>
  );
}
export default withScroll(index);
