import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* portrait */}
        <div className="flex-shrink-0">
          <Image
            src="/portrait.JPG"
            alt="Kevin Chau"
            width={96}
            height={96}
            className="rounded-md"
          />
        </div>

        {/* text bio */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-2">
          <h1 className="text-xl md:text-2xl font-bold">Kevin Chau</h1>
          <p className="hidden md:block leading-relaxed">
            Software Engineer at{' '}
            <a
              href="https://www.constantcloser.com/"
              className="text-primary font-bold"
            >
              Constant Closer
            </a>
          </p>
          <p className="hidden md:block text-muted">Newmarket, Ontario, Canada</p>
        </div>

        {/* code snippet */}
        <div className="w-full md:w-1/2">
          <pre className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 p-6 rounded-lg overflow-x-auto font-mono text-sm">
            {`class Programmer:
    pronouns = 'He/Him'
    interests = ['Sports', 'Comics', 'Anime', 'Fitness']
    desc = 'A software engineer, specializing in building digital solutions.'
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
