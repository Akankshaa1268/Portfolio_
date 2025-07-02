import { meta,  shopify, starbucks, tesla, igdtuw_logo, iitdlogo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    python,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    canva,
    C,
    vscode,
    figma,
    android,
    
    
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Other",
    },
    
    {
        imageUrl: vscode,
        name: "VS code",
        type: "Other",
    },
    
    {
        imageUrl: android,
        name: "Android Studio",
        type: "Other",
    },
  
    
    {
        imageUrl: canva,
        name: "Canva",
        type: "Other",
    },
    
    {
        imageUrl: C,
        name: "C++",
        type: "Other",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
  
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: " Summer Intern",
        company_name: " Indira Gandhi Delhi Technical University for Women",
        icon: igdtuw_logo,
         iconBg: "#a2d2ff",
        date: "June 2025 - Present",
        points: [
        "Part of an 8-week internship organized by the Department of AI & DS, covering coursework in HTML/CSS, JavaScript, React.js with TypeScript, Node.js, Express.js, and MongoDB",
        "Undergoing training in MERN stack development with AI integrations using HuggingFace and OpenAI APIs, focused onbuilding scalable, intelligent web applications.",
           
        ],
    },
    {
        title: " STEM Mentorship Mentee",
        company_name: " Indian Institute of Technology, Delhi",
        icon: iitdlogo,
        iconBg: "#b7e4c7",
        date: "Feb 2023 - Nov 2023",
        points: [
            "Selected as 1 of 32 mentees for a year-long STEM program; explored emerging technologies like cryptography, network security, and drone tech via hands-on workshops and lectures.",
            "Engaged with IIT Delhi faculty and research scholars through lab visits and interactive sessions to gain exposure to real-world STEM research and applications.",
           
        ],
    },
  
  
];

export const socialLinks = [
  
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akankshapal1268',
    },
     
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Akankshaa1268',
    },
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    
    
   

];

export const projects = [
    {
        iconURL: snapgram,
        theme: 'btn-back-red',
        name: ' Mirror - Web app',
        description: ' AI-powered web app to scan files (PDF, CSV, DOCX, etc.) for threats, anomalies, and risks; delivers explainable results and interactive visual reports for non-technical users.',
        link: 'https://github.com/singh-bhawana/Mirror-',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'Tuo - Educational App',
        description: ' Mobile learning app that embeds YouTube content in a distraction-free interface with sequenced lessons, quizzes, progress tracking, and personalized content recommendations.',
        link: 'https://drive.google.com/file/d/1Z8leUwX58SJxYmOfXli34Hk4lN46ngk_/view?usp=sharing',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: ' Cardigan ',
        description: ' UI/UX prototype for a social platform connecting users with NGOs through secure blockchain-backed volunteering, donation tracking, credit-score incentives, and community-driven features.',
        link: 'https://github.com/Akankshaa1268/Cardigan.git',
    },
   
  
];
 export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    title: "Resume",
    external: true,
    href: "/resume.pdf",
  },
];
