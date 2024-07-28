import React from 'react';
import { About }  from '@/components/About';
import { Hero } from '@/components/Hero';
import { Experience }  from '@/components/Experience';
import { Projects } from '@/components/Projects';

export default function Home() {
    return (
        <main>
            <Hero />
            <Experience />
            <About />
            <Projects />
        </main>
    );
}
