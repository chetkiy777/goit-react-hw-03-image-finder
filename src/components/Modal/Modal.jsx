import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.largeImage} alt="image" width="320" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
