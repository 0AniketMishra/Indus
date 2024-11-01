import React from 'react';


export function DailyHoroscope() {
    const horoscopePoints = [
        "Venus forms a harmonious aspect with Jupiter today",
        "Creative energy surges through your spiritual sector",
        "Unexpected opportunities arise in personal growth",
        "Intuition is heightened during evening hours"
    ];

    return (
        <section className="bg-zinc-900/50 h-full rounded-2xl p-8 backdrop-blur-sm border border-orange-900/20">
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                {/* <Calendar className="text-orange-500" /> */}
                Daily Horoscope
            </h2>
            <div className="h-[calc(100%-4rem)] flex flex-col justify-between">
                <ul className="space-y-3">
                    {horoscopePoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-orange-400 mt-2"></span>
                            <span className="text-lg text-orange-50">{point}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                        <span className="text-orange-200/70">Lucky Number: 7</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span className="text-orange-200/70">Power Color: Amber</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="text-orange-200/70">Favorable Time: Evening</span>
                    </div>
                </div>
            </div>
        </section>
    );
}