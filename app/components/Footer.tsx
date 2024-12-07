import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="flex flex-col items-center text-center h-[100px] lg:justify-between w-full p-4 border-t border-gray-200 lg:flex-row">
            <p>@2024 Kevin Chau. Have a great day!</p>
            <div className="flex gap-4">
                <button className="bg-accent p-1 items-center justify-center rounded-md">
                    <a href="mailto:kchau57@uwo.com">E-mail Me</a>
                </button>
                <button className="bg-accent p-1 items-center justify-center rounded-md">
                    <a href="/KevinChau_Resume.pdf" download>
                        Download My Resume
                    </a>
                </button>
            </div>
        </footer >
    );
};

