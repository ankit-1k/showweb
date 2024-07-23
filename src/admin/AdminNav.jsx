import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark theme-bg text-white">
                <div className="container">
                    <Link className="navbar-brand" to="/">ShopWeb-Admin</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userdata">Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" tabIndex="-1" aria-disabled="true">logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav
