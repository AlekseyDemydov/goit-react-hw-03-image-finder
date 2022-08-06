const ImageGalleryItem = ({ data, onModal }) => {
  return data.map(el => (
    <li className="imageGalleryItem" key={el.id}>
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
