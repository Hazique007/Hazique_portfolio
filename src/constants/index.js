import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  
  jobit,
  tripguide,
  threejs,
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
    title: "App Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Photoshop",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Adobe Illustrator",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "davinci",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Adobe XD",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UX Designer",
    company_name: "Ayojanam",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2022 - March 2022",
    points: [
      "Redesigned the UI of their Menu and different Packages.",
      "Considerably increased the quality of their content.",
      "Designed the UI of their website and app.",
      
      
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Khabo",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - April 2023",
    points: [
      "Redesigned their Menu Card.",
      "Designed attractive illustrations for their restaurant.",
      "Designed posters and posts for their Instagram.",
      
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Furniture Lifestyle",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Designed posters for them.",
      "Helped them in attracting customers with my visually appealing designs.",
      "Developing and maintaining the visual identity and branding guidelines for Furniture Lifestyle.",
      
    
    ],
  },
  {
    title: "Web Developer",
    company_name: "Vedsu",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Developing and maintaining front-end components of web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing responsive design principles to optimize user experience on different devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  
  {
    name: "Nebula",
    description:
      "A Chatbot app of Gemini AI.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
     
      
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/posts/hazique-khan-4038a41aa_nebula-chatbot-geminiintegration-activity-7158046680972484608-yrvN?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Game Controllers",
    description:
      "UI design of Game controllers website page  showcasing their limited edition products.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    
    ],
    image: jobit,
    source_code_link: "https://www.instagram.com/ai_ux_porium/",
  },
  {
    name: "Coffee Date App",
    description:
      "UI design of a Coffee Date App in which users match on the basis of their taste in coffee.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://www.instagram.com/ai_ux_porium/",
  },
];

export { services, technologies, experiences, testimonials, projects };
