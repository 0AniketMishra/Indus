"use client"
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useRouter } from 'next/navigation';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { auth } from '@/firebase';



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
                <div>
                    <Header />
                </div>
             )} 
        </div>

    )
}

export default page