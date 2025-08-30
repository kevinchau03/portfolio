import React from 'react';
import GithubIcon from '@/public/icons8-github.svg';
import LinkedinIcon from '@/public/icons8-linkedin.svg';

export function Footer() {
    return (
        <footer className="mt-auto">
            <div className="container mx-auto px-4">
                <div className="border-t border-border"></div>
                <div className="flex flex-col items-center text-center lg:justify-between w-full p-6 lg:flex-row gap-4">
                    {/* Left side - Copyright */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                        <p className="text-sm text-muted-foreground font-mono">
                            &copy; 2025 Kevin Chau
                        </p>
                        <div className="hidden lg:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <p className="text-sm text-muted-foreground">
                            Have a great day! ✨
                        </p>
                    </div>

                    {/* Center - Command line style */}
                    <div className="hidden md:flex items-center text-sm font-mono text-muted-foreground">
                        <span className="text-green-400">$</span>
                        <span className="ml-2 text-primary">uptime</span>
                        <span className="ml-2">Built with ❤️ and Next.js</span>
                    </div>

                    {/* Right side - Social Links */}
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-muted-foreground font-mono mr-2">
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
