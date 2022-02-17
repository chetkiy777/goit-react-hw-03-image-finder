import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ path, id, largeImage, setLargeUrl }) => {
  const handleClick = e => {
    setLargeUrl(largeImage);
  };
  return (
    <li id={id} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemIMG}
        src={path}
        alt="imagItem"
        onClick={e => handleClick(e)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  path: PropTypes.string,
  id: PropTypes.number,
  largeImage: PropTypes.string,
  setLargeUrl: PropTypes.func,
};

export default ImageGalleryItem;
