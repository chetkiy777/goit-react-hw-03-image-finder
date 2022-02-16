import React from 'react';
import styles from './styles.module.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className={styles.Button} onClick={this.props.loadMore}>
        LOAD MORE
      </button>
    );
  }
}
