import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.jpeg";
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
    title: " Code-Academy bootcamp ",
    location: "Lagos Nigeria-(online) ",
    description:
      "intensive study on JavaScript,css and HTML. ",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Complete NextJs course",
    location: "Online",
    description:
      "the Author: Lama. a detailed and well structured nextjs course.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "JavaScript mastery",
    location: "Online",
    description:
      "An extensive an intensive course on Javascript",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "First Portfolio",
    description:
      "",
    tags: ["React", "Next.js" ,"Tailwind", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Car Search",
    description:
      "A car search Hub. This project was built with NextJs, which enables client to search for a variety of cars.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Rapid-Api"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Second Portfolio",
    description:
      "this portfolio is designed with a glass floating navbar displaying the active sections",
    tags: ["React", "Next.js", "Tailwind",],
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
 
  "MongoDB",
  "Redux",
 
  "Express",
  "PostgreSQL",
 

  "Framer Motion",
] as const;