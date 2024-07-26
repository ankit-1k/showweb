import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Banner from './component/Banner';
import axios from 'axios';
import { IoCartOutline } from "react-icons/io5";
import Loader from './component/Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);
    const [isOpensuccess, setIsOpensuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [showCartForm, setShowCartForm] = useState(false);
    const [loading, setLoading] = useState(true); // New loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://shopweb-831c7-default-rtdb.firebaseio.com/products.json');
                const fetchedProducts = response.data;
                setProducts(Object.values(fetchedProducts));
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleRemoveFromCart = (itemToRemove) => {
        setCart(cart.filter(item => item !== itemToRemove));
    };

    const handleShowCartForm = () => {
        setShowCartForm(!showCartForm);
        setIsOpensuccess(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                cart: cart.map(item => ({
                    productName: item.productName,
                    price: item.price,
                    productUrl: item.productUrl
                }))
            };
            await axios.post('https://shopweb-831c7-default-rtdb.firebaseio.com/contacts.json', payload);
            alert('Order Success...');
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: ''
            });
            setCart([]);
            setShowCartForm(false);
        } catch (err) {
            alert('Error saving data');
            console.error(err);
        }
    };

    const calculateTotalAmount = () => {
        const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price || 0), 0);
        return totalAmount.toFixed(2);
    };

    return (
        <div>
            <Navbar />
            <Banner />
            <div className="container mt-lg">
                <h2 className='mb-5 text-center'>Browse All Products</h2>
                {loading ? (
                    <div className="loading-container">
                        <p><Loader /></p>
                    </div>
                ) : (
                    <div className="d-flex justify-content-between md-center flex-wrap">
                        {products.map((item, id) => (
                            <div className="card-pro mt-2" key={id}>
                                <div className="image_container">
                                    <img src={item.productUrl} className='pro-img' alt={item.productName} />
                                </div>
                                <div className="title">
                                    <span>{item.productName}</span>
                                </div>
                                <div className="action">
                                    <div className="price">
                                        <span>&#x20B9;{item.price}</span>
                                    </div>
                                    <button className="cart-button" onClick={() => handleAddToCart(item)}>
                                        <svg
                                            className="cart-icon"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                        <span>Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className={`cart-btn ${(cart.length===0?'':'bounce')}`} title='View Cart'>
                    <button className="" onClick={handleShowCartForm}>
                        <IoCartOutline className='text-success' size={30} />
                        <span className="badge">
                            {cart.length}
                        </span>
                    </button>
                </div>
            </div>
            {isOpensuccess && (
                <div className="modal-backdrop">
                    <dialog className="modal-custom res-margin" style={{ position: 'relative' }} open>
                        <div className='para-less-mp'>
                            <h3 className='fw-bold text-center lead mt-2 mb-3'>Cart</h3>
                            <hr />
                            <div className="cart">
                                {cart.length === 0 ? (
                                    <p>Your cart is empty</p>
                                ) : (
                                    <div>
                                        {cart.map((item, index) => (
                                            <div className='d-flex flex-wrap'>
                                                <img src={item.productUrl} className='w-25 h-25' alt="" />
                                                <span className='ms-2 mt-3' key={index}>
                                                    {item.productName} - &#x20B9;{item.price}
                                                    <button
                                                        className="btn btn-close"
                                                        onClick={() => handleRemoveFromCart(item)}
                                                    >
                                                    </button>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {cart.length > 0 && (
                                <form className={`contact-form mt-lg`} onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className='form-control'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className='form-control'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className='form-control'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            className='form-control'
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-outline-success mt-2">
                                        Buy Now - &#x20B9;{calculateTotalAmount()}
                                    </button>
                                </form>
                            )}

                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="close-btn btn-close mt-3" onClick={() => setIsOpensuccess(false)}></button>
                        </div>
                    </dialog>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Products;
