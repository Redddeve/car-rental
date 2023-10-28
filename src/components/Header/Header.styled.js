import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  box-shadow: gray 0px 4px 8px;
  gap: 20px;
  padding: 16px;
  font-size: 18px;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: black;

  &.active {
    color: var(--bg);
    background-color: var(--btnMain);
  }
  &:hover:not(.active) {
    color: var(--hoverActive);
  }
`;
