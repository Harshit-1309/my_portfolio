import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
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
  harshit2,
  harshit3,
  harshit4,
  ritt,
  axhat,
  rahul,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "PHP Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
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
];

const experiences = [
  {
    title: "Job Role 1",
    company_name: "Company 1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "MM YYYY to MM YYYY",
    points: [
      "Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince. Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince..",
      "Details about your job role, what you have done there, your experince.",
    ],
  },
  {
    title: "Job Role 2",
    company_name: "Company 2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "MM YYYY to MM YYYY",
    points: [
      "Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince. Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince..",
      "Details about your job role, what you have done there, your experince.",
    ],
  },
  {
    title: "Job Role 3",
    company_name: "Company 3",
    icon: shopify,
    iconBg: "#383E56",
    date: "MM YYYY to MM YYYY",
    points: [
      "Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince. Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince..",
      "Details about your job role, what you have done there, your experince.",
    ],
  },
  {
    title: "Job Role 4",
    company_name: "Company 4",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "MM YYYY to MM YYYY",
    points: [
      "Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince. Details about your job role, what you have done there, your experince.",
      "Details about your job role, what you have done there, your experince..",
      "Details about your job role, what you have done there, your experince.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was next to impossible to make a website as beautiful as this, but Harshit proved me wrong. Great Work!",
    name: "Ritesh Raj Singh",
    designation: "Sr. Software Er",
    company: "HCL Tech",
    image: ritt,
  },
  {
    testimonial:
      "I've seen Harshit working very hard and his eager to dive deeper into technologies makes him a great future asset.",
    name: "Akshat Bhashkar",
    designation: "Software Engineer",
    company: "ShareChat",
    image: axhat,
  },
  {
    testimonial:
      " Harshit is a true rockstar when it comes to building web apps. He volunteer to pick new things and explore on its own.",
    name: "Rahul Kumar",
    designation: "Process Engineer",
    company: "Samsung",
    image: rahul,
  },
];

const projects = [
  {
    name: "Contact Management System",
    description:
      "A web-based contact management system that allows users to register, login, and perform CRUD operations on their contacts.",
    tags: [
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
      "https://github.com/Harshit-1309/Contact-Management-System/tree/6084aa59a52da6d2d2eecbfca66d2e97eee74a3a",
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
    source_code_link: "https://github.com/Harshit-1309/EasyDo.git",
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
    source_code_link: "https://github.com/",
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
  // {
  //   title: "",
  //   icon: harshit2
  // },
  // {
  //   title: "",
  //   icon: harshit3
  // },
  // {
  //   title: "",
  //   icon: harshit4
  // },
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
