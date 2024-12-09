import React from 'react';

export default function Page() {
    return (
        <main className="flex flex-col justify-center gap-4 mt-24">
            <div className="text-left">
                <h1 className="text-3xl font-bold mb-4">Hey there!</h1>
                <p className="mb-4">
                    My name is Kevin Chau, and I have dedicated myself to becoming a Software Engineer.
                    It all started discovered a beautiful site called "YouTube to MP3"—a godsend for my younger self.
                    Ever since then, I've always been fascinated by software and how it can make people's lives easier.
                </p>
                <p className="mb-4">
                    Fast forward to high school: I took my first computer science course in grade 12 and was immediately hooked.
                    Here I am now, a fourth-year computer science student at Western University. I'm most passionate about full-stack development,
                    particularly building web and mobile apps that make a difference.
                </p>
                <div className="mb-4">
                    <p className="font-semibold mb-2">My current tech stack consists of:</p>
                    <ul className="list-disc list-inside">
                        <li><span className="font-bold">Front End:</span> Next.js</li>
                        <li><span className="font-bold">Back End:</span> Next.js API Routes</li>
                        <li><span className="font-bold">Language:</span> TypeScript</li>
                        <li><span className="font-bold">Database:</span> MongoDB</li>
                    </ul>
                </div>
                <p className="mb-4">
                    Away from my laptop, I enjoy reading comic books, playing basketball, and self-improvement.
                    I like to live by a japanese word called "Kaizen,". Meaning continous improvement, even if it just 1%.
                    I abide by this rule and look for ways to improve myself everyday.
                </p>
                <div className="mb-4">
                    <div>
                        <p>Kaizen</p>
                        <p>[ki-zan]</p>
                        <p>A Japanese term meaning change for the better or continous improvement,
                            which serves as the basis for Japanese business philosophy. </p>
                    </div>
                </div>

                <p className="mb-4">
                    My biggest motivators include my friends and family, who have always supported me in my journey.
                    They have helped shaped me into the person I am today
                </p>
            </div>
        </main>
    );
}
