// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import redislogo from './assets/tech_logo/redislogo.png';
import IntelliJ from './assets/tech_logo/intellije.png';
import Eclipse from './assets/tech_logo/eclipse.png';

// Achivements Section Logo's
import prize from './assets/achivement/prize_first.png';
import coursera from './assets/achivement/coursera.png';
import linkedIn from './assets/achivement/linkedIn.png';
import ibm from './assets/achivement/ibm.png';

// Education Section Logo's
import jainLogo from './assets/education_logo/jain.png';
import gic from './assets/education_logo/gic.png';
import stPeters from './assets/education_logo/stPeters.png';

// Project Section Logo's
import contactManager from './assets/work_logo/contactManager.jpg';
import foodOrderLogo from './assets/work_logo/foodorder.jpg';
import weatherLogo from './assets/work_logo/weather.jpeg'
import qrGeneratorLogo from './assets/work_logo/qrGenerator.png'
import portfolioLogo from './assets/work_logo/portfolio.jpeg'
import reactiveLogo from './assets/work_logo/reactive.jpg'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'NodeJS', logo: nodejsLogo },
      { name: 'ExpressJS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redislogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [

      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'IntelliJ', logo: IntelliJ },
      { name: 'Eclipse ', logo: Eclipse },
    ],
  },
];

export const achievements = [
  {
    id: 0,
    img: prize,
    role: "🏆 1st Prize - Make-a-thon Hackathon",
    company: "Jain University",
    desc: "Won 1st Prize in the Make-a-thon Hackathon at Jain University for developing a Bluetooth-based attendance software using BCom-Device, demonstrating innovation and teamwork skills. ",
    skills: ["Spring Boot", "Java", "MySQL", "Bluetooth Integration"],
  },
  {
    id: 1,
    img: coursera,
    role: "Coursera Certifications",
    company: "Coursera",

    desc: "Completed multiple specialized courses on Coursera, including 'Java Programming and Software Engineering Fundamentals' by Duke University, 'Python for Everybody' by the University of Michigan, and 'Web Applications for Everybody' by the University of Michigan, enhancing my programming and web development skills.",
    skills: [
      "Spring MVC",
      "Spring Boot and Rest Controllers",
      "Spring Data Repositories",
      "Linux Fundamentals",
      "Java",
      "Python",
      "C"
    ],
    link: "https://drive.google.com/drive/folders/1-npJuRbTtykDozCvSM1Apv92Cl3cvken"
  },
  {
    id: 2,
    img: linkedIn,
    role: "LinkedIn Certifications",
    company: "linkedIn",
    desc: " Completed LinkedIn certifications including 'Cloud Computing Foundations' and 'AWS Certified Cloud Practitioner (CLF-C01)', gaining foundational knowledge in cloud computing and AWS services.",
    skills: [
      "Understanding Cloud Fundamentals",
      "AWS Certified Cloud Practitioner (CLF-C01)"
    ],
    link: "https://drive.google.com/drive/folders/1Zu4EgjB54HMhxbTZ_h_lz1jXOt2XYeLK"
  },
  {
    id: 3,
    img: ibm,
    role: "IBM SkillsBuild Certifications",
    company: "IBM",
    desc: "Completed IBM SkillsBuild certifications including 'AI Fundamentals', 'Computer Networking Basics', and 'Machine Learning', acquiring essential skills in artificial intelligence, networking, and machine learning concepts.",
    skills: [
      "AI Fundamentals",
      "Computer Networking Basics",
      "Machine Learning"
    ],
    link: "https://drive.google.com/drive/folders/1WK2g6CaPHWe9x4WEghJW2T5FDFvAFnKN"
  },
];

export const education = [

  {
    id: 1,
    img: jainLogo,
    school: "Jain Deemed-to-be University, Bangalore",
    date: "Aug 2022 - Jun 2026",
    grade: "8.53 CGPA (Till 6th Sem)",
    desc: "I completed my BTech degree in Computer Science and Engineering from Jain College, Banglore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Jain College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology(BTech) - Computer Science and Engineering",
  },
  {
    id: 2,
    img: gic,
    school: "Government Inter College, Prayagraj",
    date: "Apr 2020 - March 2022",
    grade: "70%",
    desc: "I completed my class 12 education from Government Inter College, Prayagraj, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Hindi.",
    degree: "(UP Board) PCM with Hindi",
  },
  {
    id: 3,
    img: stPeters,
    school: "St. Peters School, Govindpur(Prayagraj)",
    date: "Apr 2018 - March 2020",
    grade: "74.8%",
    desc: "I completed my class 10 education from St. Peters School, Govindpur(Prayagraj), under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Smart Contact Manager",
    description:
      "ADeveloped a full-stack contact management system with secure authentication and role-based authorization. Integrated OAuth2 login with Google and GitHub for seamless third-party authentication. Designed and implemented a MySQL database schema to persist and manage contact records.",
    image: contactManager,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Springboot", "MySQL", "OAuth2", "Google Login", "GitHub Login"],
    github: "https://github.com/ShubhamPatel81/Contact_Manager",
    webapp: "https://github.com/ShubhamPatel81/Contact_Manager",
  },
  {
    id: 1,
    title: "Food Ordering Web Application",
    description:
      " Built a full-stack food ordering platform with a React.js frontend and Spring Boot backend.  Implemented secure JWT authentication and role-based access control (User, Admin, Vendor). Integrated Razorpay for online payments with backend signature verification. Used MongoDB to store user, order, and restaurant data in a scalable NoSQL format. Enabled image uploads for food items using AWS S3 and served them via public URLs. Developed separate dashboards for users and admins with protected routes.",
    image: foodOrderLogo,
    tags: ["React JS", "SpringBoot", "MongoDB", "JWT", "Spring Security", "Razorpay", "AWS S3"],
    github: "https://github.com/ShubhamPatel81/Food-Ordering-Web-With-AWS",
    webapp: "https://github.com/ShubhamPatel81/Food-Ordering-Web-With-AWS",
  },
  {
    id: 2,
    title: "Basic Weather App",
    description:
      "A basic weather app built with Spring Boot that allows users to check real-time weather updates by fetching data from an external weather API, providing a simple and interactive interface. ",
    image: weatherLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Springboot", "MySQL"],
    github: "https://github.com/ShubhamPatel81/Basic_Weather_App_SpringBoot",
    webapp: "https://github.com/ShubhamPatel81/Basic_Weather_App_SpringBoot",
  },
  {
    id: 3,
    title: "QR Generator",
    description:
      "A QR code generator app built with Spring Boot, allowing users to input their details and generate a personalized QR code for easy sharing and access. ",
    image: qrGeneratorLogo,
    tags: ["SpringBoot", "HTML", "CSS"],
    github: "https://github.com/ShubhamPatel81/QR_Generator_SpringBoot",
    webapp: "https://github.com/ShubhamPatel81/QR_Generator_SpringBoot",
  },
  {
    id: 4,
    title: "Reactive-Programming-with-Spring-Boot",
    description:
      "A basic reactive API built with Spring Boot for non-blocking, asynchronous data handling. Utilizes Project Reactor to manage data streams and backpressure, enabling efficient resource usage and improved performance for high-concurrency applications.",
    image: reactiveLogo,
    tags: ["SpringBoot", "Redis", , "Web-Flux", "HTML", "CSS"],
    github: "https://github.com/ShubhamPatel81/Reactive-Programming-with-Spring-Boot",
    webapp: "https://github.com/ShubhamPatel81/Reactive-Programming-with-Spring-Boot",
  },
  {
    id: 5,
    title: "Portfolio Web",
    description:
      "A portfolio website built with Express.js, highlighting projects, skills, and achievements in a clean and responsive design. ",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS"],
    github: "https://github.com/ShubhamPatel81/Portfolio-Web",
    webapp: "https://github.com/ShubhamPatel81/Portfolio-Web",
  },


];  