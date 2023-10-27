import CarGallery from 'components/CarGallery/CarGallery';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, loadMore } from 'redux/carRent/operations';
import { selectCars, selectLoading } from 'redux/carRent/selectors';
import { addToFavorite, removeFromFavorite } from 'redux/carRent/slice';
// import { Loader } from 'components/Loader';

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

  function onClickFavorite(car, favorite) {
    if (favorite) {
      dispatch(removeFromFavorite(car.id));
    } else {
      dispatch(addToFavorite(car));
    }
  }

  return (
    <div>
      {/* {loading ? (
        <Loader />
      ) : (
        <CarGallery cars={cars} onClickFavorite={onClickFavorite} />
      )} */}
      {cars.length !== 0 && (
        <CarGallery cars={cars} onClickFavorite={onClickFavorite} />
      )}
      {!loading && cars.length !== 0 && cars.length < 32 && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
    </div>
  );
};

export default Catalog;
