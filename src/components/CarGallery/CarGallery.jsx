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
import icon from '../../images/icon.svg';
import NoImg from '../../images/car-placeholder.jpg';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/carRent/selectors';

const CarGallery = ({ cars, onClickFavorite }) => {
  const favCars = useSelector(selectFavorites);
  return (
    <>
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
          if (favCars.find(car => car.id === id)) {
            favorite = true;
          }

          return (
            <StyledItem key={id}>
              <StyledImg
                src={img}
                alt={model}
                onError={e => {
                  e.currentTarget.src = NoImg;
                }}
                draggable="false"
              />
              <NameWrapper>
                <CarTitle>
                  {`${make}`}
                  <StyledSpan>
                    {`${model}`}
                    <DefSpan>,</DefSpan>
                  </StyledSpan>
                  {`${year}`}
                </CarTitle>
                <CarPrice>{rentalPrice}</CarPrice>
              </NameWrapper>
              <SubText>
                <span>{`${addressArr[1]}`}</span>|
                <span>{`${addressArr[2]}`}</span>|
                <span>{`${rentalCompany}`}</span>
                <span>Premium</span>|<span>{`${type}`}</span>
                <span>{`${model}`}</span>|<span>{`${id}`}</span>
                <span>{`${functionalities[0]}`}</span>
              </SubText>
              <ModalBtn
                onClick={() => {
                  //   const modal = document.getElementById(`${id}`);
                  //   if (modal) {
                  //     modal.showModal();
                  //   }
                }}
              >
                Learn more
              </ModalBtn>
              {/* <Modal id={id} /> */}
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
    </>
  );
};

export default CarGallery;
