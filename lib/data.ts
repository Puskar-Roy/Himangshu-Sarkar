import {
  SiJavascript,
  SiExpress,
  SiPython,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiGit,
} from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
// import { SiMetasploit } from "react-icons/si";
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
    title: "Nmap-Automator",
    description:
      "Nmap-Automator automate the process of enumeration & recon that is run every time, and instead focus our attention on real pentesting",
    link: "https://github.com/Himangshu30/Nmap-Auto.git",
  },
  {
    title: "BackDoor-Framework-for-Reverse-Shell",
    description:
      "Reverse Shell Backdoor is a framework to control infected machines with some cool interactions. It's capable of send files, run programs in the background, screenshot and shit.",
    link: "https://github.com/Himangshu30/BackDoor-Framework-for-Reverse-Shell.git",
  },
  {
    title: "Wifi-De-Authentication-Tool",
    description:
      "Wi-Fi Deauthentication Tool is a command-line utility designed for educational purposes, allowing you to perform various actions related to Wi-Fi networks. This tool is intended for legitimate penetration testing, security research purposes, and network devices that you own or have permission to test.",
    link: "https://github.com/Himangshu30/Wifi-De-Authentication-Tool.git",
  },
  {
    title: "KeyLogger",
    description:
      "A keylogger or keystroke logger/keyboard capturing is a form of malware or hardware that keeps track of and records your keystrokes as you type. It takes the information and sends it to a hacker using a command-and-control (C&C) server. The hacker then analyzes the keystrokes to locate usernames and passwords and uses them to hack into otherwise secure systems.",
    link: "https://github.com/Himangshu30/KeyLogger.git",
  },
  {
    title: "AutoRecon-XSS",
    description:
      "AutoRecon-XSS is a script designed for automated reconnaissance of XSS vulnerabilities. It crawls the target URL or alive domains, extracts potentially vulnerable URLs, and checks them for XSS vulnerabilities.",
    link: "https://github.com/Himangshu30/AutoRecon-XSS.git",
  },
  {
    title: "Image-Encryption ",
    description:
      "Image Encryption/Decryption application using Rubik's Cube Algorithm and RSA",
    link: "https://github.com/Himangshu30/Image-Encryption.git",
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
    company: "CyberSecurity Tech Lead",
    logo: "/cb.png",
    position: "Tech Lead In Cyber security",
    description:
      "Led a team to develop and implement advanced cybersecurity solutions, improving the organization's security posture and protecting sensitive data.",
    years: "Aug, 2022 - Present",
  },
  {
    company: "Vice President",
    logo: "/cb.png",
    position: "Vice President In The CodeBird",
    description:
      "Managed club operations, organized coding events, and mentored junior members to foster a collaborative learning environment.",
    years: "Aug 2023 - Present",
  },
];

export const aboutYou = {
  name: "Himangshu Sarkar",
  description: `👋 Hi, I’m @Himangshu30 \n
👀 I'm Security Researcher and Bug Hunter \n
🌱 I’m currently learning Cryptography ... \n
💞️ I’m looking to collaborate on some projects...`,
  yearsOfExperience: "Freshers",
  location: "South Dinajpur",
  email: "himangshusarkar622@gmail.com",
  phone: "+91 9083670582",
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
