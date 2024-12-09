import React from 'react';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex flex-col justify-center gap-4 mt-24">
            <div className="text-left mb-4">
                <h1 className="text-3xl font-bold mb-4">Hey there!</h1>
                <p className="mb-4">
                    My name is Kevin Chau, an aspiring Software Engineer.
                    My passion for coding started when I discovered a beautiful site called "YouTube to MP3"—a godsend for my younger self.
                </p>
                <p className="mb-4">
                    Fast forward to high school: I took my first computer science course in grade 12 and was immediately hooked.
                    Here I am now, a fourth-year computer science student at Western University. I'm most passionate about full-stack development,
                    particularly building web and mobile apps from the ground up.
                </p>
                <div className="flex mb-4 bg-card rounded-xl p-4">
                    <div className="bg-accent w-[5px] rounded-full"></div>
                    <div className="ml-4">
                        <p className="font-semibold mb-2">My current tech stack consists of:</p>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">Front End:</span> Next.js</li>
                            <li><span className="font-bold">Back End:</span> Next.js API Routes</li>
                            <li><span className="font-bold">Language:</span> TypeScript</li>
                            <li><span className="font-bold">Database:</span> MongoDB</li>
                        </ul>
                    </div>
                </div>
                <p className="mb-4">
                    Away from my laptop, I enjoy reading comic books, playing basketball, and self-improvement.
                    I like to live by a japanese word called "Kaizen,". By abiding by this rule, I am always looking for 
                    ways to improve myself and my work.
                </p>
                <div className="flex mb-4 bg-card rounded-xl p-4">
                    <div className="bg-accent w-[5px] rounded-full"></div>
                    <div className="ml-4">
                        <p className="font-bold text-lg">Kaizen</p>
                        <p className="italic text-sm text-gray-500">[ki-zan]</p>
                        <p className="mt-2">
                            A Japanese term meaning "change for the better" or "continuous improvement,"
                            which serves as the basis for Japanese business philosophy.
                        </p>
                    </div>
                </div>
                <p className="mb-4">
                    My biggest motivators are my friends and family. They are very important pieces in my life and have shaped me into who I am today.
                    Here are some photos as my appreciation. (Psst. Don't let them know how cheesy I am!)
                </p>
                <div className="grid gap-4 lg:grid-cols-3 mb-4 bg-card p-4 rounded-xl">
                    <Image src="/lantern.webp" alt="lantern" width={375} height={375} />
                    <Image src="/beach.webp" alt="beach" width={375} height={375} />
                    <Image src="/family.webp" alt="family" width={375} height={375} />
                </div>
                <p className="mb-4">
                    If you made it this far in the website, I just to say thank you for getting this far. I hope you got to learn a little bit
                    more about me. Feel free to shoot me a message and connect with me for a quick chat.
                </p>
            </div>
        </main>
    );
}
