import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const NotFoundWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const CenterWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const TextWrapper = styled.div`
  position: relative;
  height: 200px;
  margin: 0px auto 20px;
  z-index: -1;
  @media only screen and (max-width: 480px) {
    height: 148px;
    margin: 0px auto 10px;
  }
`;

export const BiggerText = styled.h2`
  font-size: 236px;
  font-weight: 200;
  margin: 0px;
  color: var(--general);
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 767px) {
    font-size: 148px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 86px;
  }
`;

export const BigText = styled.h3`
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--general);
  background: #fff;
  padding: 10px 5px;
  margin: auto;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  padding: 13px 23px;
  background: var(--btnMain);
  font-size: 18px;
  transition: 0.2s all;

  &:hover {
    background: var(--hoverActive);
  }
  @media only screen and (max-width: 480px) {
    padding: 7px 15px;
    font-size: 14px;
  }
`;
