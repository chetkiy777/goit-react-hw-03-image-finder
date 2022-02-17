import React from 'react';
import styles from './styles.module.css';
import { ImSpinner } from 'react-icons/im';

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.loaderContainer}>
        <ImSpinner size="32" className="icon-spin" />
        <span className={styles.text}>Загрузка ... </span>
      </div>
    );
  }
}

export default Loader;
