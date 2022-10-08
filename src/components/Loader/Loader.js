import { ThreeCircles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';


export const Loader = () => {
    return (
      <LoaderStyled>
        <ThreeCircles
          height="100"
          width="100"
          ariaLabel="three-circles-rotating"
          outerCircleColor="#3f51b5"
          innerCircleColor="#808080"
          middleCircleColor="#bfbfbf"
        />
      </LoaderStyled>
    );
}
