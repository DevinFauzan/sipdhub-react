import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate(); // Initialize navigation
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error('Invalid username or password');
        }
  
        await response.json(); // Handle the response; this example assumes JSON response
        navigate('/home'); // Redirect to the dashboard
      } catch (error) {
        setErrorMessage((error as Error).message); // Set the error message for display
      }
    };
    
    return (
        <div className="login-background">
            <div className="login-left">
                <img
                    src="./src/assets/img/logo-kemendagri.png"
                    alt="Top Left Graphic"
                    className="top-left-image"
                />
                <img
                    src="./src/assets/video/video-login.gif"
                    alt="Login Graphic"
                    className="login-graphic"
                />
            </div>
            <div className="login-container">
                <div className="login-header">
                    <img
                        src="./src/assets/img/font-logo.png"
                        alt="Logo"
                        className="login-logo"
                    />
                    <h3 className="login-title">SIPD-HUB</h3>
                    <p className="login-subtitle">Sistem Informasi Pemerintahan Daerah</p>
                    <p className="login-subtitle">Republik Indonesia</p>
                </div>

                <div className="login-form-container">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
