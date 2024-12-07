import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

export function Hero() {
  return (
    <div id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center h-screen">
      {/* Info Section */}
      <div className="text-center md:text-left w-full md:w-3/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Hello! I'm <span className="text-accent">Kevin Chau</span>.
        </h1>
        <p className="hidden mt-6 leading-relaxed lg:block">
          I'm a fourth-year Computer Science student at Western University. My love for coding began
          when I discovered YouTube to MP3—a lifesaver for my 12-year-old self.
          <br />
          <br />
          Currently, I'm passionate about full-stack web development, machine learning, and AI. I'm
          proficient in <span className="font-semibold">JavaScript</span>,{' '}
          <span className="font-semibold">TypeScript</span>, and{' '}
          <span className="font-semibold">Python</span>. My favorite frameworks
          include <span className="text-accent">React</span>,{' '}
          <span className="text-accent">Next.js</span>, and{' '}
          <span className="text-accent">Django</span>. I'm always eager to learn more and
          improve my skills, currently seeking internships and job opportunities for 2025.
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <SocialIcon
            url="https://www.linkedin.com/in/kevin-chau03/"
            target="_blank"
            className="custom-class"
            fgColor="currentColor"
            bgColor="#"
          />
          <SocialIcon
            url="https://github.com/kevinchau03"
            target="_blank"
            className="custom-class"
            fgColor="currentColor"
            bgColor="#"
          />
          <SocialIcon
            url="https://www.instagram.com/kevin.chau03/"
            target="_blank"
            className="custom-class"
            fgColor="currentColor"
            bgColor="#"
          />
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
