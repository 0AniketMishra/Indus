

import Link from 'next/link'
import React from 'react'


function Sidebar2() {
    async function logout() {

    }

    return (
        <div><div className=" pt-24 h-[92vh] animate-slideIn w-[18rem] flex-col bg-clip-border  text-gray-700  w-full  pr-0 pl-1 pt-2 pb-2 ">
            <div className="mb-2 p-2 w-full" >
                {/* <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">Shop By Category</h5> */}
            </div>
            <nav className="flex flex-col  gap-4   p-3 font-sans text-base font-normal text-white">
                <Link href="/" tabindex="0" className="flex items-center w-[90%] py-3 px-6 rounded-full text-start transition-all hover:bg-gray-900 outline-none ">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>



                    </div>
                    <h1 className='text-lg'>Horoscope</h1>
                </Link>
                <Link href="/sell" tabindex="0" className="flex items-center w-[90%] py-3 px-6 rounded-full text-start leading-tight transition-all hover:bg-gray-900 outline-none ">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                    <h1 className='text-lg'>Pricing</h1>
                </Link>

                <div role="button" tabindex="0" className="flex items-center w-[90%] py-3  px-6 rounded-full text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>

                    </div>Contact<div className="grid place-items-center ml-4 justify-self-end">
                        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500 text-white py-1 px-2 text-xs rounded-full" >
                            <span className="">14</span>
                        </div>
                    </div>
                </div>

                <div role="button" tabindex="0" className="flex items-center w-[90%] py-3  px-6 rounded-full text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>

                    </div>Login/Singup
                </div>
                <div onClick={() => logout()} role="button" tabindex="0" className="flex items-center w-[90%] py-3  px-6 rounded-full text-start leading-tight transition-all hover:bg-gray-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>Log Out
                </div>

                
            </nav>
       
        </div>
        
            <div className=' b-0 pl-8'>
                <Link href="/" tabindex="0" className="flex items-center w-[90%]  py-3 px-6 rounded-full text-start transition-all bg-gray-900 outline-none ">
                    <div className="grid place-items-center mr-4">
                        <img className=" w-8 h-8 rounded-full" src="https://raw.githubusercontent.com/0AniketMishra/Twitter/refs/heads/main/3776.jpg_wh860.jpg" alt="" />


                    </div>
                    <h1 className='text-lg'>Aniket Mishra</h1>
                </Link>
            </div>
            
            
            </div>
    )
}

export default Sidebar2