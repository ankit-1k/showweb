import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './user/Home';
import './App.css'
import './assets/style.css'
import Products from './user/Products';
import About from './user/About';
import Admin from './admin/Admin';
import Login from './user/component/Login';
import ViewProducts from './admin/ViewProducts';
import UserData from './admin/UsersData';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view" element={<ViewProducts />} />
          <Route path="/userdata" element={<UserData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
