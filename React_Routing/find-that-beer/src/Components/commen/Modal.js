import React from "react";
import PropTypes from "prop-types";

// Hamlay yo modal file ma kunai state haru define gardainam. just aako data lai calculate garchham so functional component bhaye hunchha

const Modal = ({ show, handleClose, children }) => (
  // modal vitra ko parameter object destructuring ho
  // it is same as, const {children} = props, props chain as a parameter modal function lay pauthyo
  
  <div className={`modal ${show ? "display-block" : "display-none"}`}>
    <section className="modal-main">
      <button className="btn" onClick={handleClose}>
        <i className="fa fa-times" />
      </button>
      {children}
    </section>
  </div>
);

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.object,
};
export default Modal;