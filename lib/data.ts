import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Software Developer",
    location: "Upwork, Remote",
    description:
      "Delivered full-stack websites for clients in e-commerce, cryptocurrency, and education. Notable projects include an e-commerce website using Next.js and Supabase and a cryptocurrency platform with payment and referral systems using Next.js and Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - Present",
  },
  {
    title: "SDE Intern",
    location: "Bluestock Fintech, Remote",
    description:
      "Designed and developed an IPO Web Application frontend using HTML, CSS, Bootstrap, and JavaScript. Built the backend using Django, integrating APIs and managing database interactions.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - October 2024",
  },
  {
    title: "Machine Learning Intern",
    location: "SAG, DRDO, New Delhi, India",
    description:
      "Developed a supervised intrusion detection system for IoT networks using Python and labeled datasets. Trained the system to detect 15 types of cyberattacks with Random Forest Classifier and performed research on ML algorithms for cybersecurity in IoT.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - September 2023",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    location: "VIPS-TC, Guru Gobind Singh Indraprastha University, New Delhi",
    description:
      "Specializing in Artificial Intelligence and Machine Learning. Consistently maintaining a CGPA of 8.2 and participating in academic and extracurricular activities. Expected graduation in July 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - July 2025",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Flutter",
  "Java",
  "MySQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
] as const;
