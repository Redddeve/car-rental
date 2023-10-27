import CarGallery from 'components/CarGallery/CarGallery';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectLoading } from 'redux/carRent/selectors';
import { removeFromFavorite } from 'redux/carRent/slice';
import { HiddenTitle } from 'styles/commonStyled';
import {
  NoFavLink,
  NoFavText,
  NoFavTitle,
  NoFavWrapper,
} from './Favorites.styled';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [carsToRender, setCarsToRender] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    const slicedCars = favorites.slice(0, page * 12);
    setCarsToRender(slicedCars);
  }, [page, favorites]);

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
          <CarGallery cars={carsToRender} onFavoriteClick={removeFavorite} />
          {!loading && carsToRender.length !== favorites.length && (
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
