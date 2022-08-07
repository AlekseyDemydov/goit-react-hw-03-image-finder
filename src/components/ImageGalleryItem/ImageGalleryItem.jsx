import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ data, onModal }) => {
  return data.map(el => (
    <li className={s.imageGalleryItem} key={el.id}>
      <img
        src={el.webformatURL}
        className={s.imageGalleryItemImage}
        alt={el.tags}
        onClick={() => onModal(el.largeImageURL, el.tags)}
      />
    </li>
  ));
};
export default ImageGalleryItem;
