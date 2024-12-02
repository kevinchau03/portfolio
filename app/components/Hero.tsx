import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="flex items-center justify-center h-screen px-6">
      <div className="text-center md:text-left w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hello! Nice to meet you. <br />
          I'm <span className="text-blue-600">Kevin Chau</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          I'm a fourth-year Computer Science student at Western University. My love for coding began
          when I discovered Youtube to MP3—a lifesaver for my 12-year-old self.
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
        <div className="mt-8 flex justify-center md:justify-start gap-6">
          <SocialIcon
            url="https://www.linkedin.com/in/kevin-chau03/"
            target="_blank"
            fgColor="#FFFFFF"
            bgColor="#000000"
          />
          <SocialIcon
            url="https://github.com/kevinchau03"
            target="_blank"
            fgColor="#FFFFFF"
            bgColor="#000000"
          />
          <SocialIcon
            url="https://www.instagram.com/kevin.chau03/"
            target="_blank"
            fgColor="#FFFFFF"
            bgColor="#000000"
          />
        </div>
      </div>
      <Image src="/profile.png" alt="Kevin Chau" width={400} height={400} className="rounded-md" />
    </div>
  );
}
