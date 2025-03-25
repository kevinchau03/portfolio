import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <div id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center h-[95vh]">
      {/* Info Section */}
      <div className="text-center md:text-left w-full md:w-3/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Hello, I'm <span className="text-accent">Kevin Chau!</span> 👋
        </h1>
        <p className="hidden mt-6 leading-relaxed md:block">
          Welcome to my little digital corner! This is where you can learn a little bit about me.
          I am currently a fourth year computer science student at Western University!
          My passions include full-stack web development, machine learning, and AI. I'm
          proficient in <span className="text-accent">JavaScript</span>,{' '}
          <span className="text-accent">TypeScript</span>, and{' '}
          <span className="text-accent">Python</span>. My favorite frameworks
          include <span className="text-accent">React</span>,{' '}
          <span className="text-accent">Next.js</span>, and{' '}
          <span className="text-accent">Django</span>. Looking for internship opportunities in 2025.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="mailto:kchau57@uwo.com" className="text-white bg-accent p-2 items-center justify-center rounded-md hover:bg-white hover:text-accent transition duration-300 ease-in-out">
           Contact Me
          </a>
          <Link href="/about" className="text-white bg-accent p-2 items-center justify-center rounded-md hover:bg-white hover:text-accent transition duration-300 ease-in-out">
              Read More
          </Link>
        </div>
      </div>
      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mb-6 flex justify-center lg:mb-0">
        <Image
          src="/portrait.JPG"
          alt="Kevin Chau"
          width={375}
          height={375}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
