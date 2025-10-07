import React from 'react';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="container mx-auto px-4 py-10 flex flex-col gap-8">
            {/* Top Section: About Me Text and Definitions Side by Side */}
            <section className="flex flex-col md:flex-row gap-8">
                {/* Left: About Me Text */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">$ whoami</h2>
                    <p className="mb-4 text-sm">
                        I am a software engineer based in Newmarket, Ontario, Canada. Focusing on bridging the technical gap between ideas and implementation is what drives me to code. Currently, I am a fifth-year
                        student at{' '}
                        <a href="https://www.uwo.ca/index.html" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">
                            Western University
                        </a>
                        , finishing up my degree in the Specialization in Computer Science.
                    </p>
                    <p className="mb-4 text-sm">
                        Away from the screen, I enjoy playing basketball, watching anime, reading comic books, and fitness.
                        I like to live by a japanese word called "Kaizen".
                    </p>
                </div>

                {/* Right: Definitions */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* Kaizen Card */}
                    <div className="flex text-sm bg-white dark:bg-card border border-black rounded-xl p-4 border-l-8 border-l-primary">
                        <div className="ml-4">
                            <p className="font-semibold">Kaizen</p>
                            <p className="italic text-sm text-gray-500">[ki-zan]</p>
                            <p className="mt-2 text-sm">
                                A Japanese term meaning "change for the better" or "continuous improvement,"
                                which serves as the basis for Japanese business philosophy.
                            </p>
                        </div>
                    </div>
                    
                    {/* Tech setup */}
                    <div className="flex text-sm bg-white dark:bg-card border border-black rounded-xl p-4 border-l-8 border-l-primary">
                        <div className="ml-4">
                            <p className="font-semibold mb-2">My Current Tech Set Up:</p>
                            <ul className="list-disc list-inside text-sm">
                                <li><span className="font-bold">Laptop:</span> 2019 Macbook Pro</li>
                                <li><span className="font-bold">Keyboard:</span> GMMK TKL RGB</li>
                                <li><span className="font-bold">Switches:</span> Akko Creamy Blues</li>
                                <li><span className="font-bold">Mouse:</span> Razer Viper Mini</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section: Image and Spotify Side by Side */}
            <section className="flex flex-col md:flex-row gap-6" style={{ '--section-height': '352px' } as React.CSSProperties}>
                {/* Lantern Image */}
                <div className="flex-1">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ height: 'var(--section-height)' }}>
                        <Image
                            src="/lantern.webp"
                            alt="Water lantern at night"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>
                
                {/* Spotify */}
                <div className="flex-1">
                    <iframe 
                        data-testid="embed-iframe" 
                        style={{ borderRadius: '12px', height: 'var(--section-height)' }} 
                        src="https://open.spotify.com/embed/playlist/6ItNIZJk7WHD81dCV4HAiZ?utm_source=generator" 
                        width="100%" 
                        frameBorder="0" 
                        allowFullScreen={false} 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                    />
                </div>
            </section>
        </main>
    );
}
