import PropTypes from 'prop-types';
import { BtnLaod } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <BtnLaod type="button" onClick={onClick}>
      Load more
    </BtnLaod>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
