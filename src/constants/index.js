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
  tcs,
  thoughtflow,
  nascompany,
  codex,
  dalle2,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Infrastructure Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
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
    name: "Redux Toolkit",
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

const testimonials = [
  {
    testimonial: `I had the pleasure of working with SV, an exceptional backend software developer. SV consistently demonstrated deep technical expertise and always prioritized scalability and performance to deliver high-quality work. Beyond that, SV was a smart, empathetic, and dedicated team player who always went above and beyond to help others. It was a pleasure collaborating with him and working on multiple significant features such as post reactions and commenting features, a content management portal, and several performance improvements. Overall, SV is a great candidate if you are looking for a talented and reliable developer.`,
    name: "Jasbindar Singh",
    designation: "Frontend Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEUntxQy1dBZg/profile-displayphoto-shrink_100_100/0/1613975550586?e=1684368000&v=beta&t=Opt2s0Nn6N9ABGCGHZ6hzMi2VsXMbSvZitcjkj7XPAk",
  },
  {
    testimonial: `Your technical expertise in designing and building complex software systems has been instrumental in delivering high-quality products to our customers. You consistently demonstrated a deep understanding of software development principles, and your attention to detail was impressive.`,
    name: "Aman Minhas",
    designation: "Engineering Manager",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFTW-6_JDZmVw/profile-displayphoto-shrink_100_100/0/1601474470599?e=1683763200&v=beta&t=8dV4WC30DqYJRr-r99ZluoZUxSZqqiX8HSjCp_2x9YA",
  },
  {
    testimonial:
      "He is hands down one of the most dedicated people I have met in my life. No matter what the task was, he would jump at every opportunity or requirement and stop at nothing to deliver a high quality solution in the required time. He is also very quick to pickup any new concepts or skills as required.",
    name: "Neil Beukes",
    designation: "Senior Software Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4D03AQGeLotx9inbpQ/profile-displayphoto-shrink_100_100/0/1573713346341?e=1683763200&v=beta&t=ct0_2aojuuWT0wK9KBA_A5AChBBKqEfm0t3NPvn5TKY",
  },
  {
    testimonial:
      "He is a great back end engineer with a product oriented mindset. Often I found him giving valuable feedback on the product during development that helped us catch something that we missed on the product. He documents and communicates his work in an easy to understand manner.",
    name: "Aditya Purwa",
    designation: "Former Senior Frontend Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHdFCyIuBhulA/profile-displayphoto-shrink_100_100/0/1612976386007?e=1683763200&v=beta&t=plaZ6FN-hrnMsdq27bk2lgFWAKK_AmIJVgxgm4fMVxw",
  },
  {
    testimonial: `He was extremely hands-on on multiple projects, setting up everything from scratch with in-depth know-how of the underlying design and decisions at work. But what stood out most with Shubh was his work ethic, commitment and dependability. Be it the smallest question or handling critical downtimes, he was always available to contribute and solve.`,
    name: "Akshata Mohanty",
    designation: "Former Data Team Lead",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C5603AQHJW_0QvterpA/profile-displayphoto-shrink_100_100/0/1657658749843?e=1683763200&v=beta&t=YXkw-7nuH32NPlJTQHFSHWPjGpswVhOKjGaZaRDwFqU",
  },
  {
    testimonial:
      "Shubhashish consistently demonstrated a strong work ethic and the ability to effectively communicate and collaborate with cross-functional teams. He consistently delivered high-quality code and on time. I highly recommend Shubhashish for any future software engineering opportunities and I am confident he will make a valuable contribution to any organization.",
    name: "Aleksandar Bulović",
    designation: "Founder & CEO",
    company: "Cluster 11",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFKs9205_jN4g/profile-displayphoto-shrink_100_100/0/1674325585158?e=1683763200&v=beta&t=nWpqFdPsn5OZ8TTIG6CHkLkLQKXIfDbS0c9nPZxo0dA",
  },
  {
    testimonial:
      "Shubhashish is a quick learner and an expert with Javascript technologies like Angular, React and Nodejs. He would be a great asset to any development team.",
    name: "Kranthi Kiran",
    designation: "Founder & CEO",
    company: "Thoughtflow",
    image:
      "https://media.licdn.com/dms/image/C5603AQH3P8SrWhIaXw/profile-displayphoto-shrink_100_100/0/1588664235194?e=1683763200&v=beta&t=9Fp58pyV-WQESOkl_9Kt6qvpvdZUSdwtIWjCCPULjb0",
  },
];

const projects = [
  {
    name: "Codex: A ChatGPT Clone",
    description:
      "Full Stack Web App chatbot platform that allows users to ask questions, providing a suitable answer using OpenAI's GPT-3 API.",
    tags: [
      {
        name: "vanilla-js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: codex,
    source_code_link: "https://github.com/svashish305/codex",
  },
  {
    name: "DALL-E 2.0",
    description:
      "Full Stack MERN app enabling users to generate prompt based AI images and share them using OpenAI's GPT-3 API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: dalle2,
    source_code_link: "https://github.com/svashish305/dall-e",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
