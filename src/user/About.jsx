import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Footer from './component/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="container">
                <h1 className='text-center mt-lg mb-3'>About Us</h1>
                <section className="story">
                    <h4>Our Story</h4>
                    <p>
                        Welcome to <span className='text-success'>ShopWeb</span> , your number one source for trendy and comfortable t-shirts. We're dedicated to providing you with the very best in casual wear, with a focus on quality, style, and customer service.
                    </p>
                    <p>
                        Founded in 2024, <span className='text-success'>ShopWeb</span>  has come a long way from its beginnings. When we first started out, our passion for creating unique and stylish t-shirts drove us to start our own business. We now serve customers all over the world and are thrilled to be a part of the fashion industry.
                    </p>
                </section>
                <section className="mission">
                    <h4>Our Mission</h4>
                    <p>
                        At <span className='text-success'>ShopWeb</span> , we believe that what you wear can make a statement about who you are. Our mission is to help you express your individuality through our carefully crafted designs. Each t-shirt we create is a blend of comfort, quality, and style, ensuring you look and feel great every day.
                    </p>
                </section>
                <section className="community">
                    <h4>Join Our Community</h4>
                    <p>
                        We’re more than just a t-shirt company; we’re a community of like-minded individuals who value style, comfort, and self-expression. Follow us on social media to stay updated on our latest releases, special offers, and more.
                    </p>
                    <p>
                        Thank you for choosing <span className='text-success'>ShopWeb</span> . We hope you enjoy our products as much as we enjoy creating them for you.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default About
