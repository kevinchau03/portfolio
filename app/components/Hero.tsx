'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FileDown, Github, Linkedin } from 'lucide-react'

export function Hero() {
  const [inputValue, setInputValue] = useState('')
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const router = useRouter()

  const profilePhotos = [
    '/assets/hero1.jpeg',
    '/assets/hero2.jpeg',
    '/assets/hero3.JPG',
  ]

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const command = inputValue.toLowerCase().trim()

    switch (command) {
      case 'cd about':
        router.push('/about')
        break
      case 'cd projects':
        router.push('/#projects')
        break
      case 'cd experience':
        router.push('/#experience')
        break
      default:
        setInputValue('')
        break
    }
  }

  return (
    <section id="hero" className="min-h-[86vh] py-20 lg:py-24">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex flex-col gap-4">
          <h1 className="max-w-4xl text-3xl font-black uppercase leading-none md:text-4xl lg:text-5xl">
            <mark className="bg-accent">Hey there!</mark> I&apos;m <span className="text-primary">Kevin Chau</span>
          </h1>
          <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            I&apos;m a Computer Science graduate from <span className="font-bold text-primary">Western University</span>.
            Take a peek around to learn more about my projects, experience, and what I&apos;m building now with
            <span className="font-bold text-accent"> Grippr</span>.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[320px_1fr]">
          <div className="brutal-card relative overflow-hidden bg-secondary p-5">
            <div className="absolute right-4 top-4 brutal-chip bg-accent">tap to rotate</div>
            <figure className="relative mx-auto mt-8 w-full max-w-[240px] pb-6">
              <div className="relative h-[300px] w-full">
                {profilePhotos.map((photo, index) => {
                  const isActive = index === activePhotoIndex
                  const offset = (index - activePhotoIndex + profilePhotos.length) % profilePhotos.length

                  return (
                    <button
                      key={photo}
                      type="button"
                      onClick={() => setActivePhotoIndex((prev) => (prev + 1) % profilePhotos.length)}
                      className={[
                        'absolute left-0 top-0 h-full w-full overflow-hidden rounded-[24px] border-2 border-border bg-card transition-all duration-300',
                        isActive ? 'z-30 cursor-pointer' : 'z-10 pointer-events-none',
                      ].join(' ')}
                      style={{
                        transform: `translate(${offset * 12}px, ${offset * 10}px) rotate(${offset * 2}deg) scale(${1 - offset * 0.04})`,
                        opacity: 1 - offset * 0.15,
                      }}
                      aria-label={`Show photo ${index + 1}`}
                    >
                      <Image
                        src={photo}
                        alt={`Kevin Chau photo ${index + 1}`}
                        width={250}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  )
                })}
              </div>
            </figure>
          </div>

          <div className="section-shell flex h-full flex-col gap-6 p-5 md:p-7">
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2">kevin@portfolio:~$</span>
            </div>
            <div className="grid gap-4 text-sm md:text-base">
              <div className="grid grid-cols-[14px_auto_1fr] items-start gap-x-3 mb-2">
                <span className="font-black text-primary">$</span>
                <span className="text-sm font-bold tracking-[0.12em] text-primary">cat role.txt</span>
                <span className="text-sm leading-6 text-foreground">full-stack developer</span>
              </div>
              <div className="grid grid-cols-[14px_auto_1fr] items-start gap-x-3 mb-2">
                <span className="font-black text-primary">$</span>
                <span className="text-sm font-bold tracking-[0.12em] text-primary">pwd</span>
                <span className="text-sm leading-6 text-muted-foreground">/home/canada/ontario/newmarket</span>
              </div>
              <div className="">
                <div className="grid grid-cols-[14px_auto_1fr] items-start gap-x-3 mb-2">
                  <span className="font-black text-primary">$</span>
                  <span className="text-sm font-bold tracking-[0.12em] text-primary">ls -la /links</span>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.github.com/kevinchau03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-brutal text-sm"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-4 w-4" />
                      github
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kevin-chau03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-brutal text-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4" />
                      linkedin
                    </a>
                    <a
                      href="/Kevin_Chau_Software_Engineer_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-brutal text-sm"
                      aria-label="Resume PDF"
                    >
                      <FileDown className="h-4 w-4" />
                      resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[14px_auto_1fr] items-start gap-x-3 mb-2">
                <span className="font-black text-primary">$</span>
                <span className="text-sm font-bold tracking-[0.12em] text-primary">cat rank.txt</span>
                <span className="text-sm leading-6 text-foreground">hard stuck plat tft</span>
              </div>
              <form onSubmit={handleCommand} className="rounded-[22px]">
                <label className="grid grid-cols-[14px_1fr] items-center gap-3">
                  <span className="font-black text-primary">$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="cd about, projects, experience..."
                    className="w-full bg-transparent text-sm tracking-[0.08em] text-primary placeholder:text-muted-foreground/70 focus:outline-none"
                    autoFocus
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
