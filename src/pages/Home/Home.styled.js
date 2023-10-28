import styled from 'styled-components';

export const StyledHero = styled.div`
  position: relative;
  z-index: 5;
  min-height: calc(100vh - 82px);
  background-size: cover;
  background-image: url(https://autovista24.autovistagroup.com/wp-content/uploads/sites/5/2021/06/Older20cars20blurred-1024x683.jpg);

  div {
    z-index: 100;
    position: absolute;
    inset: 0;
    background-color: var(--subText);
  }
`;
