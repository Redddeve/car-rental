import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import Loader from 'components/Loader';
import { App } from 'components/App';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter basename="/car-rental">
          <App />
          <ToastContainer autoClose={1000} />
        </BrowserRouter>
        <GlobalStyles />
      </PersistGate>
    </Provider>
  </>
);
