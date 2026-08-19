import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { store } from './store/store';
import AppThemeProvider from './theme/AppThemeProvider';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppThemeProvider>
          <AuthProvider>
            <App />

            <ToastContainer
              position='top-right'
              autoClose={3000}
              hideProgressBar
              newestOnTop
              closeOnClick
              pauseOnHover
              theme='dark'
            />
          </AuthProvider>
        </AppThemeProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
