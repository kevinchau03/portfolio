import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="flex items-center text-center h-[150px] justify-between b-top-2 w-full p-4 border-t-2 border-gray-200">
            <div className="flex gap-4">
                <Link href="#experience" className="hover:text-blue-600">
                    Experience
                </Link>
                <Link href="#projects" className="hover:text-blue-600">
                    Projects
                </Link>
                <Link href="#happy" className="hover:text-blue-600">
                    About Me
                </Link>
                <button className="p-2 bg-white text-black rounded-md">
                    <a href="mailto:kchau57@uwo.com">E-mail Me</a>
                </button>
                <button className="p-2 bg-white text-black rounded-md">
                    <a href="/KevinChau_Resume.pdf" download>
                        Download My Resume
                    </a>
                </button>
            </div>
            <p>@2024 Kevin Chau. All rights reserved.</p>
        </footer >
    );
};

