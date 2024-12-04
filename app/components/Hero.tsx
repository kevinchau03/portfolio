import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

export function Hero() {
  return (
    <div id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center h-screen px-6 mb-10">

      {/* Info Section */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hello! I'm <span className="text-blue-600">Kevin Chau</span>.
        </h1>
        <p className="hidden mt-6 text-base sm:text-lg leading-relaxed lg:block">
          I'm a fourth-year Computer Science student at Western University. My love for coding began
          when I discovered YouTube to MP3—a lifesaver for my 12-year-old self.
          <br />
          <br />
          Currently, I'm passionate about full-stack web development, machine learning, and AI. I'm
          proficient in <span className="font-semibold">JavaScript</span>,{' '}
          <span className="font-semibold">TypeScript</span>, and{' '}
          <span className="font-semibold">Python</span>. My favorite frameworks
          include <span className="text-blue-600">React</span>,{' '}
          <span className="text-blue-600">Next.js</span>, and{' '}
          <span className="text-blue-600">Django</span>. I'm always eager to learn more and
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
      <div className="md:w-1/2 mb-6 flex justify-center">
        <Image
          src="/profile.png"
          alt="Kevin Chau"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
