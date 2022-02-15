import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './styles.module.css';

const ImageGallery = ({ imgArr }) => {
  return (
    <ul className={styles.gallery}>
      {imgArr.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
