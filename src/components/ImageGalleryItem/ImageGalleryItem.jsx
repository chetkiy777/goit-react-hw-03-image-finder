const ImageGalleryItem = ({ img, path, id }) => {
  return (
    <li key={id}>
      <img src={path} alt="image-item" />
    </li>
  );
};

export default ImageGalleryItem;
