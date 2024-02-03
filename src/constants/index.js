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
  hyno,
  evently,
  bookingapp,
  financeapp,
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

const testimonials = [
  {
    testimonial: `I had the pleasure of working closely with Shubhashish and always been impressed by his exceptional responsiveness. He is proactive and efficient individual who consistently goes above and beyond to ensure timely solutions are provided. As a QA Engineer I was always happy with the quality of work he delivered. Shubhashish will be a great asset to any team that he joins, keep up the good work and all the best in your future endeavours.`,
    name: "Tarun Vadamodula",
    designation: "QA Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/D5635AQHOhPqWSa7keA/profile-framedphoto-shrink_100_100/0/1681466512525?e=1707580800&v=beta&t=xSaVjt4YYIWBiQkGzZqjuCDgar2cPdOVm0t6bkZzAb8",
  },
  {
    testimonial: `Shubhashish has exhibited excellent value and speed during our work together in the company, especially during our time in Launch Operations. He is very detail-oriented, and kind enough to help us understand what triggers the error and what makes it go away. He's a great asset to any company, and I'm lucky to not only have worked with him but also to have learned from him.`,
    name: "Alexa Dimayuga",
    designation: "Operations Team Lead",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/D5603AQGxIBJfEn7F-A/profile-displayphoto-shrink_100_100/0/1695014839625?e=1712188800&v=beta&t=rvC2SVYtFBkz1l6eplCwCVM7J93cX8NDNfHmrMLwVeU",
  },
  {
    testimonial: `I had the pleasure of working with SV, an exceptional backend software developer. SV consistently demonstrated deep technical expertise and always prioritized scalability and performance to deliver high-quality work. Beyond that, SV was a smart, empathetic, and dedicated team player who always went above and beyond to help others. It was a pleasure collaborating with him and working on multiple significant features such as post reactions and commenting features, a content management portal, and several performance improvements. Overall, SV is a great candidate if you are looking for a talented and reliable developer.`,
    name: "Jasbindar Singh",
    designation: "Frontend Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEUntxQy1dBZg/profile-displayphoto-shrink_100_100/0/1613975551123?e=1712188800&v=beta&t=A00vky9krpei7buIfh1cXHzb1JZPdkBcXedZ9aFZjaQ",
  },
  {
    testimonial: `Your technical expertise in designing and building complex software systems has been instrumental in delivering high-quality products to our customers. You consistently demonstrated a deep understanding of software development principles, and your attention to detail was impressive.`,
    name: "Aman Minhas",
    designation: "Engineering Manager",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFTW-6_JDZmVw/profile-displayphoto-shrink_100_100/0/1601474472210?e=1712188800&v=beta&t=nqtcV8Dad9SuaLUgMFPppH7OAWTNB2Kl33nAPRV7j4Q",
  },
  {
    testimonial:
      "He is hands down one of the most dedicated people I have met in my life. No matter what the task was, he would jump at every opportunity or requirement and stop at nothing to deliver a high quality solution in the required time. He is also very quick to pickup any new concepts or skills as required.",
    name: "Neil Beukes",
    designation: "Senior Software Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4D03AQGeLotx9inbpQ/profile-displayphoto-shrink_100_100/0/1573713350974?e=1712188800&v=beta&t=xzF0TDVTEc0fmRjEWEcEMTQdqxlGWeGHLZ4nF3XYCDI",
  },
  {
    testimonial:
      "He is a great back end engineer with a product oriented mindset. Often I found him giving valuable feedback on the product during development that helped us catch something that we missed on the product. He documents and communicates his work in an easy to understand manner.",
    name: "Aditya Purwa",
    designation: "Former Senior Frontend Engineer",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHdFCyIuBhulA/profile-displayphoto-shrink_100_100/0/1612976386706?e=1712188800&v=beta&t=lQI5mvVuzUBsq2Gi5DiRhbzH9vrcK3w5SbyWAe4wT9A",
  },
  {
    testimonial: `He was extremely hands-on on multiple projects, setting up everything from scratch with in-depth know-how of the underlying design and decisions at work. But what stood out most with Shubh was his work ethic, commitment and dependability. Be it the smallest question or handling critical downtimes, he was always available to contribute and solve.`,
    name: "Akshata Mohanty",
    designation: "Former Data Team Lead",
    company: "Nas Company",
    image:
      "https://media.licdn.com/dms/image/C5603AQHJW_0QvterpA/profile-displayphoto-shrink_100_100/0/1657658750288?e=1712188800&v=beta&t=slVcEpIz_7_KuYlr8b-zEM-YwZekyyahEIdONQwt-zU",
  },
  {
    testimonial:
      "Shubhashish consistently demonstrated a strong work ethic and the ability to effectively communicate and collaborate with cross-functional teams. He consistently delivered high-quality code and on time. I highly recommend Shubhashish for any future software engineering opportunities and I am confident he will make a valuable contribution to any organization.",
    name: "Aleksandar Bulović",
    designation: "Founder & CEO",
    company: "Cluster 11",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHkEL-zHYsbOQ/profile-displayphoto-shrink_100_100/0/1682031095832?e=1712188800&v=beta&t=s-p_jjZ73wfGXdctWlyMM-hCpO1kMMXXyyzbJbU38z0",
  },
  {
    testimonial:
      "Shubhashish is a quick learner and an expert with Javascript technologies like Angular, React and Nodejs. He would be a great asset to any development team.",
    name: "Kranthi Kiran",
    designation: "Founder & CEO",
    company: "Thoughtflow",
    image:
      "https://media.licdn.com/dms/image/C5603AQH3P8SrWhIaXw/profile-displayphoto-shrink_100_100/0/1588664235962?e=1712188800&v=beta&t=NweeoAznenkwzUyNVl7DLkJOdE_nwwC1LSmqQ7np5dA",
  },
];

const projects = [
  {
    name: "Evently",
    description:
      "Full Stack Web App event management app allowing users to book and checkout events",
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/svashish305/evently",
  },
  {
    name: "Booking App",
    description:
      "Full Stack MERN app enabling users to book and checkout hotels",
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: bookingapp,
    source_code_link: "https://github.com/svashish305/mern-booking-app",
  },
  {
    name: "Finance App",
    description: `Full Stack MERN app to show finance dashboard and allows user to predict next year's data`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "regression-js",
        color: "pink-text-gradient",
      },
    ],
    image: financeapp,
    source_code_link: "https://github.com/svashish305/finance-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
