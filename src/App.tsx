import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/login'; // Login component import
import Home from './components/home'; // Ensure your path is correct
import HomeContainer from './components/HomeContainer';
import Dapodik from './components/dapodik';
import KemendikbudPendidikan from './components/sisense-kemendikbud-pendidikan';
// import DapodikResp from './components/dapodikresp';
import Kemenko from './components/kemenko';
// import Latihan from './components/latihan';
import Bkkbn from './components/bkkbnnew';
import Sipd from './components/sipd';
// import Bkkbn from './components/bkkbn';
import SisenseBkkbnKeluargaStunting from './components/sisense-bkkbn-resiko-keluarga-stunting';
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { ProfileCompanyContentCopy } from './public-profile/profiles/company copy';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <SisenseContextProvider
      url={import.meta.env.VITE_APP_SISENSE_URL}
      token={import.meta.env.VITE_APP_SISENSE_TOKEN}
    >
      <ProfileCompanyContentCopy>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<HomeContainer />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dapodik" element={<KemendikbudPendidikan isSelected={true}/>} />
              <Route path='/kemenko' element={<Kemenko />} />
              <Route path='/sipd' element={<Sipd />} />
              <Route path='/bkkbn' element={<SisenseBkkbnKeluargaStunting />} />
              {/* <Route path='/latihan' element={<Latihan />} /> */}
            </Route>
          </Routes>
        </Router>
      </ProfileCompanyContentCopy>
    </SisenseContextProvider>
  );
};

export default App;