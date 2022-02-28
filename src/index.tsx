import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, Signin } from './components';
import { ThemeProvider } from '@mui/styles';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import { theme } from './Theme/themes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FirebaseAppProvider } from 'reactfire'; 
import 'firebase/auth'; 
import { firebaseConfig } from './firebaseConfig';
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home title  ={'Marvels Inventory'}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
