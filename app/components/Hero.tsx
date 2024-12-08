import Image from 'next/image';

export function Hero() {
  return (
    <div id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center h-[95vh]">
      {/* Info Section */}
      <div className="text-center md:text-left w-full md:w-3/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Hello! I'm <span className="text-accent">Kevin Chau</span>.
        </h1>
        <p className="hidden mt-6 leading-relaxed md:block">
          Welcome to my little digital corner! Where you can learn a little bit about me and read about my thoughts.
          <br />
          <br />
          Currently, I'm a fourth year computer science student at Western University!
          I'm passionate about full-stack web development, machine learning, and AI. I'm
          proficient in <span className="font-semibold">JavaScript</span>,{' '}
          <span className="font-semibold">TypeScript</span>, and{' '}
          <span className="font-semibold">Python</span>. My favorite frameworks
          include <span className="text-accent">React</span>,{' '}
          <span className="text-accent">Next.js</span>, and{' '}
          <span className="text-accent">Django</span>. I'm constantly striving to improve myself 1% everyday. 
          Currently seeking to 2025 internships and open for work.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
                <button className="bg-accent p-2 items-center justify-center rounded-md">
                    <a href="mailto:kchau57@uwo.com">E-Mail Me</a>
                </button>
                <button className="bg-accent p-2 items-center justify-center rounded-md">
                    <a href="/KevinChau_Resume.pdf" download>
                        My Resume
                    </a>
                </button>
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
