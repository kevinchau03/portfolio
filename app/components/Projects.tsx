import React from 'react'
import Image from 'next/image'

export function Projects() {
  return (
    <div id="projects" className="mb-12">
      <h1 className="text-center text-4xl font-bold mb-4 lg:text-left">My Project Gallery (WIP)</h1>
      <p className="text-center mb-8 lg:text-left lg:w-1/2">Check out the projects I've been working on recently! As you can tell I am really into web development.
        Currently learning Next.js and TypeScript. Looking to learn more about artificial intelligence and machine learning.
      </p>
      <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="p-4 max-w-md">
          <div className="flex rounded-lg h-full p-8 flex-col
                          hover:bg-gray-700 transform hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <Image src="/Milo.jpg" alt="Milo" width={100} height={100} />
              </div>
              <h2 className="text-lg font-medium">Milo Financial</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                Your own personal AI financial assistant. Start saving better with Milo.
              </p>
              <a href="https://hack-western11.vercel.app/" target="_blank" className="mt-3 hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="p-4 max-w-md">
          <div className="flex rounded-lg h-full p-8 flex-col
                          hover:bg-gray-700 transform hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Uplifted Echoes</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                A real-time news website that provides the latest news from around the world.
              </p>
              <a href="https://news-app-seven-rose.vercel.app/" target="_blank" className="mt-3 hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="p-4 max-w-md">
          <div className="flex rounded-lg h-full p-8 flex-col
                          hover:bg-gray-700 transform hover:-translate-y-2 
                          transition duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard">
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                  <path d="m6.2 5.3 3.1 3.9" />
                  <path d="m12.4 3.4 3.1 4" />
                  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Anime Buddy</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base">
                Keep track of your favourite anime shows and movies.
              </p>
              <a href="https://github.com/kevinchau03/AnimeBuddy" target="_blank" className="mt-3 hover:text-blue-600 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
