import PropTypes from 'prop-types';
import { BtnBox, BtnLaod } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <BtnBox>
      <BtnLaod type="button" onClick={onClick}>
        Load more
      </BtnLaod>
    </BtnBox>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
