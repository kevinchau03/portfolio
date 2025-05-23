import React from 'react';
import Image from 'next/image';
import GithubIcon from '@/public/icons8-github.svg';
import LinkedinIcon from '@/public/icons8-linkedin.svg';
import { Mail } from 'lucide-react';
export default function Page() {
    return (
        <main className="container mx-auto flex flex-col justify-center gap-4 mt-10">
            <div className="text-left mb-4">
                <div className="flex flex-col gap-2 mb-4">
                    <div>
                        <h1 className="text-5xl font-extrabold">Kevin Chau</h1>
                        <h2 className="text-2xl">Software Engineer</h2>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.github.com/kevinchau03" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-2 border border-black dark:bg-card rounded-xl p-2">
                                <GithubIcon className="w-8 h-8 fill-current" /> GitHub
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-chau03" target="_blank">
                            <div className="flex items-center gap-2 border border-black dark:bg-card rounded-xl p-2">
                                <LinkedinIcon className="w-8 h-8 fill-current" /> LinkedIn
                            </div>
                        </a>
                        <a href="mailto:kev.chau03@gmail.com" target="_blank">
                            <div className="flex items-center gap-2 border border-black dark:bg-card rounded-xl p-2">
                                <Mail className="w-8 h-8" />
                                Email
                            </div>
                        </a>
                    </div>
                </div>
                <p className="mb-4 text-sm md:text-base">
                    I am a software engineer based in Newmarket, Ontario, Canada. I specialize in backend development and focus on bridging the technical gap between ideas and implementation. Currently, I am a fifth-year
                    student at{' '}
                    <a href="https://www.uwo.ca/index.html" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">
                        Western University
                    </a>
                    , pursuing a degree in the Specialization in Computer Science.
                </p>
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
                <p className="mb-4 text-sm md:text-base">
                    Away from my laptop, I enjoy reading comic books, playing basketball, and self-improvement.
                    I like to live by a japanese word called "Kaizen,".
                </p>
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
                <div className="relative w-full aspect-[1] md:aspect-[16/9]">
                    <Image
                        src="/lantern.webp"
                        alt="lantern"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="flex mb-4 text-sm md:text-base dark:bg-card rounded-xl">
                    <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/0EwEUcXt6bYR67ctiHkV2S?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </main>
    );
}
