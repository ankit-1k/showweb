import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className='mt-lg'>
                <main className="footer-container">
                    <footer className='bg-light'>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>Office Address</h4>
                                    <span>
                                        <CiLocationOn />
                                        Jaipatna, Kalahandi, Odisha
                                    </span>
                                </div>
                                <div className="col-md-4">
                                    <ul>
                                        <li onClick={()=>navigate('/about')}>About Us</li>
                                        <li onClick={()=>navigate('/products')}>Buy Products</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul>
                                        <li>
                                            <ul className="example-2 mt-2">
                                                <li className="icon-content">
                                                    <a href="https://youtube.com/" aria-label="Youtube" data-social="youtube">
                                                        <div className="filled"></div>
                                                        <FaYoutube className="icon" />
                                                    </a>
                                                    <div className="tooltip">YouTube</div>
                                                </li>
                                                <li className="icon-content">
                                                    <a href="https://linkedin.com/" aria-label="LinkedIn" data-social="linkedin">
                                                        <div className="filled"></div>
                                                        <FaLinkedin className="icon" />
                                                    </a>
                                                    <div className="tooltip">LinkedIn</div>
                                                </li>
                                                <li className="icon-content">
                                                    <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
                                                        <div className="filled"></div>
                                                        <FaFacebook className="icon" />
                                                    </a>
                                                    <div className="tooltip">Facebook</div>
                                                </li>
                                                <li className="icon-content">
                                                    <a href="https://www.instagram.com/" aria-label="Instagram" data-social="instagram">
                                                        <div className="filled"></div>
                                                        <FaInstagram className="icon" />
                                                    </a>
                                                    <div className="tooltip">Instagram</div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copy-right text-center">
                            © ShopWeb, All Rights Reserved Design and developed by <span className='text-danger'>ankit kumar</span>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default Footer
