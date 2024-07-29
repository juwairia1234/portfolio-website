"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");
//   const { ref, inView} = useInView({
//     threshold: 0.75,
//   });
//   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
// //   const { ref } = useSectionInView("About");

//   useEffect(() => {
//     if (inView && Date.now() - timeOfLastClick > 1000) {
//       setActiveSection("About")
//     }
//   }, [inView, setActiveSection, timeOfLastClick]);


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a final-year engineering student in{" "}
        <span className="font-medium">Information Technology</span>, I decided to follow my passion for programming. I enrolled in a coding course and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What I love most about programming</span> is the problem-solving aspect. I <span className="underline">relish</span> the moment when I finally crack a challenging problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        badminton, watching movies, and discovering new cafes. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about what{" "}
        <span className="font-medium">fitness</span> means to me and how I can make it a part of my daily routine more effectively.
      </p>
    </motion.section>
  );
}