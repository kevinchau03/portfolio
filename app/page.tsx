import React from 'react';
import { Hero } from '@/app/components/Hero';
import { Experience }  from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';
import { Footer } from '@/app/components/Footer';

export default function Page() {
    return (
        <main>
            <Hero />
            <Projects />
            <Experience />
            <Footer />
        </main>
    );
}
