import { StyledButton, StyledWrapper } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <StyledWrapper className="flex justify-center ">
      <StyledButton onClick={onLoadMore}>Load more</StyledButton>
    </StyledWrapper>
  );
};

export default LoadMoreBtn;
