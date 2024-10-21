import React from 'react'
import Hero from '../hero/Hero';
import AboutUs from '../about/AboutUs';
import Category from '../categorybooks/Category';
import Testimonial from '../testimonial/Testimonial';

const Home = () => {
    return (
        <main className='mx-auto'>
            <Hero/>
            <AboutUs/>
            <Category/>
            <Testimonial/>
        </main>
    )
}

export default Home;