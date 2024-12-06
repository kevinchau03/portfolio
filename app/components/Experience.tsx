import Image from 'next/image';

export function Experience() {

  return (
    <div id="experience" className="flex flex-col gap-6 mb-12">
      <h1 className="text-4xl font-bold mb-4 text-accent">My Software Engineering Journey</h1>
      <div className="flex flex-col gap-10">
        {/* Experience 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col lg:justify-between lg:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/Western.png" alt="Western University" width={50} height={50} />
              <h2 className="text-lg font-bold">Work Study Student @ Western University</h2>
            </div>
            <h2>September 2024 - Present</h2>
          </div>
          <ul>
            <li>
              Assisted in the research and development of an MQTT-based IoT system utilizing ESP modules to collect and
              transmit data from harsh environments.
            </li>
            <li>
              Developed a web application using React, Node.js, and MongoDB to visualize the data collected from the IoT
              system.
            </li>
          </ul>
        </div>
        {/* Experience 2 */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/HitMeUp.svg" alt="HitMeUp.ai" width={50} height={50} />
              <h2 className="text-lg font-bold">Software Engineer @ HitMeUp.ai</h2>
            </div>
            <h2>May 2024 - September 2024</h2>
          </div>
          <ul>
            <li>
              Developed the web and mobile app for HitMeUp, an AI-driven lead qualification platform for creators and experts,
              using React Native, Django, Python, and JavaScript.
            </li>
            <li>
              Developed a chat widget feature using HTML, CSS, and JavaScript, enabling experts to embed our platform into
              their websites. This solution increased lead generation activity by 22%
            </li>
            <li>
              Implemented a timestamping feature for the inbox, enabling accurate tracking of message history and improving
              user experience.
            </li>
            <li>
              Designed and enhanced the settings page, enabling users to fully personalize and update their account settings and
              preferences.
            </li>
          </ul>
        </div>
        {/* Experience 3 */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/WesternAI.svg" alt="WesternAI Club" width={50} height={50} />
              <h2 className="text-lg font-bold">Senior Director of Communications @ WesternAI Club</h2>
            </div>
            <h2>October 2022 - September 2024</h2>
          </div>
          <ul>
            <li>
              Discovered a user pain point and implemented a feature for users to easily sign up and add club events to their
              google calendar using the Google Calendar API in React.
            </li>
            <li>
              Allowed users to enable push notifications to notify them on the latest events boosting engagement by
              implementing a Cron Job.
            </li>
            <li>
              Partnered with the design team to translate designs from Figma to code implementation.
            </li>
          </ul>
        </div>
        {/* Experience 4 */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src="/SC4K.avif" alt="Scratch Coding For Kids" width={50} height={50} />
              <h2 className="text-lg font-bold">Python Tutor @ Scratch Coding For Kids</h2>
            </div>
            <h2>January 2022 - September 2022</h2>
          </div>
          <ul>
            <li>
              Developed a Python fundamentals curriculum for 10+ students in grades 5-12.
            </li>
            <li>
              After course completion, students understood OOP practices, built intermediate scripts such as games, and learned
              to use third party libraries such as Numpy and Turtle.
            </li>
            <li>
              Collected valuable feedback from parents of our students to enhance and refine our course for future cohorts.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
