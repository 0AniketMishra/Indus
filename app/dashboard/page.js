"use client"
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation';
import Loading from '../../Components/Loading';
import Header from '../../Components/Header';


function page() {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (!user && !loading)
        router.push("/login")


    return (
        <div>
            {/* {loading ? (
                <Loading />
            ) : ( */}
                <div>
                    <Header />
                </div>
            {/* )} */}
        </div>

    )
}

export default page