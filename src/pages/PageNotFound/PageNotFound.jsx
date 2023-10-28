import { HiddenTitle } from 'styles/commonStyled';
import {
  BigText,
  BiggerText,
  CenterWrapper,
  NotFoundWrapper,
  StyledLink,
  TextWrapper,
} from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <HiddenTitle>Nonexistent Page</HiddenTitle>
      <CenterWrapper>
        <TextWrapper>
          <BiggerText>Oops!</BiggerText>
          <BigText>404 - The Page can't be found</BigText>
        </TextWrapper>
        <StyledLink to="/">Go to Homepage</StyledLink>
      </CenterWrapper>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
