import PropTypes from 'prop-types';

const Modal = ({ path }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src="" alt="largeImage" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  path: PropTypes.string,
};

export default Modal;
