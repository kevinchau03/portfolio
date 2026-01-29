import React from 'react';
import GithubIcon from '@/public/assets/icons/icons8-github.svg';
import LinkedinIcon from '@/public/assets/icons/icons8-linkedin.svg';

export function Footer() {
    return (
        <footer className="mt-auto">
            <div className="container mx-auto px-4">
                <div className="border-t border-border"></div>
                <div className="flex flex-col items-center text-center lg:justify-between w-full p-6 lg:flex-row gap-4">
                    {/* Left side - Copyright */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                        <p className="text-sm text-muted-foreground ">
                            &copy; 2026 Kevin Chau
                        </p>
                        <div className="hidden lg:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <p className="text-sm text-muted-foreground">
                            if you&apos;re reading this, have a great day! ✨
                        </p>
                    </div>


                    {/* Right side - Social Links */}
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-muted-foreground  mr-2">
                            ./socials
                        </span>
                        <a 
                            href="https://www.github.com/kevinchau03" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
                            aria-label="GitHub Profile"
                        >
                            <GithubIcon className="fill-current text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/kevin-chau03" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedinIcon className="fill-current text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
