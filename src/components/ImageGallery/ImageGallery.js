import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageListStyled } from './ImageGallery.styled';

export const ImageGallery = ({ data, toggleLargeSize }) => {
  return (
    <ImageListStyled>
      {data.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            preview={webformatURL}
            url={largeImageURL}
            alt={tags}
            toggleLargeSize={toggleLargeSize}
          />
        );
      })}
    </ImageListStyled>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleLargeSize: PropTypes.func.isRequired,
};
