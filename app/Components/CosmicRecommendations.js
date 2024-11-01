import React from 'react';


export function CosmicRecommendations() {
    return (
        <section className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm border border-orange-900/20">
            <h2 className="text-2xl font-semibold mb-6">Cosmic Recommendations</h2>
            <div className="space-y-4">
                <div className="group flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                    <div>
                        <p className="font-medium">Meditate during moonrise</p>
                        <p className="text-sm text-orange-200/70">8:42 PM tonight</p>
                    </div>
                    {/* <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
                <div className="group flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                    <div>
                        <p className="font-medium">Journal your dreams</p>
                        <p className="text-sm text-orange-200/70">Best before sunrise</p>
                    </div>
                    {/* <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
                <div className="group flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                    <div>
                        <p className="font-medium">Crystal cleansing ritual</p>
                        <p className="text-sm text-orange-200/70">During Venus hour</p>
                    </div>
                    {/* <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-400 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>
        </section>
    );
}