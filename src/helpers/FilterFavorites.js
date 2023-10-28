import { toast } from 'react-toastify';

export const FilterFavorites = (favorites, filterObj) => {
  const { make, price, mileageFrom, mileageTo } = filterObj;

  try {
    let favArr = [...favorites];
    if (make) {
      favArr = favArr.filter(car => car.make === make);
      if (price) {
        favArr = favArr.filter(car => {
          return Number(car.rentalPrice.slice(1)) <= Number(price);
        });
      }
      if (mileageFrom && mileageTo) {
        favArr = favArr.filter(
          car =>
            Number(mileageFrom) <= car.mileage &&
            Number(mileageTo) >= car.mileage
        );
      } else if (mileageFrom) {
        favArr = favArr.filter(car => Number(mileageFrom) >= car.mileage);
      } else if (mileageTo) {
        favArr = favArr.filter(car => Number(mileageTo) <= car.mileage);
      }
    } else {
      if (price) {
        favArr = favArr.filter(car => {
          return Number(car.rentalPrice.slice(1)) <= Number(price);
        });
      }
      if (mileageFrom && mileageTo) {
        favArr = favArr.filter(
          car =>
            Number(mileageFrom) >= car.mileage &&
            Number(mileageTo) <= car.mileage
        );
      } else if (mileageFrom) {
        favArr = favArr.filter(car => Number(mileageFrom) >= car.mileage);
      } else if (mileageTo) {
        favArr = favArr.filter(car => Number(mileageTo) <= car.mileage);
      }
    }
    if (favArr.length === 0) {
      toast.error('No cars found for your search criteria');
      return [];
    }
    return favArr;
  } catch (error) {
    toast.error('Oops, something went wrong!');
    return [];
  }
};
