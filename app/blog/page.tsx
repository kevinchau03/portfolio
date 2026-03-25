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
        <main className="container mx-auto px-4 py-10 mt-4">
            <section className="mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-black uppercase leading-tight md:text-5xl">
                        <mark className="bg-accent">Deep dive</mark> into my engineering work and product decisions.
                    </h1>
                    <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
                        Case studies, lessons learned, and the stories behind the work I do.
                    </p>
                </div>

                <div className="grid gap-5">
                    <article className="brutal-card p-6 md:p-7">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                            <div className="max-w-3xl">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    <span className="brutal-chip">Performance</span>
                                    <span className="brutal-chip">Case Study</span>
                                </div>
                                <h2 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                                    How I Reduced My Activity Feed's Load Time by 98%.
                                </h2>
                                <p className="mt-4 text-base leading-7 text-muted-foreground">
                                    In this article, I break down how I took the activity feed from roughly 10 seconds to under 100 milliseconds through micro-optimizations and architectural changes.
                                </p>
                            </div>

                            <div className="min-w-40 text-sm text-muted-foreground md:text-right">
                                <p>March 23rd 2026</p>
                                <p className="mt-1">10 minute read</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-6">
                            <Link href={`/blog/activity-feed`} className="text-sm font-bold uppercase text-primary">
                                Read post →
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
