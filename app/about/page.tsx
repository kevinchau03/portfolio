import React from 'react';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
            {/* Left: Profile & About */}
            <section className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                        <Image
                            src="/IMG_4551.png"
                            alt="My profile photo"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">Kevin Chau</h1>
                        <p className="text-md text-gray-600">Software Engineer · Newmarket, Ontario</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 font-mono">$ whoami</h2>
                    <p className="mb-4 text-sm md:text-base">
                        I am a software engineer based in Newmarket, Ontario, Canada. I specialize in backend development and focus on bridging the technical gap between ideas and implementation. Currently, I am a fifth-year
                        student at{' '}
                        <a href="https://www.uwo.ca/index.html" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">
                            Western University
                        </a>
                        , finishing up my degree in the Specialization in Computer Science.
                    </p>
                    <p className="mb-4 text-sm md:text-base">
                        Away from the screen, I enjoy playing basketball, watching anime, reading comic books, and fitness.
                        I like to live by a japanese word called "Kaizen".
                    </p>
                </div>
                {/* Tech setup */}
                <div className="flex mb-4 text-sm md:text-base dark:bg-card border border-black rounded-xl p-4">
                    <div className="bg-primary w-[5px] rounded-full"></div>
                    <div className="ml-4">
                        <p className="font-semibold mb-2">My Current Tech Set Up:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">Laptop:</span> 2019 Macbook Pro</li>
                            <li><span className="font-bold">Keyboard:</span> GMMK TKL RGB</li>
                            <li><span className="font-bold">Switches:</span> Akko Creamy Blues</li>
                            <li><span className="font-bold">Mouse:</span> Razer Viper Mini</li>
                        </ul>
                    </div>
                </div>
                {/* Kaizen Card */}
                <div className="flex mb-4 text-sm md:text-base dark:bg-card border border-black rounded-xl p-4">
                    <div className="bg-primary w-[5px] rounded-full"></div>
                    <div className="ml-4">
                        <p className="font-bold text-lg">Kaizen</p>
                        <p className="italic text-sm text-gray-500">[ki-zan]</p>
                        <p className="mt-2">
                            A Japanese term meaning "change for the better" or "continuous improvement,"
                            which serves as the basis for Japanese business philosophy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Right: Image, Kaizen, Spotify */}
            <section className="flex-1 flex flex-col gap-6">
                <div className="w-full">
                    <pre className="border border-black dark:bg-card dark:text-gray-100 p-6 rounded-lg overflow-x-auto font-mono text-sm">
                        {`class Programmer:
    pronouns = 'He/Him'
    interests = ['Sports', 'Comics', 'Anime', 'Fitness']
    desc = 'A software engineer, specializing in building digital solutions.'
    def goalsFor2025(self):
        LandAJob(self, internship, job)
        CompleteHalfMarathon(persistence)
        Travel(lots_of_money)
        MakeADifference(creativity)`}
                    </pre>
                </div>
                {/* Lantern Image */}
                <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-lg mb-2">
                    <Image
                        src="/lantern.webp"
                        alt="Japanese lantern at night"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                    />
                </div>
                {/* Spotify */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/6ItNIZJk7WHD81dCV4HAiZ?utm_source=generator&theme=0" width="100%" height="152" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </section>
        </main>
    );
}
