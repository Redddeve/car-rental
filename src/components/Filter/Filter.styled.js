import styled from 'styled-components';
import Select from 'react-select';
import { ModalBtn } from 'components/CarGallery/CarGallery.styled';

export const FilterWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;

  .Select__control {
    height: 48px;
    padding: 4px 10px;
    border: none;
    border-radius: 14px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    background: var(--inputBg);
    cursor: pointer;
  }

  .Select__control--is-focused {
    outline: none;
  }

  .Select__placeholder {
    color: var(--general);
  }

  .Select__indicator-separator {
    display: none;
  }
  .Select__indicator {
    color: var(--general);
  }

  .Select__option {
    color: var(--filterSubText);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
  }

  .Select__option--is-selected {
    color: var(--general);
    background: var(--inputBg);
    cursor: pointer;
  }
`;

export const LabelText = styled.p`
  color: var(--filterSubText);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 4px;
`;

export const StyledSelector = styled(Select)`
  width: 224px;
  border-radius: 14px;
  background: var(--inputBg);
`;

export const StyledInput = styled.input`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  width: 160px;
  height: 48px;
  padding: 14px;
  border: none;
  outline: none;
  color: var(--general);
  background: var(--inputBg);
`;

export const InputLeft = styled(StyledInput)`
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;

export const InputRight = styled(StyledInput)`
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`;

export const StyledSearch = styled(ModalBtn)`
  width: inherit;
  padding: 14px 44px;
  margin-top: 20px;
  font-weight: 600;
  color: var(--bg);
  background: var(--btnMain);
  &:hover {
    background: var(--hoverActive);
  }
`;
