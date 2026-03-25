import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const redisCachingSnippet = `from django.core.cache import cache

cache_key = f"event_list_user_{current_team.id}"

# Check if events are already cached
events = cache.get(cache_key)
if not events:
    qs = ActivityEvent.objects.filter(team=current_team, timestamp__gte=lower_date_limit)
    events = list(qs)
    cache.set(cache_key, events, 300)  # Cache for 5 minutes`;

const paginationSnippet = `from django.core.paginator import Paginator

    paginator = Paginator(events, 10)
    page_obj = paginator.get_page(request.GET.get("page"));`

export const metadata: Metadata = {
    title: 'How I Reduced Activity Feed Load Time by 98%',
    description: 'A case study on reducing Constant Closer activity feed latency from seconds to under 100 milliseconds.',
    alternates: {
        canonical: '/blog/activity-feed',
    },
};

function CodeBlock({ code, label }: { code: string; label: string }) {
    return (
        <div className="my-6 overflow-hidden rounded-xl border-2 border-border bg-[#1b2430] text-[#f8f0e6] shadow-brutal-soft">
            <div className="border-b-2 border-border/70 bg-[#11161d] px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#f8f0e6]/70">{label}</span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-7">
                <code>{code}</code>
            </pre>
        </div>
    );
}

function Section({
    title,
    children,
}: Readonly<{
    title: string;
    children: React.ReactNode;
}>) {
    return (
        <section className="space-y-5">
            <h2 className="text-2xl font-black uppercase leading-tight md:text-3xl">{title}</h2>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">{children}</div>
        </section>
    );
}

export default function Page() {
    return (
        <main className="container mx-auto px-4 py-10 mt-4">
            <article className="mx-auto max-w-3xl">
                <header className="mb-12 border-b-2 border-border pb-8">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Constant Closer Case Study</p>
                    <h1 className="mt-4 text-3xl font-black uppercase leading-[1.02] md:text-5xl">
                        How I Reduced Activity Feed Load Time by 98%
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                        A case study on reducing load time from roughly 10 seconds to under 100 milliseconds by fixing bottlenecks in the database, backend, and frontend.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <p>March 25, 2026</p>
                        <p>8 minute read</p>
                        <p className="bg-accent">Internship Lesson</p>
                    </div>
                </header>

                <div className="space-y-12">
                    <Section title="My First Feature">
                        <p>
                            One day during daily stand up, our founder told me that I&apos;d be working on my first big feature for the platform, an activity feed in the user dashboard. Our customers needed insight into how their AI agents were performing. The activity feed would show a real-time list of actions: emails sent, clicks, conversions, unsubscribes, everything they need to evaluate their campaigns.
                        </p>
                        <figure className="my-8">
                            <div className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-brutal-soft">
                                <Image
                                    src="/assets/activity_feed.jpg"
                                    alt="Screenshot of Activity Feed"
                                    width={1200}
                                    height={700}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">Figure 1. Screen Shot of Activity Feed</figcaption>
                        </figure>
                        <p>
                            I was hyped. This was going to be a big step from fixing bugs and completing small tickets, now I had the chance to own a major piece of the product end-to-end. I was ready to show off my skills and make an impact. My approach was straightforward, fetch all relevant message threads from the backend, transform that data and render it on the frontend. After hacking it out for a bit, the day finally came to push to production... and <span className="font-bold">the website timed out</span>. Great.
                        </p>
                    </Section>

                    <Section title="What Went Wrong">
                        <p>
                            At this point I was panicking. My first big feature and I broke the system. I couldn&apos;t understand it, it worked locally on my machine, it worked on the staging environment too. So what went wrong?
                        </p>
                        <p>
                            That&apos;s when I came to realize, my approach could not handle real production data. Our clients had email lists ranging from 50,000 to 100,000 contacts. This meant that not only was I trying to fetch all those emails sent, but the potentially millions of tracked actions tied to a certain campaign. One customer alone had around ~1 million activity records.
                        </p>
                        <p>
                            With my implementation of the activity feed it was trying to fetch and render it all. This lead to:
                        </p>
                        <ul className="ml-5 space-y-2 text-foreground">
                            <li>Load times of 10+ seconds.</li>
                            <li>Frequent timeouts.</li>
                            <li>Confused clients.</li>
                        </ul>
                        <p>
                            It was clear that I had to rethink my approach. From a scalability perspective if more customers onboarded, the stress on the server would get exponentially worse. I had to find a solution that could handle large data efficiently and provide a seamless user experience.
                        </p>
                    </Section>

                    <section className="rounded-xl border-2 border-border bg-card p-6 shadow-brutal-soft">
                        <h3 className="text-xl font-black uppercase leading-tight md:text-2xl">The Three Bottlenecks</h3>
                        <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
                            <p>
                                After examining the code base and countless logs, I identified three major bottlenecks slowing down the feed:
                            </p>
                            <ol className="ml-5 space-y-2 text-foreground">
                                <li>Expensive database queries.</li>
                                <li>Backend inefficiency.</li>
                                <li>Improper frontend rendering.</li>
                            </ol>
                            <p>
                                Individually, each of these things was already bad practice. But when combined together, they created one of the slowest loading pages imaginable.
                            </p>
                        </div>
                    </section>

                    <Section title="Database Optimizations">
                        <p>
                            The first place I looked to optimize was the database.
                        </p>
                        <p>
                            My original queries were doing full table scans and expensive joins across very large tables. This was not good for scaling as with more users onboarded meant more emails and events to create. As mentioned earlier, some clients could potentially deal with millions of activity records, and these queries were trying to return all the rows at once. Creating a nightmare for performance.
                        </p>

                        <div className="rounded-xl border border-border bg-card px-5 py-4">
                            <h3 className="text-lg font-black uppercase leading-tight text-foreground">Adding Proper Indexing</h3>
                            <div className="mt-3 space-y-4">
                                <p>
                                    To improve query performance, I decided to create indexes. I analyzed the most accessed columns and added them on fields such as timestamps and foreign keys. This change resulted in much faster lookup times.
                                </p>
                                <p>
                                    That said, creating an index comes with its trade-offs, especially when it comes to write operations. However, since we rarely modify these rows, the performance boost on reads outweighs the slight overhead on writes. Providing customers with a better experience.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-border bg-card px-5 py-4">
                            <h3 className="text-lg font-black uppercase leading-tight text-foreground">Reducing the Query Scope</h3>
                            <div className="mt-3 space-y-4">
                                <p>
                                    Another optimization that had a significant impact was reducing the query scope. Instead of fetching all rows from the database, we focused on limiting our queries to only retrieve the data necessary for the current view. By narrowing the result set, we reduced unnecessary computation and data transfer.
                                </p>

                            </div>
                        </div>
                        <p>These two changes reduced execution times significantly by avoiding full table scans and only returning what we need. </p>

                    </Section>

                    <Section title="Backend Optimizations">
                        <p>
                            Next, I focused on optimizing the backend, where my fellow engineer and I identified a crucial inefficiency.
                        </p>
                        <p>
                            He helped point out to me that my logic was performing unnecessary data transformation and fetching more data than needed before sending the response to the frontend. Optimizing the database query helped but if I was sending a request every single time a new action hit the database, that meant unnecessary re-rendering and therefore slower load times.
                        </p>

                        <div className="rounded-xl border border-border bg-card px-5 py-4">
                            <h3 className="text-lg font-black uppercase leading-tight text-foreground">Introducing Redis Caching</h3>
                            <div className="mt-3 space-y-4">
                                <p>
                                    To address this, I implemented Redis caching to store the results of expensive database queries and computations. By caching the data, we were able to serve subsequent requests quickly, eliminating the need to recompute the same data for every request.
                                </p>
                                <p>
                                    Although the data might be slightly stale, the performance improvements were substantial, especially for users with larger contact lists. Below is a coding snippet.
                                </p>
                                <CodeBlock code={redisCachingSnippet} label="Redis cache example" />
                            </div>
                        </div>

                        <div className="rounded-xl border border-border bg-card px-5 py-4">
                            <h3 className="text-lg font-black uppercase leading-tight text-foreground">Consider Trade-offs: Real-Time vs Performance</h3>
                            <div className="mt-3 space-y-4">
                                <p>
                                    Of course, there are trade-offs when using caching. While it would be ideal for users to see real-time updates, my implementation meant showing users stale data for 5 minutes. However, given the volume of data we were handling, the trade-off between performance versus real-time data was necessary. This was done to allow clients to have the best user experience possible.
                                </p>
                                <p>
                                    In the end, the benefits outweighed the drawbacks. If users could interact with the feed without experiencing major delays that&apos;s a win.
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Frontend Optimizations">
                        <p>
                            Lastly, I needed to improve the frontend logic.
                        </p>
                        <p>
                            I understood that rendering thousands of rows at once was never going to work well. So this problem also turned into a UI/UX challenge because I had to figure how to paginate the feed in a way that made sense to users while also having good performance. Reading up on best practices and taking inspiration by sites such as Amazon, Google, and twitter, I came to the conclusion to use page-based pagination.
                        </p>
                        <CodeBlock code={paginationSnippet} label="Page-based pagination" />
                        <p>Controlling the amount of events the user sees at a time helped to improve the loading speeds tremendously.</p>
                    </Section>

                    <Section title="Result">
                        <p>
                            With all three major bottle necks addressed, I had successfully improved the performance of the activity feed. Load times dropped from roughly 10 seconds to under 100ms. More importantly, the page became fast enough for users to trust and enjoy it.
                        </p>
                    </Section>

                    <Section title="What I learned">
                        <p>
                            This was one of the most valuable lessons from my internship at Constant Closer. Just because something works, doesn&apos;t mean it works well. I am glad to have had the opportunity to learn this early in my career and a team that let me break things and still believe in me. I learned that performance and scalability are just as important as functionality, and now I know to think about scale early in the implementation process.
                        </p>
                        <p>
                            It is not from building the most technically challenging features or how fast I could complete a ticket that made me improve as an engineer, but it was from learning from my mistakes that taught me to grow the most.
                        </p>
                    </Section>
                </div>

                <footer className="mt-12 border-t-2 border-border pt-6">
                    <Link href="/blog" className="text-sm font-bold uppercase text-primary">
                        Back to blog
                    </Link>
                </footer>
            </article>
        </main>
    );
}
