import React from 'react';
import logo from '../../img/dekorLogo.png';
import styles from './styles.module.css';

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <img className={styles.loader} src={logo} alt="logo" />
        <span>Загрузка ... </span>
      </div>
    );
  }
}
