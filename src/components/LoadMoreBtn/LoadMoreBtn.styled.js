import styled from 'styled-components';
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  color: var(--btnMain);
  background: transparent;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;

  &:hover,
  &:active {
    color: var(--hoverActive);
  }
`;
