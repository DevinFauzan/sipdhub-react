// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/login'; // Login component import
import Home from './components/home'; // Ensure your path is correct
import HomeContainer from './components/HomeContainer';
import KemendikbudPendidikan from './components/sisense-kemendikbud-pendidikan';
import Kemenko from './components/kemenko';
import Bkkbn from './components/bkkbnnew';
import SisenseBkkbnKeluargaStunting from './components/sisense-bkkbn-resiko-keluarga-stunting';
import SisenseKemenko from './components/sisesne-kemenko';
import SisenseKemenkoFullDashboard from './components/sisesne-kemenko sedashboard';
import SisenseBPJS from './components/sisense-bpjs';
import SisenseKemenkoOneTheme from './components/sisesne-kemenko copy';
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { ProfileCompanyContentCopy } from './public-profile/profiles/company copy';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SisenseContextProvider
        url={import.meta.env.VITE_APP_SISENSE_URL}
        token={import.meta.env.VITE_APP_SISENSE_TOKEN}
      >
        <ProfileCompanyContentCopy>
          <Router>
            <Routes>
              <Route path="/sipd-hub" element={<Login />} />
              <Route path='/sipd-hub' element={<HomeContainer />}>
                <Route path="home" element={<ProtectedRoute element={<Home />} />} />
                <Route path="dapodik" element={<ProtectedRoute element={<KemendikbudPendidikan isSelected={true} />} />} />
                <Route path='kemenko' element={<ProtectedRoute element={<SisenseKemenkoOneTheme isSelected={true} />} />} />
                <Route path='bpjs-kesehatan' element={<ProtectedRoute element={<SisenseBPJS isSelected={true} />} />} />
                <Route path='bkkbn' element={<ProtectedRoute element={<SisenseBkkbnKeluargaStunting isSelected={true} />} />} />
                <Route path='kemenkodashboard' element={<ProtectedRoute element={<SisenseKemenkoFullDashboard />} />} />
              </Route>
            </Routes>
          </Router>
        </ProfileCompanyContentCopy>
      </SisenseContextProvider>
    </AuthProvider>
  );
};

export default App;
