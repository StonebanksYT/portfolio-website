import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import discordCloneImg from "@/public/discord-clone.jpg";
import quanteaseImg from "@/public/quantease.png";
import ecommerceStoreImg from "@/public/ecommerce-store.jpg";
import ecommerceAdminPanelImg from "@/public/ecommerce-admin.jpg";
import educationCounselingImg from "@/public/counselling.jpg";

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
    title: "Discord Clone",
    description:
      "A real-time chat application inspired by Discord, featuring voice and text channels, user authentication, and a responsive UI.",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    imageUrl: discordCloneImg, // Replace with the actual image variable or URL
  },
  {
    title: "QuantEase",
    description:
      "A Quantitative Finance Analysis Toolkit for analyzing and modeling financial data, including portfolio optimization, risk management, and statistical analysis of market trends.",
    tags: ["Python", "Flask", "Pandas", "NumPy", "NextJS"],
    imageUrl: quanteaseImg, // Replace with the actual image variable or URL
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully functional e-commerce platform allowing users to browse products, add items to the cart, and complete purchases with a secure payment gateway.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    imageUrl: ecommerceStoreImg, // Replace with the actual image variable or URL
  },
  {
    title: "E-Commerce Admin Panel",
    description:
      "A robust admin dashboard for managing products, orders, and users on the e-commerce platform, featuring analytics and detailed insights.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Chart.js"],
    imageUrl: ecommerceAdminPanelImg, // Replace with the actual image variable or URL
  },
  {
    title: "Education Counseling Website",
    description:
      "A responsive website for Rana Perfect Counseling, providing educational guidance and services for students.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    imageUrl: educationCounselingImg, // Replace with the actual image variable or URL
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
