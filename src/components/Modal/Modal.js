import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }

  handelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
      if (event.currentTarget === event.target) {
           this.props.onClose();
      }
  }


  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};