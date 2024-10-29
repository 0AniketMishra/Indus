"use client"
import React from 'react'



import Loading from './Components/Loading';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import Pricing2 from './Components/Pricing2';



function Landing() {

const [user,loading] = useAuthState(auth)

    return (
        <dfv>
            {loading ? (
                <Loading />
            ) : (
                <div style={{ backgroundColor: "#0a0a0a" }}>
                    <Header />
                    <Hero />
                    <Services />
                    
                    <Pricing/>
                    <Testimonials />
                </div>
             )} 
        </dfv>
    )  
}

export default Landing 