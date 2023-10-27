import {
  CarPrice,
  CarTitle,
  DefSpan,
  FavBtn,
  ModalBtn,
  NameWrapper,
  StyledImg,
  StyledItem,
  StyledList,
  StyledSpan,
  StyledSvg,
  SubText,
} from './CarGallery.styled';
import icon from '../../images/icons.svg';
import NoImg from '../../images/car-placeholder.jpg';
import { useSelector } from 'react-redux';
import { selectFavorites, selectLoading } from 'redux/carRent/selectors';
import { Loader } from 'components/Loader';
import { useModalContext } from 'context/useModalContext';
import Modal from 'components/Modal/Modal';

const CarGallery = ({ cars, onClickFavorite }) => {
  const { isOpen, open, CarId, setId } = useModalContext();
  const favCars = useSelector(selectFavorites);
  const loading = useSelector(selectLoading);

  function modalContent(id) {
    setId(id);
    open();
  }

  return (
    <>
      {loading && <Loader />}
      <StyledList>
        {cars?.map(car => {
          const {
            id,
            year,
            make,
            model,
            type,
            img,
            rentalPrice,
            address,
            rentalCompany,
            functionalities,
          } = car;
          const addressArr = address.split(',');
          let favorite = false;
          if (favCars.find(favCar => favCar.id === id)) {
            favorite = true;
          }

          return (
            <StyledItem key={id}>
              <StyledImg
                src={`${img}`}
                alt={model}
                onError={e => {
                  e.currentTarget.src = NoImg;
                }}
                loading="lazy"
                draggable="false"
              />
              <NameWrapper>
                <CarTitle>
                  {make}
                  <StyledSpan>
                    {model}
                    <DefSpan>,</DefSpan>
                  </StyledSpan>
                  {year}
                </CarTitle>
                <CarPrice>{rentalPrice}</CarPrice>
              </NameWrapper>
              <SubText>
                <span>{addressArr[1]}</span>|<span>{addressArr[2]}</span>|
                <span>{rentalCompany}</span>|<span>Premium</span>|
                <span>{type}</span>|<span>{model}</span>|<span>{id}</span>|
                <span>{functionalities[0]}</span>
              </SubText>
              <ModalBtn onClick={() => modalContent(id)}>Learn more</ModalBtn>

              <FavBtn onClick={() => onClickFavorite(car, favorite)}>
                <StyledSvg
                  width="18px"
                  height="18px"
                  $fillSvg={favorite ? 'var(--btnMain)' : 'none'}
                  $strokeSvg={favorite ? 'var(--btnMain)' : '#ffffffcc'}
                >
                  <use href={`${icon}#heart`}></use>
                </StyledSvg>
              </FavBtn>
            </StyledItem>
          );
        })}
      </StyledList>
      {isOpen ? <Modal id={CarId} /> : null}
    </>
  );
};

export default CarGallery;
