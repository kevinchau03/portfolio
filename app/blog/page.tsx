import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Writing on engineering, product decisions, and the systems behind the work.',
    alternates: {
        canonical: '/blog',
    },
};

export default function Page() {
    return (
        <main className="container mx-auto px-4 pb-20 pt-12 md:pb-28 md:pt-16">
            <header className="grid gap-6 pb-12 md:pb-16 lg:grid-cols-[1.35fr_0.8fr] lg:items-end lg:gap-16">
                <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                    Deep dive into my engineering work and product decisions.
                </h1>
                <p className="max-w-sm text-base leading-8 text-muted-foreground">
                    Case studies, lessons learned, and the stories behind the work I do.
                </p>
            </header>

            <section aria-label="Blog posts" className="border-t border-border/25">
                <article className="grid gap-6 py-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-10 md:py-12 lg:gap-16">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6 text-muted-foreground md:flex-col md:gap-1">
                        <time dateTime="2026-03-25">March 25, 2026</time>
                        <p>8 minute read</p>
                    </div>

                    <div className="min-w-0 max-w-3xl">
                        <ul aria-label="Post topics" className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                            <li className="list-none">Performance</li>
                            <li className="list-none">Case Study</li>
                        </ul>
                        <h2 className="text-2xl font-bold leading-snug tracking-tight md:text-3xl lg:text-4xl">
                            <Link
                                href="/blog/activity-feed"
                                className="cursor-pointer decoration-primary decoration-2 underline-offset-[6px] hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:text-primary"
                            >
                                How I Reduced My Activity Feed&apos;s Load Time by 99%.
                            </Link>
                        </h2>
                        <p className="mt-5 max-w-[65ch] text-base leading-8 text-muted-foreground">
                            In this article, I break down how I took the activity feed from roughly 10 seconds to under 100 milliseconds through micro-optimizations and architectural changes.
                        </p>
                        <Link
                            href="/blog/activity-feed"
                            className="mt-6 inline-flex min-h-11 cursor-pointer items-center font-bold text-foreground underline decoration-primary decoration-2 underline-offset-[6px] hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:opacity-70"
                        >
                            Read post
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}