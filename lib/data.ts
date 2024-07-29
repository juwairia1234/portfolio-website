import React from "react";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import traveladvisorImg from "@/public/traveladvisorImg.png";
import peekabyteImg from "@/public/peekabyteImg.png";
import notewizImg from "@/public/notewizImg.png";
import attendancesystemImg from "@/public/attendancesystemImg.png";

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
      "Overall C.G.P.A: 8.0",
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
      "Developed an AI-driven educational platform using OpenAI’s Assistant API to generate interactive quizzes, flashcards, and a chat with document feature.",
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
    title: "Travel Advisor",
    description:
      "Developed a travel companion app with geolocation and fetching details about restaurants, hotels, and attractions.",
    tags: ["React", "RapidAPI", "Google Maps API", "Travel Advisor API", "Open Weather Map API"],
    imageUrl: traveladvisorImg,
  },
  {
    title: "Attendance System App",
    description:
      "Created a Python-based attendance management app through facial recognition. Utilized Redis as the database backend and integrated Jupyter for data analysis.",
    tags: ["Python", "Pandas", "Matplotlib", "openCV", "Redis", "Jupyter"],
    imageUrl: attendancesystemImg,
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
  "Python",
  "Java",
  "C",
  "C++",
  "Git/GitHub",
] as const;
