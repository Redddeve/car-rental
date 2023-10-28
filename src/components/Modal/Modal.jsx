import { useSelector } from 'react-redux';
import icon from '../../images/icons.svg';
import NoImg from '../../images/car-placeholder.jpg';
import { selectCars } from 'redux/carRent/selectors';
import { useModalContext } from 'context/useModalContext';
import { useEffect } from 'react';
import {
  Backdrop,
  BlockText,
  BlocksWrapper,
  BlueSpan,
  CloseBtn,
  CondBubbles,
  CondText,
  DescrBlock,
  DescrText,
  FuncBlock,
  FuncText,
  FuncTitle,
  GenSpan,
  ModalCar,
  ModalImg,
  ModalWrapper,
  ModelSpan,
  RentLink,
  StyledSvg,
} from './Modal.styled';

const Modal = ({ id }) => {
  const cars = useSelector(selectCars);
  const chosenCar = cars.find(car => car.id === id);
  const {
    img,
    year,
    make,
    model,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice,
  } = chosenCar;
  const addressArr = address.split(',');
  const conditionsArr = rentalConditions.split('\n');
  const { close } = useModalContext();
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);
  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  const onCloseBtnClick = e => {
    close();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWrapper>
        <CloseBtn onClick={onCloseBtnClick}>
          <StyledSvg width="24" height="24">
            <use href={`${icon}#icon-x`}></use>
          </StyledSvg>
        </CloseBtn>
        <ModalImg
          src={img}
          alt={model}
          onError={e => {
            e.currentTarget.src = NoImg;
          }}
          loading="lazy"
          draggable="false"
        />
        <BlocksWrapper>
          <DescrBlock>
            <ModalCar>
              {`${make}`}
              <ModelSpan>
                {`${model}`}
                <GenSpan>,</GenSpan>
              </ModelSpan>
              {`${year}`}
            </ModalCar>
            <BlockText>
              <span>{addressArr[1]}</span>|<span>{addressArr[2]}</span>|
              <span>Id: {id}</span>|<span>Year: {year}</span>|
              <span>Type: {type}</span>|
              <span>Fuel Consumption: {fuelConsumption}</span>|
              <span>Engine size: {engineSize}</span>
            </BlockText>
            <DescrText>{description}</DescrText>
          </DescrBlock>

          <FuncBlock>
            <FuncTitle>Accessories and functionalities:</FuncTitle>
            <div>
              <FuncText>
                <span>{functionalities[0]}</span>|
                <span>{functionalities[1]}</span>|
                <span>{functionalities[2]}</span>
              </FuncText>
              <FuncText>
                <span>{accessories[0]}</span>|<span>{accessories[1]}</span>|
                <span>{accessories[2]}</span>
              </FuncText>
            </div>
          </FuncBlock>

          <FuncBlock>
            <FuncTitle>Rental Conditions: </FuncTitle>
            <CondText>
              {conditionsArr.map(item => {
                const matches = item.match(/\d+/g);
                if (matches) {
                  const age = matches[0];
                  const ageArr = item.split(age);
                  return (
                    <CondBubbles key={item}>
                      {ageArr[0]}
                      <BlueSpan>{age}</BlueSpan>
                    </CondBubbles>
                  );
                } else {
                  return <CondBubbles key={item}>{item}</CondBubbles>;
                }
              })}
              <CondBubbles>
                Mileage: <BlueSpan>{mileage.toLocaleString()}</BlueSpan>
              </CondBubbles>
              <CondBubbles>
                Price: <BlueSpan>{rentalPrice.slice(1)}$</BlueSpan>
              </CondBubbles>
            </CondText>
          </FuncBlock>
          <RentLink href="tel:+380730000000">Rental car</RentLink>
        </BlocksWrapper>
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
