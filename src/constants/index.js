import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  pm2,
  n8n,
  oracle,
  openAI,
  claude,
  GitAct,
  redux,
  tailwind,
  nodejs,
  mongodb,
  typescript,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  easydo,
  carrent,
  nspb,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  php,
  mysql,
  facebook,
  instagram,
  twitter,
  linkedin,
  harshit,
  harshit1,
  harshit3,
  ritt,
  axhat,
  rahul,
  groovy,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI Automation Engineer",
    icon: mobile,
  },
  {
    title: "Oracle EPM / NSPB Consultant",
    icon: backend,
  },
  {
    title: "LLM Integration Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Groovy",
    icon: groovy,
  },
  {
    name: "PM2",
    icon: pm2,
  },
  {
    name: "N8N",
    icon: n8n,
  },
  {
    name: "Open AI",
    icon: openAI,
  },
  {
    name: "Claude",
    icon: claude,
  },
  {
    name: "GitHub Actions",
    icon: GitAct,
  },
  {
    name: "Oracle EPM",
    icon: oracle,
  },
];


const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Brainoviq Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov, 2022 to Nov, 2023",
    points: ["Developed scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built responsive user interfaces and integrated RESTful APIs for seamless frontend-backend communication.",
      "Optimized backend logic and database operations to improve application performance and reliability.",
      "Collaborated with the development team on feature implementation, debugging, and deployment workflows."],
  },
  {
    title: "Associate Consultant",
    company_name: "Gooner Technologies Pvt Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb, 2025 to Present",
    points: [
      "Worked on Oracle Hyperion Planning, Essbase, NetSuite, and NSPB solutions for enterprise planning and reporting.",
      "Developed and optimized calc scripts, Groovy rules, and automation workflows for financial processes.",
      "Built Python scripts and API integrations to streamline data handling and operational efficiency.",
      "Collaborated with cross-functional teams on budgeting, forecasting, and reporting solutions.",
    ],
  },
  // {
  //   title: "Job Role 3",
  //   company_name: "Company 3",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "MM YYYY to MM YYYY",
  //   points: [
  //     "Details about your job role, what you have done there, your experince.",
  //     "Details about your job role, what you have done there, your experince. Details about your job role, what you have done there, your experince.",
  //     "Details about your job role, what you have done there, your experince..",
  //     "Details about your job role, what you have done there, your experince.",
  //   ],
  // },
  // {
  //   title: "Job Role 4",
  //   company_name: "Company 4",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "MM YYYY to MM YYYY",
  //   points: [
  //     "Details about your job role, what you have done there, your experince.",
  //     "Details about your job role, what you have done there, your experince. Details about your job role, what you have done there, your experince.",
  //     "Details about your job role, what you have done there, your experince..",
  //     "Details about your job role, what you have done there, your experince.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was next to impossible to make a website as beautiful as this, but Harshit proved me wrong. Great Work!",
    name: "Ritesh Raj Singh",
    designation: "Data Engineer",
    company: "Visa",
    image: ritt,
  },
  {
    testimonial:
      "I've seen Harshit working very hard and his eager to dive deeper into technologies makes him a great future asset.",
    name: "Akshat Bhashkar",
    designation: "Software Engineer",
    company: "Observe.AI",
    image: axhat,
  },
  {
    testimonial:
      " Harshit is a true rockstar when it comes to building web apps. He volunteer to pick new things and explore on its own.",
    name: "Rahul Kumar",
    designation: "Lead Engineer",
    company: "Samsung",
    image: rahul,
  },
];

const projects = [
  {
    name: "NSPB Agent",
    description:
      "An AI-powered FP&A assistant that converts natural language queries into multi-dimensional Oracle NSPB insights, enabling real-time financial analysis and reporting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "mcpserver",
        color: "pink-text-gradient",
      },
    ],
    image: nspb,
    source_code_link:
      "https://github.com/Harshit-1309/NSPB_Agent.git",
  },
  {
    name: "Trackly",
    description:
      "A web-based time tracking application that allows users to login, manage tasks and perform CRUD operations on day-to-day tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/Harshit-1309/trackly.git",
  },
  {
    name: "Easy Do",
    description:
      "Built a To-Do list application for Android and iOS using React Native. The app should allow users to register and log in with their registered credentials.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: easydo,
    source_code_link: "https://github.com/Harshit-1309/Easy-Do.git",
  },
  {
    name: "Online Food Delivery",
    description:
      "A user-friendly platform connecting restaurants and customers, allowing users to browse a wide variety of cuisines, place orders, and have delicious meals delivered.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Harshit-1309/FoodCall.git",
  },
];

const socialmediasites = [
  {
    title: "LinkedIn",
    icon: linkedin,
  },
  {
    title: "Instagram",
    icon: instagram,
  },
  {
    title: "Facebook",
    icon: facebook,
  },
  {
    title: "Twitter",
    icon: twitter,
  },
];
const harshitPic = [
  {
    title: "",
    icon: harshit,
  },
  {
    title: "",
    icon: harshit1,
  },
  {
    title: "",
    icon: harshit3,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialmediasites,
  harshitPic,
};
