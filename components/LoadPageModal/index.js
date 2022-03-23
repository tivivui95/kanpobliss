import React from "react";
import { Modal } from "reactstrap";

const LoadPageModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      centered={true}
      modalClassName="modal-coming"
      className='modal-coming modal-dialog-centered"'
      id="comingSoonModal"
    >
      <div className="circle-loading"></div>
      aaaaa
    </Modal>
  );
};

export default LoadPageModal;
