import React from 'react';
import GithubIcon from '@/public/icons8-github.svg';
import LinkedinIcon from '@/public/icons8-linkedin.svg';

export function Footer() {
    return (
        <footer className="container mx-auto flex flex-col items-center text-center lg:justify-between w-full p-4 border-t border-gray-200 lg:flex-row mt-auto">
            <p className="text-sm text-muted">&copy;2025 Kevin Chau. Have a great day!</p>
            <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.github.com/kevinchau03" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-8 h-8 fill-current" />
                </a>
                <a href="https://www.linkedin.com/in/kevin-chau03" target="_blank">
                    <LinkedinIcon className="w-8 h-8 fill-current" />
                </a>
            </div>
        </footer>
    );
}
