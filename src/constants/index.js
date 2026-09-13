import project1 from "../assets/projects/event.jpg";
import project2 from "../assets/projects/fitness.jpg";
import project3 from "../assets/projects/recipe.jpg";
import project4 from "../assets/projects/online.jpg";
import project5 from "../assets/projects/TextToSpeech.png"
import project6 from "../assets/projects/TodoList.png"

export const HERO_CONTENT = `I’m Puroo Kulshrestha, a Generative AI Engineer with ~2 years of hands-on experience building production-ready AI solutions, including RAG pipelines, multi-agent systems, and LLM-powered enterprise applications. I specialize in Python, FastAPI, LangChain, LangGraph, Azure AI Foundry, Azure AI Search, PGVector, and secure AI integrations that improve automation and productivity.`;

export const ABOUT_TEXT = `Generative AI Engineer with a strong foundation in software development and a focus on building scalable, secure, and intelligent AI systems. My work spans RAG pipelines, multi-agent orchestration, LLM integrations, and enterprise-grade application development using Python, FastAPI, Azure AI services, and modern frontend tools. I enjoy turning complex business problems into practical AI-driven solutions with measurable impact.`;

export const EXPERIENCES = [
<<<<<<< HEAD
  {
    year: "Aug 2024 – Present",
    role: "Senior Analyst",
    company: "Capgemini",
    description: `Joined Capgemini in August 2024 as an Analyst/Software Engineer and began with Java and Spring Boot training, followed by a cloud and DevOps learning path covering AWS fundamentals. This initial phase helped build a strong foundation in application development, and enterprise engineering practices. After the training phase, I transitioned into Capgemini’s GenAI project environment, where I gained hands-on exposure to Generative AI, LLMs, RAG, AI agents, and enterprise AI application design. I also worked on a Google ADK-based weather report proof of concept to understand how AI systems use tools and external information to deliver practical responses. My first project was an internal Agentic AI initiative, where I started with bug fixes and SonarQube-related improvements to understand the architecture, data flow, and quality expectations. I am currently contributing to a GenAI analytics chatbot for enterprise data, working on workflows that convert domain-based natural-language questions into SQL, validate queries against real database schemas, execute them against PostgreSQL, and return results, AI-generated narratives, and visual charts. This work has expanded my understanding of enterprise AI use cases, secure data handling, user flows, and production-grade agentic application development. Alongside project work, I continue deepening my knowledge in Azure Fundamentals, LLMs, RAG, GraphRAG, LangGraph, CrewAI, MCP, vector databases, multimodal AI, and LLM guardrails, with a focus on growing into a stronger GenAI Engineer / AI Developer role.`,
    technologies: ["Java", "Spring Boot", "AWS", "Python", "FastAPI", "LangGraph", "LangChain", "Azure AI", "RAG", "LLMs", "Redis", "Angular", "Azure DevOps"],
  },
];

export const EDUCATION = [
  {
    year: "Aug 2020 – May 2024",
    degree: "B.Tech in Computer Application & Engineering",
    institution: "GLA University Mathura",
    description: `Completed my undergraduate degree with a strong foundation in software engineering, problem solving, database systems, and modern application design. This education formed the core technical base that enabled my transition into AI engineering and enterprise application development.`,
    technologies: ["Java", "SQL", "Data Structures", "Software Engineering", "Computer Science"],
  },
=======
    // {
    //   year: "February 2024 - June 2024",
    //   role: "SDE Intern",
    //   company: "ITJOBXS",
    //   description: `Designed and developed a fully responsive web page for a section of itjobxs.com. Addressed user verification/authentication and tackled engineering challenges related to detecting and removing fake bots and posts. Integrated Recaptcha with the website, providing a Google layer of protection.`,
    //   technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    // },
    {
      year: "August 2024 - Present",
      role: "A4 Analyst",
      company: "Capgemini",
      description: `Recently completed my training program, where I gained hands-on experience in Java backend development with Spring Boot, focusing on microservices architecture. Learned to work with tools and technologies like MySQL, Swagger, and Postman to build, test, and document efficient backend solutions. Now excited to apply these skills and contribute to impactful projects within the team.`,
      technologies: ["Java", "Spring Boot", "Microservices", "MySQL", "Swagger", "Postman"],
    },
    {
      year: "August 2021 - April 2023",
      role: "Technical Head",
      company: "Androkit Club, GLA University",
      description: `Responsible for leading and managing the club’s technical initiatives. Oversaw the development and implementation of technical solutions to support the club’s projects and organized events.`,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
    },
    
>>>>>>> 1f89d34534eeadb458afc7578bdd021bc2a4f2b0
];

export const PROJECTS = [
  // Placeholder: add a measurable business result here if available (for example, reduced query latency by X%).
  {
    title: "GenAI Analytics Chatbot | Capgemini",
    image: project5,
    description:
      "Built a GenAI-powered conversational analytics platform during my time at Capgemini for enterprise workforce and operations data. The FastAPI + LangGraph system converts plain-English business questions into validated SQL, executes them against PostgreSQL, and delivers a data table, AI-generated narrative insight, and chart output without requiring SQL knowledge. I contributed to the schema-grounded SQL generation flow, PII masking, RBAC-aware data access, clarification loops for ambiguous queries, self-healing SQL retries, SSE streaming responses, and feedback-driven learning patterns for a secure and reliable enterprise analytics assistant.",
    technologies: ["Python", "FastAPI", "LangGraph", "Azure OpenAI", "PostgreSQL", "Redis", "pgvector", "Qdrant", "Azure AI Content Safety", "Azure Monitor", "QuickChart"],
  },
  {
    title: "Agentic AI Initiative | Capgemini",
    image: project6,
    description:
      "Worked on multi-agent workflows using LangGraph and CrewAI for tool orchestration and decision-making. Contributed to architecture design and resolved code-quality issues while delivering scalable agentic solutions.",
    technologies: ["LangGraph", "CrewAI", "MCP", "Python"],
  },
  {
    title: "AI Chatbot (RAG-Based)",
    image: project2,
    description:
      "Developed a secure RAG-based chatbot using Azure AI Search with isolated workspaces, context-aware reasoning, and document-grounded responses for enterprise knowledge retrieval.",
    technologies: ["Azure AI Search", "PGVector", "RAG", "FastAPI"],
  },
];

export const CONTACT = {
  address: "Navi Mumbai, Maharashtra",
  phoneNo: "+91-7738878793",
  email: "kulshresthapuroo123@gmail.com",
};
