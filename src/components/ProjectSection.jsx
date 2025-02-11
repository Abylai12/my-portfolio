"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chat Website",
    description:
      "I developed a real-time chat application using Next.js, Node.js, and Express, with Socket.io for real-time communication. The project integrates JWT authentication with cookies for secure user login and session management. The front-end is styled using DaisyUI, providing a clean and responsive user interface. The application stores user data and messages in MongoDB, ensuring scalable and efficient data management. This project demonstrates my ability to build full-stack applications with seamless real-time interactions, robust authentication, and modern front-end and back-end technologies I've provided a preview link and the GitHub source code link on hover of the image.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abylai12/Web-chat",
    previewUrl: "https://web-chat-dqzb.onrender.com",
  },
  {
    id: 2,
    title: "Netflix clone Website",
    description:
      "I created a Netflix clone website using Next.js, Node.js, and Express, integrating the TMDB API to fetch movie and TV show data. The app features JWT authentication for secure user login, and stores data such as search history in MongoDB. The front-end is styled with Tailwind CSS, providing a clean and responsive interface. This project demonstrates my ability to build full-stack applications with third-party API integration, secure authentication, and modern web technologies. I've provided a preview link and the GitHub source code link on hover of the image.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abylai12/netflix-clone",
    previewUrl: "https://netflix-clone-frontend-pi.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "I built a robust e-commerce platform using Next.js, Node.js, and Express, with PostgreSQL for a strong database structure, including complex calculations for coupons, quantity discounts, and more. To enhance performance, I utilized Redis for caching featured products. The platform integrates Stripe for secure payments and includes full JWT authentication for user sessions. The front-end is styled with Tailwind CSS, offering a modern, responsive interface for a seamless shopping experience. I've provided a preview link and the GitHub source code link on hover of the image.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abylai12/Online-shop-by-Postgre",
    previewUrl: "https://online-shop-by-postgre.vercel.app",
  },
  {
    id: 4,
    title: "Ticket booking website",
    description:
      "I developed a ticket booking website for local concerts using Next.js and GraphQL for efficient data fetching. This project marked my first experience with CI/CD pipelines, unit testing (using Jest), and end-to-end testing (with Cypress), ensuring a high-quality, reliable application. The platform includes a comprehensive admin control panel for managing events, including the ability to add and update events, and control the ticket buying process. The system integrates MongoDB with a well-designed ERD for optimized data storage. Users can purchase tickets, generate QR codes, and easily cancel their tickets. Additionally, I implemented Cron jobs for various automated tasks, and the front-end is styled with Tailwind CSS to deliver a responsive and user-friendly experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl:
      "https://intern-1cd-concert-ticket-booking-frontend-prod.vercel.app/user/home",
  },
  {
    id: 5,
    title: "Mobile app",
    description:
      "I developed a mobile app using React Native with Expo Go, integrating GraphQL for efficient data fetching and Codegen for generating types. The app features JWT authentication for secure user login, providing a seamless and responsive user experience. This project demonstrates my ability to build mobile applications with modern technologies and secure authentication methods",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
