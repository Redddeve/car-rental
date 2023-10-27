import Header from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />

      <OutletWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
    </>
  );
};

export default Layout;

const OutletWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
`;
