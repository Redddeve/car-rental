import { components } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import {
  FilterWrapper,
  InputLeft,
  InputRight,
  LabelText,
  StyledForm,
  StyledSearch,
  StyledSelector,
} from './Filter.styled';
import { makes, prices } from './options';
import { fetchAdverts, fetchFiltered } from 'redux/carRent/operations';
import { filterFavorites } from 'redux/carRent/slice';

const Filter = ({ isCatalog }) => {
  const dispatch = useDispatch();
  const { register, control, handleSubmit } = useForm();

  const DropdownIndicator = props => {
    if (props.isFocused) {
      return (
        <components.DropdownIndicator {...props}>
          <VscChevronUp />
        </components.DropdownIndicator>
      );
    }
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };

  function onSubmit({ price, make, mileageFrom, mileageTo }) {
    if (isCatalog) {
      price || make || mileageFrom || mileageTo
        ? dispatch(
            fetchFiltered({
              price: price?.value,
              make: make?.value,
              mileageFrom,
              mileageTo,
            })
          )
        : dispatch(fetchAdverts(1));
    } else {
      dispatch(
        filterFavorites({
          price: price?.value,
          make: make?.value,
          mileageFrom,
          mileageTo,
        })
      );
    }
  }

  return (
    <FilterWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          <LabelText>Car brand</LabelText>
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <StyledSelector
                {...field}
                options={makes}
                isClearable={true}
                classNamePrefix="Select"
                placeholder="Enter brand"
                components={{ DropdownIndicator }}
              />
            )}
          />
        </label>
        <label>
          <LabelText>Price/1 hour</LabelText>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <StyledSelector
                {...field}
                options={prices}
                isClearable={true}
                classNamePrefix="Select"
                placeholder="To $"
                components={{ DropdownIndicator }}
              />
            )}
          />
        </label>
        <div>
          <label>
            <LabelText>Сar mileage/km</LabelText>
            <InputLeft
              type="number"
              {...register('mileageFrom')}
              placeholder="From"
            />
            <InputRight
              type="number"
              placeholder="To"
              {...register('mileageTo')}
            />
          </label>
        </div>
        <StyledSearch>Search</StyledSearch>
      </StyledForm>
    </FilterWrapper>
  );
};

export default Filter;
