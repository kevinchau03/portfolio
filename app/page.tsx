import React from 'react';
import { Hero } from '@/app/components/Hero';
import { Experience }  from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';

export default function Page() {
    return (
        <main>
            <Hero />
            <Projects />
            <Experience />
        </main>
    );
}
