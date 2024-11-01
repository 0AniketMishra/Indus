import React from 'react';


export function CurrentTransits() {
    return (
        <section className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm border border-orange-900/20">
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                {/* <Clock className="text-orange-500" /> */}
                Current Transits
            </h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-black/20 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <div>
                        <p className="font-medium">Mercury Retrograde in Pisces</p>
                        <p className="text-sm text-orange-200/70">Until March 25, 2024</p>
                    </div>
                </li>
                <li className="flex items-center gap-4 bg-black/20 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div>
                        <p className="font-medium">Venus conjunct Mars</p>
                        <p className="text-sm text-orange-200/70">Peak influence today</p>
                    </div>
                </li>
                <li className="flex items-center gap-4 bg-black/20 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <div>
                        <p className="font-medium">Full Moon approaching</p>
                        <p className="text-sm text-orange-200/70">In 2 days</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}