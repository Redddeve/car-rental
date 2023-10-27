import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiddenTitle } from 'styles/commonStyled';

const PageNotFound = () => {
  return (
    <CenterWrapper>
      <HiddenTitle>Nonexistent Page</HiddenTitle>
      <Link to="/">Go to Home</Link>
    </CenterWrapper>
  );
};

export default PageNotFound;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
