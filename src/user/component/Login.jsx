import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from './../../firebase/firebase'; // Import signInWithEmailAndPassword
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/admin';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      Email : ankitpanda922@gmail.com <br />
      Password : 123456
      <div className="d-flex justify-content-center">
        <div className="card mt-lg p-3" style={{ width: '35rem' }}>
          <h2 className='mt-2 mb-3'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className='form-control'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className='form-control'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className='button pt-2 pb-2 mt-2'>Login</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
