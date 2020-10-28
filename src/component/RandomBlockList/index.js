import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.less';
import RandomBlock from '../randomBlock';
import { getRandom } from '@/utils';
export default class index extends React.PureComponent {
  constructor(prop) {
    super(prop);
    this.state = {
      blockList: [],
    };
  }
  start = () => {
    let info = [];
    for (let i = 0; i < 2; i++) {
      info.push({
        width: 161,
        height: 183,
        speed: getRandom.default(100, 150),
        id: uuidv4(),
      });
    }
    this.setState({
      blockList: [...info],
    });
  };
  componentDidMount() {
    this.start();
  }
  render() {
    const list = this.state.blockList.map(item => (
      <RandomBlock {...item} remove={this.remove} key={item.id} />
    ));
    return <div className={styles.container}>{list}</div>;
  }
}
