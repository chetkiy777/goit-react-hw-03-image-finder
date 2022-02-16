import styles from './styles.module.css';

const ImageGalleryItem = ({ path, id, largeimg }) => {
  return (
    <li id={id} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemIMG}
        src={path}
        alt="imagItem"
        largeimg={largeimg}
      />
    </li>
  );
};

export default ImageGalleryItem;
