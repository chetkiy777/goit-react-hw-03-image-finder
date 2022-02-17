import styles from './styles.module.css';

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

export default ImageGalleryItem;
