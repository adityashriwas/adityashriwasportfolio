import { Education, starbucks, tesla } from "../assets/images";
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
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    lms,
    favicon,
    book,
    technologist,
    leetcode
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "CodSoft",
        icon: technologist,
        iconBg: "#accbe1",
        date: "March 2024 - April 2024",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            "My internship at CodSoft , That was a 4 week internship in the web development domain. That was a great experience because during the internship I upskilled myself by creating projects and gain more knowledge about the development. Along with Frontend I also explored backend technologies like Node JS, Express JS and Mongodb."
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Tesla",
        icon: technologist,
        iconBg: "#fbc3bc",
        date: "Feb 2024 - March 2024",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            "Internship at TechnoHacks EduTech , That was a 1 month internship in the web development domain where most of the projects, I worked on, was related to Frontend development and I also explored some Javascript animation libraries like GSAP, scrollTrigger and Locomotive JS."
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const education = [
    {
        title: " Bachelors of Technology, Computer Science and Engineering",
        company_name: "RGPV University",
        icon: lms,
        date: "2022 - 2026",
        iconBg: "#accbe1",
        points:[
            "Currently I am pursuing my graduation from Malwa Institute of Technology Affiliated by Rajiv Gandhi Proudyogiki Vishwavidyalaya."
        ]
    },
    {
        title: "XII Board - M.P. Board",
        icon: book,
        company_name: "Vivekanand E. C. H. S. School",
        date: "2021 - 2022",
        iconBg: "#fbc3bc",
        points:[
            "I completed my XII Board Examination from M.P. Board from Vivekanand E. C. H. S. School with 86.6% Percentage."
        ]
    },
    {
        title: "X Board - M.P. Board",
        company_name: "Vivekanand E. C. H. S. School",
        icon: Education,
        date: "2019 - 2020",
        iconBg: "#b7e4c7",
        points:[
            "I completed my X Board Examination from M.P. Board from Vivekanand E. C. H. S. School with 92.5% Percentage."
        ]
    },
]

export const socialLinks = [
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/adityashriwas18/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/adityashriwas',
    },
    {
        name: 'Leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/adityashriwas/',
    },  
    
];

export const projects = [
    {
        iconUrl: favicon,
        theme: 'btn-back-red',
        name: 'TaleCrafter AI',
        description: 'TaleCrafter AI is a full-stack Next.js application that enables users to generate AI-driven stories based on their selected criteria.',
        link: 'https://www.talecrafter.tech/',
    },
    {
        iconUrl: lms,
        theme: 'btn-back-green',
        name: 'Learning Managment System',
        description: 'Learning Management System (LMS) built using the MERN stack (MongoDB, Express, React, Node.js).',
        link: 'https://e-learning-u1pi.onrender.com/',
    },
    {
        iconUrl: github,
        theme: 'btn-back-blue',
        name: 'GitHub Profile Tracker',
        description: 'GitHub Profile Tracker is designed to help you locate any GitHub user by their user ID and get insights about the profile.',
        link: 'https://githubprofiletracker.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Animated Web',
        description: 'Animated website using SheryJS.',
        link: 'https://modern-animated-website-eta.vercel.app/',
    },
        {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Cynthia Ugwu',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://cynthiaugwu.wuaze.com/',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Two Good Co',
    //     description: 'Two Good Co website UI Clone with animations.',
    //     link: 'https://aadityashriwas.vercel.app/Project1/index.html',
    // },
];