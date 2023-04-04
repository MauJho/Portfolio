import { 
  csharp,
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
  TRI,
  MMM,
  StarTek,
  HP,
  WebApi,
  mobileBike,
  portfolio,
  threejs,
  asp,
  sqlserver,

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
    title: "C-Sharp Developer",
    icon: csharp,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "C-Sharp",
    icon: csharp,
  },
  {
    name: "ASP.NET",
    icon: asp,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "SQLServer",
    icon: sqlserver,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  

];

const experiences = [
  {
    title: "Solution Specialists",
    company_name: "3M",
    icon: MMM,
    iconBg: "#383E56",
    date: "July 2018 - Current",
    points: [
      "Developing and maintaining Automations, Reports and Applications using Visual Basic, Power Automate, Power Apps and Power BI and other related technologies.",
      "Collaborating with cross-functional teams and other developers to create high-quality products.",
      "OTC Data Readiness:",
      " Evaluating the Customers Order Readiness throughout the readiness and deployment process. Identify data maping",
      "and transformation logic impacting COR. Building and Analyzing COR Readiness dasboard and facilitating resolution of identified errors.",
      "Point Of Sales:",
      "Search Materials in SAP and the 3M official pages, such as: Product Center, Catalog, GGSM, History and Power BI reports.",
      "Participate in the transition of legacy system to SAP. Be part of the POS SAP training and floor support. Build Power BI and Macros." 
      
    ],
  },
  {
    title: "Accounts Recivable Representative",
    company_name: "Thomson Reuters",
    icon: TRI,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "Outbound and Incoming calls to collect past due invoices from a specific portfolio assinged individually but getting goals as a team, helping eachother  when the assignment must be handled carefully due to the complex of each task.",
      "Replying emails to customers regarding to receipts, payments or extra charges.",
    ],
  },
  {
    title: "Onsite Coordination",
    company_name: "HP",
    icon: HP,
    iconBg: "#383E56",
    date: "2014 - 2017",
    points: [
      "Support engineers in requesting reschedules, revisits or cases reassignments.",
      "Be part of trasaction to legacy system OPT to SalesForce and assist the team to surf properly in the new system.",
    ],
  },
  {
    title: "Technical Support Agent",
    company_name: "StartTek",
    icon: StarTek,
    iconBg: "#E6DEDD",
    date: "2013 - 2014",
    points: [
      "Providing Technical Support and Customer Service to the services of Cable, Internet and IP phone.",
      
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
];

const projects = [
  {
    name: "Web API",
    description:
      "This is a simple CRUD application that use Swagger UI, JWT authentication and HTTP Methods. ",
    tags: [
      {
        name: "C-Sharp",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "pink-text-gradient",
      },
    ],
    image: WebApi,
    source_code_link: "https://github.com/MauJho/ApiWeb",
  },
  {
    name: "Mobile Bike Reparis",
    description:
      "using HTML and CSS technologies I created a Web page for a Bike repairs. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: mobileBike,
    source_code_link: "https://github.com/MauJho/Mobile-Bike-Repair",
  },
  {
    name: "Portfolio",
    description:
      "A Web-based portfolio to show some what I have learned lately",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/MauJho/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
