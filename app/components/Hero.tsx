import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/portrait.JPG"
            alt="Kevin Chau"
            width={156}
            height={156}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3 h-[156px] justify-between text-center md:text-left">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Kevin Chau</h1>
            <p className="leading-relaxed">
              Software Engineer at{' '}
              <a
                href="https://www.constantcloser.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold"
              >
                Constant Closer
              </a>
            </p>
            <p className="text-muted">Newmarket, Ontario, Canada</p>
          </div>
          <div className="mt-4">
            <Link href="/about" className="text-primary font-bold">
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <pre className="border border-black dark:bg-gray-900 dark:text-gray-100 p-6 rounded-lg overflow-x-auto font-mono text-sm">
            {`class Programmer:
    pronouns = 'He/Him'
    interests = ['Sports', 'Comics', 'Anime', 'Fitness']
    git_commits = 729,
    desc = 'A software engineer, 
    specializing in building digital solutions.'
    def goalsFor2025(self):
        LandTechInternship()
        TravelMore()`
            }
          </pre>
        </div>
      </div>
    </section>
  )
}
