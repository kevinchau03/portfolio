import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about Kevin Chau, his background, work style, and interests outside of shipping software.',
};

export default function Page() {
    return (
        <main className="container mx-auto flex flex-col gap-8 px-4 py-10 mt-4">
            <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="section-shell p-6 md:p-8">
                    <span className="section-kicker mb-4 w-fit">$ whoami</span>
                    <p className="mb-4 text-base leading-7 text-muted-foreground">
                     I fell in love with tech at an early age when I first learned to jailbreak my iPod touch. Fasincated with the idea of bending software to my will, I started learning how to code in high school and eventually pursued a Computer Science degree at <span className="font-bold text-primary">Western University</span>.
                    </p>
                    <p className="text-base leading-7 text-muted-foreground">
                        Most of my experience has been inside of small, scrappy teams, where we build fast and fix even faster. That sort of environment helped shape my work style and approach to software development.
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
                            <li>Laptop: 2019 MacBook Pro (on it's last leg)</li>
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
