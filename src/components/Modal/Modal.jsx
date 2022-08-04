import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// const modalRoot = document.getElementById('modalRoot');
class Modal extends Component {
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
      <div className="overlay" onClick={this.handleCloseBackdrop}>
        <div className="modal">
          <img src={objectModal.src} alt={objectModal.alt} />
        </div>
      </div>
    );
  }
}

// const Modal = ({ data }) => {
//   return data.map(e => (
//     <div className="overlay">
//       <div className="modal">
//         <img src={e.largeImageURL} alt={e.tags} />
//       </div>
//     </div>
//   ));
// };
export default Modal;
