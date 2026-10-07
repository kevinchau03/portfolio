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
      case 'cd blog':
        router.push('/blog')
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
            A Computer Science graduate from <span className="font-bold text-primary">Western University</span>.
            Take a peek around to learn more about me.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[320px_1fr]">
          <figure className="flex min-h-[390px] flex-col items-center justify-center gap-7 px-5 py-8">
            <button
              type="button"
              onClick={() => setActivePhotoIndex((prev) => (prev + 1) % profilePhotos.length)}
              className="relative h-[290px] w-[220px] cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[24px] focus-visible:outline-primary sm:h-[300px] sm:w-[240px]"
              aria-label="Show next photo"
              aria-describedby="hero-photo-status"
            >
              {profilePhotos.map((photo, index) => {
                const offset = (index - activePhotoIndex + profilePhotos.length) % profilePhotos.length
                const poses = [
                  { x: -3, y: -4, angle: -5 },
                  { x: 16, y: 7, angle: 9 },
                  { x: -14, y: 12, angle: -12 },
                ]
                const pose = poses[offset]

                return (
                  <span
                    key={photo}
                    className="pointer-events-none absolute inset-0 block overflow-hidden rounded-sm border border-black/10 bg-white p-2 pb-7 shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition-transform duration-500 ease-out motion-reduce:transition-none"
                    style={{
                      transform: `translate(${pose.x}px, ${pose.y}px) rotate(${pose.angle}deg)`,
                      zIndex: profilePhotos.length - offset,
                    }}
                    aria-hidden={offset !== 0}
                  >
                    <Image
                      src={photo}
                      alt={`Kevin Chau photo ${index + 1}`}
                      width={250}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </span>
                )
              })}
            </button>
            <figcaption id="hero-photo-status" className="text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
              Click to flip · {activePhotoIndex + 1} / {profilePhotos.length}
            </figcaption>
          </figure>
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
                    placeholder="cd about, blog..."
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
