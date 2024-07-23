import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';
import Footer from '../user/component/Footer';
import Loader from '../user/component/Loader';

const UserData = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://shopweb-831c7-default-rtdb.firebaseio.com/contacts.json`);
                const data = response.data;

                const contactsArray = data ? Object.entries(data).map(([id, contact]) => ({
                    id,
                    ...contact,
                })) : [];

                setContacts(contactsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const deleteContact = async (id) => {
        try {
            await axios.delete(`https://shopweb-831c7-default-rtdb.firebaseio.com/contacts/${id}.json`);
            setContacts(contacts.filter(contact => contact.id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    return (
        <div>
            <AdminNav />
            <div className="container mt-5">
                <h1 className="mb-4">Order List</h1>
                {contacts.length > 0 ? (
                    <table className="table table-striped table-responsive-md">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Cart Items</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.address}</td>
                                    <td>
                                        {contact.cart && contact.cart.length > 0 ? (
                                            <ul className="list-unstyled">
                                                {contact.cart.map((item, index) => (
                                                    <li key={index}>
                                                        <p><strong>Product:</strong> {item.productName}</p>
                                                        <p><strong>Price:</strong> {item.price}</p>
                                                        <p><strong>Product Img:</strong> <img src={item.productUrl} style={{height:'100px',width:'100px'}}/></p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No items in cart.</p>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => deleteContact(contact.id)}
                                        >
                                            Delivered
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='d-flex justify-content-center align-items-center h-60vh'><Loader /></p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default UserData;
