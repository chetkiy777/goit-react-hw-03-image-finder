import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './styles.module.css';
import PropTypes from 'prop-types'

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

ImageGallery.propTypes = {
  showModal: PropTypes.func,
  imgArr: PropTypes.arrayOf(PropTypes.shape)
}
export default ImageGallery;
