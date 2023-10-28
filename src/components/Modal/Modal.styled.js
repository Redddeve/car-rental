import {
  CarPrice,
  CarTitle,
  FavBtn,
  StyledImg,
  StyledSpan,
  SubText,
} from 'components/CarGallery/CarGallery.styled';
import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--subText);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 40px;
  border-radius: 24px;
  background: var(--bg);
  position: fixed;
  z-index: 50;
`;

export const CloseBtn = styled(FavBtn)`
  right: 16px;
  top: 16px;
`;

export const StyledSvg = styled.svg`
  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalImg = styled(StyledImg)`
  height: 248px;
`;

export const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DescrBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FuncBlock = styled(DescrBlock)`
  gap: 8px;
`;

export const ModalCar = styled(CarTitle)`
  margin-bottom: 8px;
`;

export const ModelSpan = styled(StyledSpan)``;

export const GenSpan = styled(ModelSpan)`
  color: var(--general);
`;

export const Price = styled(CarPrice)``;

export const BlockText = styled(SubText)`
  max-width: 400px;
  margin-bottom: 14px;
`;

export const FuncText = styled(BlockText)`
  max-width: 100%;
  margin-bottom: 0;
`;

export const DescrText = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;

export const FuncTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const CondText = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.02em;
`;

export const CondBubbles = styled.span`
  padding: 7px 14px;
  border-radius: 35px;
  background: var(--subBg);
`;

export const BlueSpan = styled.span`
  color: var(--btnMain);
  font-weight: 600;
`;

export const RentLink = styled.a`
  color: #fff;
  background-color: var(--btnMain);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;
  width: fit-content;
  padding: 12px 50px;
  border: 0;
  border-radius: 12px;
  &:hover {
    background-color: var(--hoverActive);
  }
`;
