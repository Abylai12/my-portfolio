import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Frontend: JavaScript, TypeScript, React, Next.js, HTML, CSS, Tailwind
          CSS, Bootstrap, Daisy UI, Shadcn
        </li>
        <li>
          Backend: Node.js, Express.js, Java, Spring Boot, RESTful APIs,
          GraphQL, Apollo, Socket.io
        </li>
        <li>Databases: PostgreSQL, MongoDB, Redis</li>
        <li>Testing: Cypress, Jest</li>
        <li>Mobile Development: React Native, Expo Go</li>
        <li>DevOps & Tools: Git, AWS, Monorepo, Nx, Vercel, Render</li>
        <li>
          Other Skills: Problem-solving, debugging, performance optimization
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image takes 1/3 of the width */}

        {/* Text section takes 2/3 of the width */}
        <div className="col-span-2 mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am deeply enthusiastic about building interactive, responsive, and
            user-friendly web applications that solve real-world problems. I am
            excited to contribute to meaningful projects that challenge me to
            improve. As a quick learner, I thrive in environments where I can
            expand my knowledge and skill set. I am always eager to explore new
            tools, frameworks, and best practices to enhance my abilities and
            deliver high-quality work. My curiosity and dedication drive me to
            stay updated with the latest trends in technology and apply them
            effectively in my projects. I am a collaborative team player who
            enjoys working with others to achieve shared goals. I believe that
            great things are built through teamwork, and I am excited to
            contribute my skills while learning from more experienced
            developers. Whether it's brainstorming ideas, debugging code, or
            optimizing performance, I bring a positive attitude and a strong
            work ethic to every task.
          </p>
        </div>
        <div className="col-span-1">
          {/* <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Image"
            className="object-cover" // Ensures the image covers the area well
          /> */}
          <div className="flex flex-row justify-start text-4xl font-bold text-white">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
          </div>
          <div className="">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
