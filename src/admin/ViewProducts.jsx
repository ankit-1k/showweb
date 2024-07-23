import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Loader from './../user/component/Loader'
const ViewProducts = () => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editProductId, setEditProductId] = useState(null);
    const [formData, setFormData] = useState({ price: '', productName: '', productUrl: '' });
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate()
    useEffect(() => {
        // Fetch product data from Firebase Realtime Database using Axios
        axios.get('https://shopweb-831c7-default-rtdb.firebaseio.com/products.json')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleEditClick = (id, product) => {
        setEditProductId(id);
        setFormData({
            price: product.price,
            productName: product.productName,
            productUrl: product.productUrl
        });
        setIsOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://shopweb-831c7-default-rtdb.firebaseio.com/products/${editProductId}.json`, formData)
            .then(() => {
                setProducts(prevProducts => ({
                    ...prevProducts,
                    [editProductId]: formData
                }));
                setIsOpen(false);
                setEditProductId(null);
                setFormData({ price: '', productName: '', productUrl: '' });
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`https://shopweb-831c7-default-rtdb.firebaseio.com/products/${id}.json`)
            .then(() => {
                const updatedProducts = { ...products };
                delete updatedProducts[id];
                setProducts(updatedProducts);
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };

    if (loading) return <div className='d-flex justify-content-center align-items-center h-60vh'><Loader/></div>;
    if (error) return <div>Error loading products.</div>;

    return (
        <div>
            <AdminNav />
            <div className="container mt-4">
            <span className='lead fw-bold' onClick={()=>navigate('/admin')} style={{cursor:'pointer'}}> <IoMdArrowRoundBack/> back</span>
                <h2 className='mt-5'>CRUD Product</h2>
                <div className="row">
                    {Object.keys(products).map(key => {
                        const product = products[key];
                        return (
                            <div className="col-md-4 mb-3" key={key}>
                                <div className="card p-2">
                                    <img src={product.productUrl} className="card-img-top w-25" style={{height:'100px'}} alt={product.productName} />
                                    <div className="card-body">
                                        <h5 className="card-title text-start">{product.productName}</h5>
                                        <p className="card-text">Price: ${product.price}</p>
                                        <button className="btn btn-secondary ms-2" onClick={() => handleEditClick(key, product)}>Edit</button>
                                        <button className="btn btn-danger ms-2" onClick={() => handleDelete(key)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {isOpen && (
                <div className="modal-backdrop">
                    <dialog className="modal-custom" open>
                        <div className="modal-content border-0">
                            <h3>Edit Product</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productName"
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productUrl" className="form-label">Product URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productUrl"
                                        name="productUrl"
                                        value={formData.productUrl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Update Product</button>
                                <button
                                    type="button"
                                    className="btn btn-secondary ms-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </dialog>
                </div>
            )}
        </div>
    );
};

export default ViewProducts;
