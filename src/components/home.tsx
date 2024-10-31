// src/page/Home.tsx
import React from 'react';
// import './Home.css'; // Import CSS for the Home component

const Home: React.FC = () => {
  return (
    <div className="card p-3">
      <div className="card-header br-15-px text-center bg-base-color">
        <h4 className="m-0 font-weight-bold text-white bg-base-color">Selamat Datang di Aplikasi SIPD Hub</h4>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="mt-3">
            <div className="card p-3" style={{ height: '100%' }}>
              <h5>
                Nama : KAPUSDATIN
              </h5>
              <h5>
                Wilayah : ADMINISTRATOR
              </h5>
              <h5>
                Provinsi :
              </h5>
              <h5>
                Kabupaten :
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img src="../src/assets/img/logo-kemendagri.PNG" height="400px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
