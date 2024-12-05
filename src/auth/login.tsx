import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoLogin from '../assets/video/video-login.gif';
import logoKemendagri from '../assets/img/logo-kemendagri.png';
import logoKemendagri2 from '../assets/img/font-logo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Changed from username to email
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_AUTH_API_URL}/login`, { // Use the environment variable
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Use 'email' instead of 'username'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid email or password');
      }

      const data = await response.json(); // Handle the response; this example assumes JSON response
      console.log('Login successful:', data); // Log the response for debugging

      // Store the access token in local storage or session storage
      localStorage.setItem('access_token', data.access_token); // Store the access token
      navigate('/home'); // Redirect to the dashboard
    } catch (error) {
      setErrorMessage((error as Error).message); // Set the error message for display
    }
  };

  return (
    <div className="login-background position-relative">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div className="d-flex flex-row align-items-center ">
        <img src={logoKemendagri} height="100px" />
        <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: "1.5em", marginLeft: "10px", fontFamily: 'Nunito' }}>
          Portal Informasi Pemerintahan Dalam Negeri
        </h3>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
        <div className="row">
          <div className="col-lg-7 d-none d-lg-block">
            <img height="100%" src={videoLogin} alt="Login Animation" />
          </div>
          <div className="col-lg-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="card p-5 shadow-lg rounded-30">
              <div className="py-3">
                <img width="100%" src={logoKemendagri2} alt="Logo" />
                <form onSubmit={handleSubmit} className="mt-3 mx-3">
                  <div className="form-group">
                    <input
                      type="text"
                      id="email" // Changed id to email
                      value={email} // Changed from username to email
                      onChange={(e) => setEmail(e.target.value)} // Changed from setUsername to setEmail
                      required
                      placeholder="Email" // Updated placeholder to Email
                      className="form-control rounded-30"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                      className="form-control rounded-30"
                    />
                  </div>
                  <button type="submit" className="btn btn-block rounded-30 text-white base-color-hover">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
