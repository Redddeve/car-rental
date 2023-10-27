import CarGallery from 'components/CarGallery/CarGallery';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, loadMore } from 'redux/carRent/operations';
import { selectCars, selectLoading } from 'redux/carRent/selectors';
import { addToFavorite, removeFromFavorite } from 'redux/carRent/slice';
import { HiddenTitle } from 'styles/commonStyled';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAdverts(1));
  }, [dispatch]);

  function onLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(loadMore(nextPage));
  }

  function onFavoriteClick(car, favorite) {
    if (favorite) {
      dispatch(removeFromFavorite(car.id));
    } else {
      dispatch(addToFavorite(car));
    }
  }

  return (
    <section>
      <HiddenTitle>Car Catalog</HiddenTitle>
      {cars.length && (
        <CarGallery cars={cars} onFavoriteClick={onFavoriteClick} />
      )}
      {!loading && cars.length && cars.length < 32 && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
    </section>
  );
};

export default Catalog;
