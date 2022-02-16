import React from 'react';
import styles from './styles.module.css';

export default class Button extends React.Component {
  loadMore = () => {};

  render() {
    return (
      <div>
        <button className={styles.Button} onClick={this.loadMore}>
          LOAD MORE
        </button>
      </div>
    );
  }
}
