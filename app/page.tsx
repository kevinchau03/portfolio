import React from 'react';
import { Hero } from '@/app/components/Hero';
import { Experience }  from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';
import { Footer } from '@/app/components/Footer';
import { Happy } from '@/app/components/Happy';

export default function Page() {
    return (
        <main>
            <Hero />
            <Projects />
            <Experience />
            <Happy />
            <Footer />
        </main>
    );
}
