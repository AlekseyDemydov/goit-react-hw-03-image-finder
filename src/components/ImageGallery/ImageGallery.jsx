import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => {
  return <ul className="imageGallery">{children}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};
