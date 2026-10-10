import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about Kevin Chau, his background, work style, and interests outside of shipping software.',
};

export default function Page() {
    return (
        <main className="container mx-auto flex flex-col gap-16 px-4 pb-16 pt-12 md:gap-20 md:pt-16">
            <section className="grid items-start gap-12 lg:grid-cols-[1.35fr_0.8fr] lg:gap-16">
                <div className="min-w-0">
                    <h1 className="mb-8 text-4xl font-black tracking-tight text-foreground md:text-6xl"><span className="text-primary">$</span> whoami</h1>
                    <p className="mb-6 text-lg leading-8 text-foreground">
                     I fell in love with tech at an early age when I first learned to jailbreak my iPod touch. Fasincated with the idea of bending software to my will, I started learning how to code in high school and eventually pursued a Computer Science degree at <span className="font-bold text-primary">Western University</span>.
                    </p>
                    <p className="text-base leading-8 text-muted-foreground">
                        Most of my experience has been inside of small, scrappy teams, where we build fast and fix even faster. That sort of environment helped shape my work style and approach to software development.
                    </p>
                    <p className="mt-6 text-base leading-8 text-muted-foreground">
                        I love connecting with founders, builders, and curious minds. If you've read this far, let's connect! You can find me on my socials below.
                    </p>
                </div>

                <div className="flex flex-col gap-10 lg:pt-3">
                    <div className="border-l-4 border-accent pl-6">
                        <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">Kaizen</h2>
                        <p className="mt-2 text-sm italic text-muted-foreground">[ki-zan]</p>
                        <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                            A Japanese term meaning change for the better or continuous improvement. It is a useful baseline for how I approach work.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-foreground">Current setup</h2>
                        <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-4 text-sm leading-6">
                            <dt className="text-muted-foreground">Laptop</dt>
                            <dd className="text-foreground">2019 MacBook Pro <span className="block text-xs text-muted-foreground">(on it's last leg)</span></dd>
                            <dt className="text-muted-foreground">Keyboard</dt>
                            <dd className="text-foreground">GMMK TKL RGB</dd>
                            <dt className="text-muted-foreground">Switches</dt>
                            <dd className="text-foreground">Akko Creamy Blues</dd>
                            <dt className="text-muted-foreground">Mouse</dt>
                            <dd className="text-foreground">Razer Viper Mini</dd>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="grid items-start gap-10 border-t border-border/20 pt-10 lg:grid-cols-[1.35fr_0.8fr] lg:gap-16" aria-label="Photos and music">
                <figure className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-sm">

                        <Image
                            src="/assets/lantern.webp"
                            alt="Water lantern at night"
                            fill
                            sizes="(min-width: 1280px) 640px, (min-width: 1024px) 55vw, 100vw"
                            className="object-cover"
                            priority
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                            <p className="max-w-sm text-base font-bold leading-6">Water Lantern Festival at Downsview Park.</p>
                            <p className="mt-2 text-sm leading-6 text-white/90">Hey look! That&apos;s me and my friends!</p>
                        </figcaption>
                </figure>

                <div className="min-w-0">
                    <h2 className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-foreground">On repeat</h2>
                    <iframe
                        title="Kevin Chau Spotify playlist"
                        data-testid="embed-iframe"
                        src="https://open.spotify.com/embed/playlist/6ItNIZJk7WHD81dCV4HAiZ?utm_source=generator&theme=0"
                        className="block h-[360px] w-full rounded-xl border-0"
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            </section>
        </main>
    );
}
