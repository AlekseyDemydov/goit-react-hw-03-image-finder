const ImageGalleryItem = ({ data, onModal, toggleModal }) => {
  return data.map(el => (
    <li className="imageGalleryItem" key={el.id} onClick={toggleModal}>
      <img
        src={el.webformatURL}
        className="imageGalleryItem-image"
        alt={el.tags}
        onClick={() => onModal(el.largeImageURL, el.tags)}
      />
    </li>
  ));
};
export default ImageGalleryItem;
