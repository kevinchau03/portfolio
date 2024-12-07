import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex flex-col justify-center gap-4 h-screen">
            <div>
                <h1 className="text-center text-4xl font-bold mb-4 lg:text-left text-accent lg:w-1/2">Take a deep dive into my passions. Where I talk about school, career, and life.</h1>
                <p className="text-center mb-8 lg:text-left lg:w-1/2">One of my outlets is in the form of creative writing. A way for me to get my thoughts out. Feel free to read through these articles.</p>
            </div>
            <div className="flex flex-col gap-6">
                <Link href="/passion/careers" className="hover:bg-card p-2 rounded-lg">
                    <div className="flex flex-col gap-4 w-1/2">
                        <div>
                            <h3 className="font-medium text-md">My Experience As An Aspiring Software Engineer.</h3>
                            <p className="text-slate-400">Read through as I give insight on what its like to study for a software engineering job in today's age.</p>
                        </div>
                        <div className="inline-flex items-center text-accent">
                            Read article
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href="/passion/family" className="hover:bg-card p-2 rounded-lg">
                    <div className="flex flex-col gap-4 w-1/2">
                        <div>
                            <h3 className="font-medium text-md">The Curse Of Being Blessed With Opportunities.</h3>
                            <p className="text-slate-400">I explore my past and all the things that lead me to where I am today</p>
                        </div>
                        <div className="inline-flex items-center text-accent">
                            Read Article
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
        </main>
    );
}
