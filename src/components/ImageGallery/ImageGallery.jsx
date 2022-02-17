import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './styles.module.css';

const ImageGallery = ({ imgArr, showModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imgArr.map(({ id, previewURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          path={previewURL}
          largeimg={largeImageURL}
          showModal={showModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
