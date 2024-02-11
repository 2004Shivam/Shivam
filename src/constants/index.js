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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  
 
 
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Varsha Nagar Mumbai Public School, Mumbai",
    company_name: "SSC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2014 - Mar 2019",
    points: [
      "Completed 10th Standard with a focus on science subjects.",
      "Cleared a scholarship exam, receiving appreciation for academic excellence.",
      "Had been part of CAL(Computer-Aided Learning): facilitating collaborative learning.",
      "KER (Kids Education Revolution): Engaged in initiatives promoting innovative learning methodologies and educational equity.",
    ],
  },
  {
    title: "Ratanbai Walbai Junior College of Science, Mumbai",
    company_name: "HSC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Feb 2022",
    points: [
      "Completed Higher Secondary Certificate (HSC) with a focus on Physics, Chemistry, and Mathematics.",
      "Opted for additional subjects including Electrical Maintenance, demonstrating practical skills in the field.",
    ],
  },
  {
    title: "Ramniranjan Jhunjhunwala College, Mumbai",
    company_name: "Graduation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Apr 2025",
    points: [
      "Currently enrolled in the Bachelor of Science program with a focus on Computer Science.",
      "Actively engaging in coursework related to computer science principles, programming languages, and software development.",
      "Actively learning various programming languages and technologies including C, Java, Python, HTML, CSS, and ASP.NET.",
    ],
  },
  {
    title: "NPTEL Online Courses",
    company_name: "Online",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Enrolled in online courses offered by NPTEL, conducted by IIT, including:",
      "Programming, Data Structures And Algorithms Using Python.",
      "Privacy and Security in Online Social Media.",
      "Applying knowledge gained from NPTEL courses to enhance understanding and skills in computer science.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shivam proved me wrong.",
    name: "Rohan Mehta",
    designation: "CFO",
    company: "Skyview Technologies Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shivam does.",
    name: "Priya Patel",
    designation: "COO",
    company: "Brightway Solutions Inc.",
    image: "https://randomuser.me/api/portraits/women/84.jpg",
  },
  {
    testimonial:
      "After Shivam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sanjay Sharma",
    designation: "CTO",
    company: "Quantum Innovations LLP",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Welcome to my 3D portfolio website! Dive into a collection of my latest projects showcasing skills in 3D modeling, animation, and design. Explore captivating visuals and discover the world of 3D artistry. Feel free to navigate through the virtual gallery and unleash your creativity!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.instagram.com/__the.confused.boy__/",
  },
  {
    name: "Electronics shop",
    description:
      "A static website showcasing cutting-edge electronics. Dive into a world of sleek smartphones, powerful laptops, and innovative smart home solutions. With detailed product descriptions and a user-friendly interface, this project offers a seamless browsing experience for tech enthusiasts and casual shoppers alike.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.instagram.com/__the.confused.boy__/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.instagram.com/__the.confused.boy__/",
  },
];

export { services, technologies, experiences, testimonials, projects };
