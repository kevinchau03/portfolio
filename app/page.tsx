import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/app/components/Hero';
import { Experience }  from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Explore Kevin Chau’s software engineering portfolio, experience, and selected projects.',
};

export default function Page() {
    return (
        <main>
            <Hero />
            <Experience />
            <Projects />
        </main>
    );
}
