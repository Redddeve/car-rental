import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const adverts = axios.create({
  baseURL: 'https://6513d27f8e505cebc2ea3434.mockapi.io/',
});

export const fetchAdverts = createAsyncThunk(
  'fetchAdverts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await adverts.get('/adverts', {
        params: {
          p: 1,
          l: 12,
        },
      });
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const loadMore = createAsyncThunk(
  'loadMore',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await adverts.get('/adverts', {
        params: {
          p: page,
          l: 12,
        },
      });
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const fetchFiltered = createAsyncThunk(
  'fetchFiltered',
  async (filterObj, { rejectWithValue }) => {
    const { make, mileageFrom, mileageTo, price, page = 1 } = filterObj;

    try {
      let filteredArr = [];
      if (make) {
        const { data } = await adverts.get('/adverts', {
          params: {
            filter: make,
            p: page,
            l: 12,
          },
        });
        filteredArr = data;
        if (price) {
          filteredArr = filteredArr.filter(car => {
            return Number(car.rentalPrice.slice(1)) <= Number(price);
          });
        }

        if (mileageFrom && mileageTo) {
          filteredArr = filteredArr.filter(
            car =>
              Number(mileageFrom) <= car.mileage &&
              Number(mileageTo) >= car.mileage
          );
        } else if (mileageFrom) {
          filteredArr = filteredArr.filter(
            car => Number(mileageFrom) <= car.mileage
          );
        } else if (mileageTo) {
          filteredArr = filteredArr.filter(
            car => Number(mileageTo) >= car.mileage
          );
        }
      } else {
        const { data } = await adverts.get(`/adverts`);
        filteredArr = data;
        if (price) {
          filteredArr = filteredArr.filter(car => {
            return Number(car.rentalPrice.slice(1)) <= Number(price);
          });
        }
        if (mileageFrom && mileageTo) {
          filteredArr = filteredArr.filter(
            car =>
              Number(mileageFrom) <= car.mileage &&
              Number(mileageTo) >= car.mileage
          );
        } else if (mileageFrom) {
          filteredArr = filteredArr.filter(
            car => Number(mileageFrom) <= car.mileage
          );
        } else if (mileageTo) {
          filteredArr = filteredArr.filter(
            car => Number(mileageTo) >= car.mileage
          );
        }
        if (page && filteredArr.length > 12) {
          filteredArr = filteredArr.slice(0, page * 12);
        }
      }
      if (filteredArr.length === 0) {
        toast.info('There are no cars that meet your criteria');
        return [];
      }
      const dataObj = { filteredArr, filterObj };
      return dataObj;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
