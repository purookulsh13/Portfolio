import project1 from "../assets/projects/event.jpg";
import project2 from "../assets/projects/fitness.jpg";
import project3 from "../assets/projects/recipe.jpg";
import project4 from "../assets/projects/online.jpg";
import project5 from "../assets/projects/TextToSpeech.png"
import project6 from "../assets/projects/TodoList.png"

export const HERO_CONTENT = `I am Puroo Kulshrestha, currently refining my skills in Full Stack development with Java while exploring React and Rest API. Though early in my career, I am passionate about applying my knowledge to real-world projects. My dedication, strong communication, and collaborative skills enable me to contribute effectively to team environments and tackle development challenges. Outside of coding, I enjoy football and video games. I’m excited about new opportunities and collaborations, so feel free to connect!`;

export const ABOUT_TEXT = `I'm an enthusiastic and adaptable full stack developer passionate about crafting effective and intuitive web applications. With 5 years of industry experience, I've mastered various technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development sparked from a deep curiosity about functionality, evolving into a career where I thrive on learning and embracing new obstacles. I excel in teamwork, relishing in solving intricate challenges to deliver top-notch solutions. Beyond coding, I stay active, explore fresh technologies, and contribute to open-source initiatives.`;

export const EXPERIENCES = [
    // {
    //   year: "February 2024 - June 2024",
    //   role: "SDE Intern",
    //   company: "ITJOBXS",
    //   description: `Designed and developed a fully responsive web page for a section of itjobxs.com. Addressed user verification/authentication and tackled engineering challenges related to detecting and removing fake bots and posts. Integrated Recaptcha with the website, providing a Google layer of protection.`,
    //   technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    // },
    {
      year: "August 2021 - April 2023",
      role: "Technical Head",
      company: "Androkit Club, GLA University",
      description: `Responsible for leading and managing the club’s technical initiatives. Oversaw the development and implementation of technical solutions to support the club’s projects and organized events.`,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
    },
];

export const PROJECTS = [
  {
    title: "Text To Speech",
    image: project5,
    description: 
      "This web application demonstrates a Text-to-Speech (TTS) feature using the Web Speech API. Users can input text, select a voice from available options, and hear the text spoken aloud. The app features a clean and modern interface with customizable styles.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "To Do List",
    image: project6,
    description:
      "It is a simple To-Do List web application built with HTML, CSS, and JavaScript. It allows users to add tasks with an optional time, view the tasks in a list, and remove tasks as needed.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Trip It",
    image: project2,
    description:
      "An intuitive travel app offering curated packages for Indian tourist destinations. Provided users with insights into attractions, simplifying trip planning and enhancing the travel experience.",
    technologies: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "DBInserter",
    image: project4,
    description:
      "Developed a robust data insertion tool, DBInserter, using C, facilitating seamless integration with SQLite databases. Implemented efficient record insertion from csv file into the database for streamlined data management.",
    technologies: ["C", "Sqlite"],
  },
];

export const CONTACT = {
  address: "Madhya Pradesh, India",
  phoneNo: "+91 7470528793 ",
  email: "purookulshrestha@gmail.com",
};
