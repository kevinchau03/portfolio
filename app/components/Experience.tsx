export function Experience() {
  return (
    <div id="experience" className="flex flex-col h-[80vh]">
      <h1 className="text-center text-4xl font-bold mb-4 lg:text-left">My Software Engineering Journey</h1>
      {/* Timeline */}
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Work Study Student</h2>
          <ul>
            <li>
              <p className="text-lg">I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.</p>
            </li>
            <li>
              <p className="text-lg">I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.</p>
            </li>
          </ul>
        </div>
        {  /* Experience 2 */}
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Software Engineer at HitMeUp.ai</h2>
          <ul>
            <li>
              <p className="text-lg">I worked on a team of 10 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.</p>
            </li>
            <li>
              <p className="text-lg">I worked on a team of 10 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.</p>
            </li>
          </ul>
        </div>
        { /* Experience 3 */}
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Software Engineer at DEF</h2>
          <p className="text-lg">I worked on a team of 15 developers to build a web application using Angular and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.</p>
        </div>
      </div>
    </div>
  )
}