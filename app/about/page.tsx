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
                        I&apos;m a software engineer based in Newmarket, Ontario, Canada. I fell in love with coding when I first learned how to download songs off of Youtube-to-MP3, a godsend for my younger-self. This sparked my passion for building tools that make life easier for others. 
                        I'm currently pursuing a Bachelor's degree in Computer Science at{' '}
                        <a href="https://www.uwo.ca/index.html" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">
                            Western University
                        </a>. I've gained hands-on experience working with emerging startups, where I thrive wearing many hats. I like to think of myself as a solutions engineer, bridging the gap between big ideas and real-world implementation.
                    </p>
                    <p className="mb-4 text-sm">
                        I love connecting with founders, builders, and curious minds. If you&apos;ve read this far, let&apos;s connect! You can find me on my socials below.
                    </p>
                </div>

                {/* Right: Definitions */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* Kaizen Card */}
                    <div className="flex text-sm bg-white dark:bg-card border border-black rounded-xl p-4 border-l-8 border-l-primary">
                        <div className="ml-4">
                            <p className="font-bold text-primary">Kaizen</p>
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
                            <p className="font-bold text-primary mb-2">My Current Tech Set Up:</p>
                            <ul className="list-disc list-inside text-sm">
                                <li>Laptop: 2019 Macbook Pro</li>
                                <li>Keyboard: GMMK TKL RGB</li>
                                <li>Switches: Akko Creamy Blues</li>
                                <li>Mouse: Razer Viper Mini</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section: Image and Spotify Side by Side */}
            <section className="flex flex-col md:flex-row gap-6" style={{ '--section-height': '352px' } as React.CSSProperties}>
                {/* Image */}
                <div className="flex-1">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg group" style={{ height: 'var(--section-height)' }}>
                        <Image
                            src="/assets/lantern.webp"
                            alt="Water lantern at night"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        
                        {/* Annotation Layer */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                                Hey that&apos;s me and my friends! 😄
                            </div>
                        </div>
                    </div>
                 </div>
                {/* Spotify */}
                <div className="flex-1">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ height: 'var(--section-height)' } as React.CSSProperties}>
                        <iframe
                            data-testid="embed-iframe"
                            src="https://open.spotify.com/embed/playlist/6ItNIZJk7WHD81dCV4HAiZ?utm_source=generator&theme=0"
                            className="w-full h-full block"
                            style={{ border: 0, borderRadius: 'inherit' }}
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
