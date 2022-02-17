import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ path, id, showModal }) => {
  return (
    <li id={id} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemIMG}
        src={path}
        alt="imagItem"
        onClick={showModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  path: PropTypes.string,
  id: PropTypes.number,
  showModal: PropTypes.func,
};

export default ImageGalleryItem;
