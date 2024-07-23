import React from 'react';
import { ReactTyped } from 'react-typed';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between md-center align-items-center h-60vh">
                            <div>
                                <h1 className='text-theme fw-bold'>Discover Your Style</h1>
                                <ReactTyped
                                    strings={[
                                        'Trendy T-Shirts for Every Occasion',
                                        'Shop Now & Upgrade Your Wardrobe',
                                        'Exclusive Designs You Won\'t Find Anywhere Else'
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                    className='lead'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex justify-content-center align-items-center h-60vh'>
                        <img src="https://media.giphy.com/media/EW7jNstPcDNo4/giphy.gif" className='banner-img mt-5  md-d-none' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
