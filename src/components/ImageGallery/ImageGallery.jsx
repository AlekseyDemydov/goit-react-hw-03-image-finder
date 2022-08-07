import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
const ImageGallery = ({ children }) => {
  return <ul className={s.imageGallery}>{children}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};
