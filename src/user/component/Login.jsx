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
      <div className='position-absolute'>
      Email : ankitpanda922@gmail.com <br />
      Password : 123456
      </div>
      <div className="d-flex justify-content-center align-items-center">
  <div className="card mt-lg p-3 shadow" style={{ width: '30rem' }}>
    <form onSubmit={handleLogin}>
      <h2 className='mt-2 mb-3 text-center'>Login</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          className='form-control'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          className='form-control'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='btn btn-primary w-100 py-2 mb-5'>Login</button>
      {error && <p className="text-danger text-center mt-3">{error}</p>}
    </form>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default Login;
