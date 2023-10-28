import CarGallery from 'components/CarGallery/CarGallery';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  selectFilteredArr,
  selectLoading,
} from 'redux/carRent/selectors';
import { removeFromFavorite } from 'redux/carRent/slice';
import { HiddenTitle } from 'styles/commonStyled';
import {
  NoFavLink,
  NoFavText,
  NoFavTitle,
  NoFavWrapper,
} from './Favorites.styled';
import Filter from 'components/Filter/Filter';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [carsToRender, setCarsToRender] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  let filtered = useSelector(selectFilteredArr);
  const loading = useSelector(selectLoading);

  if (filtered.length === 0) {
    filtered = favorites;
  }

  useEffect(() => {
    const slicedCars = filtered.slice(0, page * 12);
    setCarsToRender(slicedCars);
  }, [page, filtered]);

  function removeFavorite(car) {
    dispatch(removeFromFavorite(car.id));
  }

  function onLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
  }

  return (
    <section>
      <HiddenTitle>Favorite Cars</HiddenTitle>
      {carsToRender.length ? (
        <>
          <Filter isCatalog={false} />
          <CarGallery cars={carsToRender} onFavoriteClick={removeFavorite} />
          {!loading && carsToRender.length % 12 === 0 && (
            <LoadMoreBtn onLoadMore={onLoadMore} />
          )}
        </>
      ) : (
        <NoFavWrapper>
          <NoFavTitle>You did not yet choose your favorites</NoFavTitle>
          <NoFavText>
            You should go to <NoFavLink to="/catalog">Catalog</NoFavLink> and
            click on hearts on the ones you like
          </NoFavText>
        </NoFavWrapper>
      )}
    </section>
  );
};

export default Favorites;
