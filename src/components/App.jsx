import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

export const App = () => {
  const Home = lazy(() => import('pages/Home/Home'));
  const Catalog = lazy(() => import('pages/Catalog/Catalog'));
  const Favorites = lazy(() => import('pages/Favorites/Favorites'));
  const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
