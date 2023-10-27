import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-bottom: 100px;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  max-height: 426px;
  min-width: 274px;
  flex-basis: 100%;

  @media only screen and (min-width: 768px) {
    flex-basis: 33.3%;
  }
  @media only screen and (min-width: 1280px) {
    flex-basis: 20%;
  }
`;

export const StyledImg = styled.img`
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  object-fit: cover;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CarTitle = styled.h3`
  display: flex;
  gap: 4px;
  font-weight: 500;
`;

export const StyledSpan = styled.span`
  color: var(--btnMain);
`;
export const DefSpan = styled(StyledSpan)`
  color: var(--general);
`;

export const CarPrice = styled.p`
  font-weight: 500;
`;

export const SubText = styled.p`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  color: var(--subText);
  font-size: 12px;
  margin-bottom: 28px;
`;

export const ModalBtn = styled.button`
  color: #fff;
  background-color: var(--btnMain);
  font-size: 14px;
  width: 100%;
  padding: 12px 0;
  border: 0;
  border-radius: 12px;
  &:hover {
    background-color: var(--hoverActive);
  }
`;

export const FavBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background: transparent;
  border: none;
  transition: ease;
  padding: 0;
`;

export const StyledSvg = styled.svg`
  stroke: ${props => props.$strokeSvg};
  fill: ${props => props.$fillSvg};

  &:hover {
    fill: var(--hoverActive);
    stroke: none;
  }
`;
