import Image from 'next/image';

export function Experience() {

  return (
    <div id="experience" className="flex flex-col mb-10">
      <h1 className="text-center text-4xl font-bold mb-4 lg:text-left">My Software Engineering Journey</h1>
      <p className="text-center lg:text-left">This is my experience as a Software Engineer since first learning to Java in grade 12.</p>
      {/* Timeline */}
      <div className="flex flex-col">
        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/Western.png" alt="Western University" width={50} height={50} />
              <h2>Work Study Student</h2>
            </div>
            <h2>2024 - Present</h2>
          </div>
          <ul>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
          </ul>
        </div>
        {  /* Experience 2 */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/Western.png" alt="Western University" width={50} height={50} />
              <h2>Work Study Student</h2>
            </div>
            <h2>2024 - Present</h2>
          </div>
          <ul>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
          </ul>
        </div>
        { /* Experience 3 */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/Western.png" alt="Western University" width={50} height={50} />
              <h2>Work Study Student</h2>
            </div>
            <h2>2024 - Present</h2>
          </div>
          <ul>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
          </ul>
        </div>
        { /* Experience 4 */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/SC4K.avif" alt="ScratchCoding4Kids" width={100} height={100} />
              <h2>Python Tutor</h2>
            </div>
            <h2>October 2022 - April 2024</h2>
          </div>
          <ul>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
            <li>
              I worked on a team of 5 developers to build a web application using React and Node.js. I was responsible for the front-end development and worked closely with the back-end team to integrate the front-end with the back-end.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}