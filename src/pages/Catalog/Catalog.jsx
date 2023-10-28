import CarGallery from 'components/CarGallery/CarGallery';
import Filter from 'components/Filter/Filter';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  fetchFiltered,
  loadMore,
} from 'redux/carRent/operations';
import {
  selectCars,
  selectFilter,
  selectIsFiltered,
  selectLoading,
} from 'redux/carRent/selectors';
import { addToFavorite, removeFromFavorite } from 'redux/carRent/slice';
import { HiddenTitle } from 'styles/commonStyled';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const isFiltered = useSelector(selectIsFiltered);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchAdverts(1));
  }, [dispatch]);

  function onLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    if (!isFiltered) {
      dispatch(loadMore(nextPage));
    } else {
      const DataLoad = { ...filter, page: nextPage };
      dispatch(fetchFiltered(DataLoad));
    }
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
      <Filter isCatalog={true} />
      {cars.length !== 0 && (
        <CarGallery cars={cars} onFavoriteClick={onFavoriteClick} />
      )}
      {!loading &&
        cars.length !== 0 &&
        cars.length % 12 === 0 &&
        cars.length < 32 && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </section>
  );
};

export default Catalog;
