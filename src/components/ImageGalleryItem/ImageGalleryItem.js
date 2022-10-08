import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ url, preview, alt, toggleLargeSize }) => {
  return (
    <li
      onClick={() => {
        toggleLargeSize({ url, alt });
      }}
    >
      <img alt={alt} src={preview} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleLargeSize: PropTypes.func.isRequired,
};
