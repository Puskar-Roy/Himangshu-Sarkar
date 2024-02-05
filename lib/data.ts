import {
  SiJavascript,
  SiExpress,
  SiPython,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiGit,
} from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { VscTerminalBash } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

export const skills = [
  {
    icon: VscTerminalBash,
    text: "Bash Script",
  },
  {
    icon: MdOutlineSecurity,
    text: "Web Security",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: FaJava,
    text: "JAVA",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Give a short description about project 1",
    link: "https://github.com/",
  },
  {
    title: "Project 2",
    description: "Give a short description about project 2",
    link: "https://github.com/",
  },
  {
    title: "Project 3",
    description: "Give a short description about project 3",
    link: "https://github.com/",
  },
  {
    title: "Project 4",
    description: "Give a short description about project 4",
    link: "https://github.com/",
  },
  {
    title: "Project 5",
    description: "Give a short description about project 5",
    link: "https://github.com/",
  },
  {
    title: "Project 6",
    description: "Give a short description about project 6",
    link: "https://github.com/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Company 3",
    logo: "/company-logo.png",
    position: "Company 3 Position",
    description: "Write briefly on your experience working at Company 3.",
    years: "Apr, 2022 - Aug, 2023",
  },
  {
    company: "Company 2",
    logo: "/company-logo.png",
    position: "Company 2 Position",
    description: "Write briefly on your experience working at Company 2.",
    years: "Jan, 2020 - Mar, 2022",
  },
  {
    company: "Company 1",
    logo: "/company-logo.png",
    position: "Company 1 Position",
    description: "Write briefly on your experience working at Company 1.",
    years: "Aug, 2018 - Sep, 2018",
  },
  {
    company: "Uni Name",
    logo: "/company-logo.png",
    position: "Student",
    description:
      "Write briefly about your university experience (degree, subject, etc.)",
    years: "Aug, 2015 - Jun, 2019",
  },
];

export const aboutYou = {
  name: "Himangshu Sarkar",
  description: `👋 Hi, I’m @Himangshu30 \n
👀 I'm Security Researcher and Bug Hunter \n
🌱 I’m currently learning Cryptography ... \n
💞️ I’m looking to collaborate on some projects...`,
  yearsOfExperience: "2 years",
  location: "South Dinajpur",
  email: "email@example.com",
  phone:"+91 9585653252"
};

export const logoText = "@Himangshu30";

export const marketingHeadlines = {
  mainHeadline: "I'm Security Researcher and Bug Hunter 🌱",
  subHeadline: "Bottom. Sub. Headline.",
};

export const websiteMetadata = {
  title: "Himangshu | Security Researcher",
  description: "I'm Security Researcher and Bug Hunter 🌱",
};
