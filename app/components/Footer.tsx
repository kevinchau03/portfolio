import React from 'react';
import GithubIcon from '@/public/assets/icons/icons8-github.svg';
import LinkedinIcon from '@/public/assets/icons/icons8-linkedin.svg';

export function Footer() {
    return (
        <footer className="mt-auto pb-8">
            <div className="container mx-auto px-4">
                <div className="section-shell flex w-full flex-col items-center gap-4 p-6 text-center lg:flex-row lg:justify-between">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                            &copy; 2026 Kevin Chau
                        </p>
                        <div className="hidden h-2 w-2 rounded-full border-2 border-border bg-accent lg:block"></div>
                        <p className="text-sm text-muted-foreground">
                            If you&apos;re reading this, have a great day.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="mailto:kev.chau03@gmail.com"
                            className="inline-flex min-h-11 items-center text-sm underline decoration-primary underline-offset-4 hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            kev.chau03@gmail.com
                        </a>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                            ./socials
                        </span>
                        <a
                            href="https://www.github.com/kevinchau03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-brutal p-2"
                            aria-label="GitHub Profile"
                        >
                            <GithubIcon className="fill-current text-foreground" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kevin-chau03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-brutal p-2"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedinIcon className="fill-current text-foreground" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
