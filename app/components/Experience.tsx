import Image from 'next/image';

export function Experience() {
  const experiences = [
    {
      id: 0,
      title: 'td bank',
      role: 'customer experience associate',
      period: 'aug 2026 - present',
      location: 'aurora, ontario',
      image: '/assets/icons/td-bank.webp',
      details: 'Working in a fast-paced environment, assisting customers with their banking needs and providing excellent service.',
    },
    {
      id: 1,
      title: 'cineplex',
      role: 'cast member',
      period: 'march 2026 - september 2026',
      location: 'aurora, ontario',
      image: '/assets/icons/cineplex.jpg',
      details: 'Popping popcorn and providing guests with a great movie experience!',
    },
    {
      id: 2,
      title: 'constant closer',
      role: 'software engineer',
      period: 'march 2025 - august 2025',
      location: 'remote',
      image: '/assets/icons/constantcloser.svg',
      details: 'Worked on the Constant Closer platform, an AI email sales assistant for teams automating and optimizing outreach.',
    },
    {
      id: 3,
      title: 'hitmeup.ai',
      role: 'software engineering intern',
      period: 'may 2024 - sept 2024',
      location: 'remote',
      image: '/assets/icons/HitMeUp.svg',
      details: 'Contributed to the mobile and web app for HitMeUp, an AI gatekeeper used by creators and professionals to capture leads automatically.',
    },
    {
      id: 4,
      title: 'western ai club',
      role: 'senior director of communications',
      period: 'oct 2022 - sept 2024',
      location: 'london, ontario',
      image: '/assets/icons/WesternAI.svg',
      details: 'Led communications, organized outreach programs, and built event promotion that grew visibility for the club community.',
    },
    {
      id: 5,
      title: 'magna international',
      role: 'assembly line worker',
      period: 'may 2023 - september 2023',
      location: 'newmarket, ontario',
      image: '/assets/icons/magna.png',
      details: 'Worked on the assembly line in a manufacturing plant and learned what repetitive, process-heavy work actually feels like.',
    },
    {
      id: 6,
      title: 'scratch coding for kids',
      role: 'python tutor',
      period: 'may 2022 - sept 2022',
      location: 'remote',
      image: '/assets/icons/SC4K.avif',
      details: 'Tutored students in Python fundamentals and logic building through interactive projects, then created curriculum for future tutors.',
    },
    {
      id: 7,
      title: 'natures emporium',
      role: 'maintenance boy',
      period: 'october 2020 - aug 2021',
      location: 'newmarket, ontario',
      image: '/assets/icons/natures-emporium.webp',
      details: 'Kept the store tidy, helped customers, and moved a lot of carts. Useful work ethic training, no glamour involved.',
    },
  ];

  const groups = [
    {
      id: 'tech',
      title: 'Tech experience',
      description: 'Building software, teaching code, and bringing people together around technology.',
      experiences: experiences.filter((experience) => [2, 3, 4, 6].includes(experience.id)),
    },
    {
      id: 'non-tech',
      title: 'Non-tech experience',
      description: 'Working with customers, supporting teams, and keeping things running on the ground.',
      experiences: experiences.filter((experience) => [0, 1, 5, 7].includes(experience.id)),
    },
  ];

  return (
    <section id="experience" className="container mx-auto mb-24 px-4 py-10" aria-labelledby="experience-heading">
      <header className="mb-12 max-w-2xl">
        <h2 id="experience-heading" className="text-2xl font-black leading-tight tracking-tight md:text-4xl">Jobs that shaped how I work.</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Startup work, community leadership, and a few very grounded roles.
        </p>
      </header>

      <div className="space-y-14 md:space-y-20">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`} className="grid gap-7 border-t border-border/25 pt-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:pt-9">
            <header>
              <h3 id={`${group.id}-heading`} className="text-xl font-bold leading-snug text-foreground">{group.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{group.description}</p>
            </header>

            <ol className="min-w-0 space-y-9 md:space-y-10">
              {group.experiences.map((experience) => (
                <li key={experience.id} className="list-none">
                  <article className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-4 md:grid-cols-[52px_minmax(0,1fr)] md:gap-x-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-light p-1.5 md:h-[52px] md:w-[52px]">
                      <Image src={experience.image} alt="" width={44} height={44} className="h-full w-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-col gap-2 xl:flex-row xl:items-start xl:justify-between xl:gap-5">
                        <div>
                          <h4 className="text-lg font-bold capitalize leading-6 text-foreground md:text-xl">{experience.title}</h4>
                          <p className="mt-1 text-sm capitalize leading-6 text-primary">{experience.role}</p>
                        </div>
                        <p className="text-xs capitalize leading-6 text-muted-foreground xl:shrink-0 xl:text-right">{experience.period}</p>
                      </div>
                      <p className="mt-3 max-w-[65ch] text-sm leading-7 text-muted-foreground">{experience.details}</p>
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs capitalize leading-6 text-muted-foreground">
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </section>
  );
}