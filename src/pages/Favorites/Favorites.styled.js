import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NoFavWrapper = styled.div`
  text-align: center;
  margin-top: 150px;
`;

export const NoFavTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

export const NoFavText = styled.p`
  font-size: 16px;
`;

export const NoFavLink = styled(Link)`
  color: var(--btnMain);
  font-weight: 600;
  &:hover {
    color: var(--hoverActive);
  }
`;
