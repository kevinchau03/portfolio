import React from 'react';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="container mx-auto flex flex-col gap-8 px-4 py-10">
            <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="section-shell p-6 md:p-8">
                    <span className="section-kicker mb-4 w-fit">$ whoami</span>
                    <h1 className="mb-5 text-xl font-black uppercase md:text-2xl">
                        Software engineer with startup instincts.
                    </h1>
                    <p className="mb-4 text-base leading-7 text-muted-foreground">
                        I&apos;m based in <span className="font-bold text-primary">Newmarket, Ontario, Canada</span>. I fell in love with computers when I first learned to download songs off of Youtube-to-mp3.
                    </p>
                    <p className="text-base leading-7 text-muted-foreground">
                        Most of my experience has been inside of small, scrappy teams, where the job is rarely just one job. That sort of environment has helped me develop a wide range of skills.
                    </p>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        I love connecting with founders, builders, and curious minds. If you've read this far, let's connect! You can find me on my socials below.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="brutal-card bg-accent p-5">
                        <p className="text-sm font-black uppercase tracking-[0.14em] text-foreground">Kaizen</p>
                        <p className="mt-1 text-sm italic text-foreground/70">[ki-zan]</p>
                        <p className="mt-4 text-sm leading-7 text-foreground">
                            A Japanese term meaning change for the better or continuous improvement. It is a useful baseline for how I approach work.
                        </p>
                    </div>

                    <div className="brutal-card bg-secondary p-5">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-foreground">Current setup</p>
                        <ul className="space-y-2 text-sm leading-6 text-foreground ml-4 list-disc">
                            <li>Laptop: 2019 MacBook Pro</li>
                            <li>Keyboard: GMMK TKL RGB</li>
                            <li>Switches: Akko Creamy Blues</li>
                            <li>Mouse: Razer Viper Mini</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section
                className="grid gap-6 md:grid-cols-2"
                style={{ '--section-height': '360px' } as React.CSSProperties}
            >
                <div className="brutal-card relative overflow-hidden" style={{ height: 'var(--section-height)' }}>
                    <Image
                        src="/assets/lantern.webp"
                        alt="Water lantern at night"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute left-4 top-4 section-kicker bg-accent">
                        Water Lantern Festival at Downsview Park.
                    </div>
                    <div className="absolute bottom-4 left-4 max-w-xs rounded-[20px] border-2 border-border bg-card p-4 text-sm leading-6 text-muted-foreground shadow-brutal-soft">
                        Hey look! That&apos;s me and my friends!
                    </div>
                </div>

                            <iframe
                                data-testid="embed-iframe"
                                src="https://open.spotify.com/embed/playlist/6ItNIZJk7WHD81dCV4HAiZ?utm_source=generator&theme=0"
                                className="inset-0 block h-full w-full"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen={false}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
            </section>
        </main>
    );
}
