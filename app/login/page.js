"use client"
import React from 'react'



import Header from '../Components/Header';



function page() {
    // const signIn = async () => {

    //     try {

    //         getAuth();
    //         signInWithPopup(auth, provider)

    //     } catch (error) {
    //         console.error('Error signing in', error);
    //     }
    // };
    return (

        <div>
            <Header  />
            <div class="flex items-end justify-center h-[50vh]">
                <div className=''>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Login/Signup To Your Account🔥</h1>


                </div>
            </div>

            <div class="flex items-center justify-center h-[10vh]">
                {/* <button onClick={signIn} class=" px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span>Login with Google</span>
                </button> */}
            </div>

        </div>
    )
}

export default page