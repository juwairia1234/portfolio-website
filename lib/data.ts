import React from "react";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import ECommerceImg from "@/public/ECommerce.png";
import peekabyteImg from "@/public/peekabyteImg.png";
import notewizImg from "@/public/notewizImg.png";
import JBImg from "@/public/Youtube.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "B.E. in Information Technology",
    location: "Muffakham Jah College of Engineering & Technology, Hyderabad, India",
    description:
      "Overall G.P.A: 3.4/4",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Higher Secondary School Certificate",
    location: "Radhwa International School, KSA",
    description:
      "Percentage: 89.8%",
    icon: React.createElement(BiSolidSchool),
    date: " 2018 - 2020",
  },
  {
    title: "Secondary School Certificate",
    location: "Radhwa International School, KSA",
    description:
      "Percentage: 86.6%",
    icon: React.createElement(LuSchool),
    date: "2016 - 2018",
  },
] as const;

export const projectsData = [
  {
    title: "NoteWiz",
    description:
      "Developed an AI-driven educational platform using OpenAI’s Assistant API that generates interactive quizzes, flashcards, and contains document querying features.",
    tags: ["React", "Next.js", "MongoDB", "Prisma", "Tailwind", "TypeScript"],
    imageUrl: notewizImg,
  },
  {
    title: "Peekabyte",
    description:
      "Collaborated on backend development, implementing steganography to hide data within images. This project secured second prize in a hackathon.",
    tags: ["JavaScript","Android Studio", "S3 Buckets", "Steganography"],
    imageUrl: peekabyteImg,
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Developed a comprehensive, feature-rich e-commerce platform designed for an optimal shopping experience with features like product management, real-time ordertracking, and secure payments.",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    imageUrl: ECommerceImg,
  },
  {
    title: "JB-Media",
    description:
      "Created a responsive YouTube clone mimicking core YouTube features. Integrated YouTube API for dynamic video fetching, recommendations, and search functionality and implemented custom video player interface with standard YouTube controls.",
    tags: ["HTML", "CSS", "JavaScript", "YouTube API"],
    imageUrl: JBImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "Prisma",
  "MongoDB",
  "SQL",
  "C",
  "C++",
  "Git/GitHub",
] as const;
