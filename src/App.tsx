import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/login'; // Login component import
import Home from './components/home'; // Ensure your path is correct
import HomeContainer from './components/HomeContainer';
import Dapodik from './components/dapodik';
import Kemenko from './components/kemenko';
import Latihan from './components/latihan';
import Bkkbn from './components/bkkbn';
import Sipd from './components/sipd';
import Bkkbnnew from './components/bkkbnnew';
import { SisenseContextProvider } from '@sisense/sdk-ui';


const App: React.FC = () => {
  return (
    <SisenseContextProvider
      url={import.meta.env.VITE_APP_SISENSE_URL}
      token={import.meta.env.VITE_APP_SISENSE_TOKEN}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Adjust path as needed */}
          <Route element={<HomeContainer />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dapodik" element={<Dapodik />} />
            <Route path='/kemenko' element={<Kemenko />} />
            <Route path='/latihan' element={<Latihan />} />
            <Route path='/bkkbn' element={<Bkkbn />} />
            <Route path='/sipd' element={<Sipd />} />
            <Route path='/bkkbnnew' element={<Bkkbnnew />} />
          </Route>
        </Routes>
      </Router>
    </SisenseContextProvider>
  );
};

export default App;