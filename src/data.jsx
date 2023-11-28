import { nanoid } from "nanoid";
import {
  FaGithubSquare,
  FaLinkedin,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const websites = [
  {
    id: nanoid(),
    URL: "https://github.com/andrewchen19",
    icon: (
      <FaGithubSquare className="h-6 w-6 lg:h-8 lg:w-8 text-violet-600 hover:text-violet-500 duration-300" />
    ),
  },
  {
    id: nanoid(),
    URL: "https://www.linkedin.com/in/andrewchen1119",
    icon: (
      <FaLinkedin className="h-6 w-6 lg:h-8 lg:w-8 text-violet-600 hover:text-violet-500 duration-300" />
    ),
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-primary" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-primary" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-primary" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture",
  },
];
