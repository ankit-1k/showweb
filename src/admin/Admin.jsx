import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './../firebase/firebase';
import AdminNav from './AdminNav';
import Footer from '../user/component/Footer';
import { useNavigate } from 'react-router-dom';
import Loader from '../user/component/Loader';

const Admin = () => {
    const [productName, setProductName] = useState('');
    const [productUrl, setProductUrl] = useState('');
    const [price, setPrice] = useState('');
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const dbRef = ref(database, 'products/' + Date.now());
        set(dbRef, {
            productName: productName,
            productUrl: productUrl,
            price: price,
        })
            .then(() => {
                setProductName('');
                setProductUrl('');
                setPrice('');
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error submitting product: ', error);
            });
    };

    return (
        <div>
            <AdminNav />
            <h2 className='mt-lg text-center'>Add Product</h2>
            <div className="d-flex justify-content-center mt-3">
                 <div className="card p-3 w-50">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name:</label>
                        <input
                            type="text"
                            id="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                            className="form-control"
                            placeholder='Enter Product Name'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productUrl">Product URL:</label>
                        <input
                            type="text"
                            id="productUrl"
                            value={productUrl}
                            onChange={(e) => setProductUrl(e.target.value)}
                            required
                            className="form-control"
                            placeholder='Enter Image URL'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className="form-control"
                            placeholder='Enter Price'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    <p className='text-center text-success' style={{cursor:'pointer'}} onClick={()=>navigate('/view')}>View Products?</p>
                </form>
            </div>
            </div>    
            <div className="login-loader">
            {
                loading && (
                    <>
                        <Loader />
                    </>
                )
            } 
            </div> 
            <Footer />     
        </div>
    );
};

export default Admin;
