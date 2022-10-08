import PropTypes from 'prop-types';
import { GalleryItemStyled, ImgStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, preview, alt, toggleLargeSize }) => {
  return (
    <GalleryItemStyled
      onClick={() => {
        toggleLargeSize({ url, alt });
      }}
    >
      <ImgStyled alt={alt} src={preview} />
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleLargeSize: PropTypes.func.isRequired,
};
