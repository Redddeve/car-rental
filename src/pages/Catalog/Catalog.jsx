import CarGallery from 'components/CarGallery/CarGallery';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/carRent/operations';
import { selectCars } from 'redux/carRent/selectors';
import { addToFavorite, removeFromFavorite } from 'redux/carRent/slice';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchAdverts(1));
  }, [dispatch]);

  function onLoadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchAdverts(nextPage));
  }

  function onClickFavorite(car, favorite) {
    if (favorite) {
      dispatch(removeFromFavorite(car.id));
    } else {
      dispatch(addToFavorite(car));
    }
  }

  return (
    <div>
      <CarGallery cars={cars} onClickFavorite={onClickFavorite} />
      {cars.length < 32 && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default Catalog;
