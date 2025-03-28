import React from 'react';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="flex flex-col items-center text-center h-[100px] lg:justify-between w-full p-4 border-t border-gray-200 lg:flex-row mt-auto">
            <p className="text-sm text-muted">&copy;2025 Kevin Chau. Have a great day!</p>
            <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.github.com/kevinchau03" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons8-github.svg" alt="GitHub" width={30} height={30} />
                </a>
                <a href="https://www.linkedin.com/in/kevin-chau03" target="_blank">
                    <Image src="/icons8-linkedin.svg" alt="LinkedIn" width={30} height={30} />
                </a>
            </div>
        </footer>
    );
}
