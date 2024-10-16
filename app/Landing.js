"use client"
import React from 'react'



import Loading from './Components/Loading';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';



function Landing() {



    return (
        <div>
            {/* {loading ? (
                <Loading />
            ) : ( */}
                <div style={{ backgroundColor: "#0a0a0a" }}>
                    <Header />
                    <Hero    />
                    <Services />
                    <Pricing />
                    <Testimonials />
                </div>
            {/* )} */}
        </div>
    )
}

export default Landing