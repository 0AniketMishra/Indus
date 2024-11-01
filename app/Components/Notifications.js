import React from 'react';

export function Notifications() {
    return (
        <section className="bg-zinc-900/50 rounded-2xl p-6 backdrop-blur-sm border border-orange-900/20">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    {/* <Bell className="text-orange-500" /> */}
                    Cosmic Notifications
                </h2>
                <span className="text-sm text-orange-200/70">3 new updates</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
                <div className="min-w-[280px] bg-black/20 p-4 rounded-lg border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                        {/* <Star className="w-5 h-5 text-amber-400" /> */}
                        <span className="font-medium">Zodiac Alignment</span>
                    </div>
                    <p className="text-sm text-orange-200/70">Your ruling planet enters a new house tonight at 9:42 PM</p>
                </div>
                <div className="min-w-[280px] bg-black/20 p-4 rounded-lg border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                        {/* <Heart className="w-5 h-5 text-orange-400" /> */}
                        <span className="font-medium">Love Forecast</span>
                    </div>
                    <p className="text-sm text-orange-200/70">Venus brings romantic opportunities this weekend</p>
                </div>
                <div className="min-w-[280px] bg-black/20 p-4 rounded-lg border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                        {/* <Star className="w-5 h-5 text-amber-400" /> */}
                        <span className="font-medium">Crystal Charging</span>
                    </div>
                    <p className="text-sm text-orange-200/70">Full moon approaches - prepare your crystals for charging</p>
                </div>
            </div>
        </section>
    );
}