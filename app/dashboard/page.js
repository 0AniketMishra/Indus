"use client"
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useRouter } from 'next/navigation';
import Header2 from '../Components/Header2';
import Loading from '../Components/Loading';
import { auth } from '@/firebase';

import Sidebar2 from '../Components/Sidebar2';
import Horoscope from '../Components/Horoscope';



function page() {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (!user && !loading)
        router.push("/login")


    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                    <div className='flex mx-auto max-w-custom h-screen'>
                    
                   <div>
                    <Header2/>
                           <div className='flex'>
                                <Sidebar2 />
                                <Horoscope />
                           </div>
                   </div>
                </div>
             )} 
        </div>

    )
}

export default page