import { tcs, thoughtflow, nascompany, hyno } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
	twitter,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  evently,
  bookingapp,
  figmaclone,
  financeapp,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
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
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
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
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Hyno",
    icon: hyno,
    iconBg: "#383E56",
    date: "Jul 2023 - Present",
    points: [
      "Developed several critical APIs for Forta Health, enhancing system functionality and user interaction",
      "Optimized overlapping database queries, resulting in improved system performance and efficiency",
      "Implemented various backend optimizations, contributing significantly to a more robust and streamlined backend infrastructure",
    ],
  },
  {
    title: "Software Engineer - Backend",
    company_name: "Nas Company",
    icon: nascompany,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2023",
    points: [
      "Built a customizable video-on-demand solution using AWS cloud formation template supporting adaptive streaming",
      "Integrated Paypal, BitPay, and Xendit as payment methods respectively in local & international markets and backend APIs including In-App Subscriptions for app and play store",
      "Refactored signup and enrolment APIs to improve latency by ~33% and 75% respectively to decrease drop-off rates while signup",
      "Increased the number of users from 2K users to 500K users over a span of 2 years by building multiple systems (reaction, comment, etc) and working on optimisations focussed on user growth",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Thoughtflow",
    icon: thoughtflow,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - May 2020",
    points: [
      "Maintained MongoDB database, automated backup and restore scripts to and from cluster",
      "Rendered responsive UI using Angular, Used Loopback (BaaS) for creating remote methods, integrated Stripe Payment Interface, JIRA API, and social login",
      "ThoughtFlow got featured in ProductHood as one of the best SaaS out there of its kind :)",
    ],
  },
  {
    title: "Assistant System Engineer - Trainee",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jul 2018 - Aug 2019",
    points: [
      "Built XML Comparator Tool in Core Java",
      "Built Kibana Log Querying App using MEAN stack SPA (Angular 2+)",
      "Worked on projects using Springboot and Maven",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/svashish305",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shubhashish-verma96",
  },
	{
    name: "X",
    iconUrl: twitter,
    link: "https://www.twitter.com/svashish305",
  },
];

export const projects = [
  {
    iconUrl: evently,
    theme: "btn-back-red",
    name: "Evently",
    description:
      "Full Stack Web App event management app allowing users to book and checkout events.",
    link: "https://github.com/svashish305/evently",
  },
  {
    iconUrl: bookingapp,
    theme: "btn-back-green",
    name: "Booking App",
    description:
      "Full Stack MERN app enabling users to book and checkout hotels.",
    link: "https://github.com/svashish305/mern-booking-app",
  },
  {
    iconUrl: figmaclone,
    theme: "btn-back-blue",
    name: "Figma Clone",
    description:
      "A minimalist figma clone using Fabric.js and Liveblocks for real-time collaboration.",
    link: "https://github.com/svashish305/liveblocks_figma_clone",
  },
  {
    iconUrl: financeapp,
    theme: "btn-back-pink",
    name: "Finance App",
    description: `Full Stack MERN app to show finance dashboard and allows user to predict next year's data`,
    link: "https://github.com/svashish305/finance-app",
  },
];
