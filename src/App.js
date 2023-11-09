
import './App.scss';

import NavHeader from './components/Navigation/NavHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import AppRoutes from './routes/AppRoutes';
import { Rings } from 'react-loader-spinner'
import { UserContext } from './context/UserContext';

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Router>
        {user && user.isLoading ?
          <div className='loading-container'>
            <Rings
              height="80"
              width="80"
              radius="9"
              color="#1877f2"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
            <div>
              Loading data...
            </div>
          </div>

          :
          <>
            <div className='app-header'>
              <NavHeader />
            </div>
            <div className='app-container'>
              <AppRoutes />
            </div>
          </>}

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />

      </Router>
    </>
  );
}

export default App;
