import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleCloseBackdrop = e => {
    if (e.target.nodeName !== 'DIV') return;
    this.props.toggleModal();
  };

  render() {
    const { objectModal } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleCloseBackdrop}>
        <div className={s.modal}>
          <img src={objectModal.src} alt={objectModal.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
