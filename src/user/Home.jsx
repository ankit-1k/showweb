import React from 'react'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const productHome = [
    {
      id: 1,
      img: 'https://tse3.mm.bing.net/th?id=OIP.hosIOB-LLvbm_UtuwFiOKgHaHa&pid=Api&P=0&h=180',
      title: 'Product 1',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsa est '
    },
    {
      id: 2,
      img: 'https://tse1.mm.bing.net/th?id=OIP.p24oNomnvXnCyiT7h6y8CQHaI4&pid=Api&P=0&h=180',
      title: 'Product 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tempore!'
    },
    {
      id: 3,
      img: 'https://tse1.mm.bing.net/th?id=OIP.p24oNomnvXnCyiT7h6y8CQHaI4&pid=Api&P=0&h=180',
      title: 'Product 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, minus.'
    },
    {
      id: 4,
      img: 'https://tse1.mm.bing.net/th?id=OIP.p24oNomnvXnCyiT7h6y8CQHaI4&pid=Api&P=0&h=180',
      title: 'Product 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam.'
    },
    {
      id: 5,
      img: 'https://tse1.mm.bing.net/th?id=OIP.p24oNomnvXnCyiT7h6y8CQHaI4&pid=Api&P=0&h=180',
      title: 'Product 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, omnis.'
    }
  ];
  const navigate=useNavigate()
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <h3 className='heading mt-5'>Why Choose Us?</h3>
            <p>At ShopWeb, we believe in providing high-quality t-shirts that blend comfort with style. Our collection features exclusive designs crafted to make you stand out. Whether you're looking for a casual everyday tee or something special for an event, we've got you covered.</p>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-wrap justify-content-around mt-5">
                  <div className="card hover-card p-3" style={{ width: '317px' }}>
                    <div className="card-title">
                      <span className="fw-bold">Premium Quality</span>
                    </div>
                    <div className="card-text">
                      <p>Soft, durable, and comfortable.</p>
                    </div>
                  </div>
                  <div className="card hover-card p-3" style={{ width: '317px' }}>
                    <div className="card-title">
                      <span className="fw-bold">Unique Designs</span>
                    </div>
                    <div className="card-text">
                      <p>Handpicked and exclusive to our store.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="d-flex flex-wrap justify-content-around mt-1">
                  <div className="card hover-card p-3" style={{ width: '317px' }}>
                    <div className="card-title">
                      <span className="fw-bold">Affordable Prices</span>
                    </div>
                    <div className="card-text">
                      <p>Fashion that fits your budget.</p>
                    </div>
                  </div>
                  <div className="card hover-card p-3" style={{ width: '317px' }}>
                    <div className="card-title">
                      <span className="fw-bold">Fast Shipping</span>
                    </div>
                    <div className="card-text">
                      <p>Fast Delivery to Your Doorstep</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className='text-center mt-lg mb-5'>Brows Products</h3>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-wrap justify-content-between res-center">
              {
                productHome.map(item => (
                  <div class="card-custom mt-3 pointer" onClick={()=>navigate('/products')}>
                    <div class="card-img">
                      <img src={item.img} className='product-img' alt="" />
                    </div>
                    <div class="card-title">{item.title}</div>
                    <div class="card-subtitle">{item.text}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className='button mt-3' onClick={()=>navigate('/products')}>Explore All!</button>
        </div>
      </div>
      <div id="counter" className="sec-padding mt-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="count"> <span className="fa fa-smile-o"></span>
                <p className="number">600+</p>
                <h4>Total Design</h4> </div>
            </div>
            <div className="col-md-3 ">
              <div className="count"> <span className="fa fa-smile-o"></span>
                <p className="number">1000+</p>
                <h4>Happy Clients</h4> </div>
            </div>
            <div className="col-md-3 ">
              <div className="count"> <span className="fa fa-smile-o"></span>
                <p className="number">800+</p>
                <h4>Total Collection</h4> </div>
            </div>
            <div className="col-md-3 ">
              <div className="count"> <span className="fa fa-smile-o"></span>
                <p className="number">97%</p>
                <h4>Success Rate</h4> </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
