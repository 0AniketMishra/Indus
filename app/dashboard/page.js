"use client"
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useRouter } from 'next/navigation';
import Loading from '../Components/Loading';
import { auth } from '@/firebase';


import Horoscope from '../Components/Horoscope';
import Sidebar3 from '../Components/Sidebar3';
import { BirthChart } from '../Components/BirthChart';
import Header3 from '../Components/Header3';
import { DailyHoroscope } from '../Components/DailyHoroscope';
import { Notifications } from '../Components/Notifications';
import { CurrentTransits } from '../Components/CurrentTransits';
import { CosmicRecommendations } from '../Components/CosmicRecommendations';
import Header2 from '../Components/Header2';



function page() {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (!user && !loading)
        router.push("/login")


    return (
     <>
            <Header2 />
            <div className="min-h-screen  text-white flex flex-col lg:flex-row">

                <Sidebar3 className="hidden lg:flex" />

                <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                    <Header3 />
                    <main className="p-4 lg:max-w-[80rem] lg:mx-auto lg:px-8 lg:py-12 space-y-6  lg:space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 lg:gap-8">
                            <div className="w-full min-w-0"> {/* Added min-w-0 to prevent overflow */}
                                <BirthChart />
                            </div>
                            <div className="w-full min-w-0"> {/* Added min-w-0 to prevent overflow */}
                                <DailyHoroscope />
                            </div>
                        </div>

                        <Notifications />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                            <CurrentTransits />
                            <CosmicRecommendations />
                        </div>
                    </main>
                </div>
            </div></>

    )
}

export default page