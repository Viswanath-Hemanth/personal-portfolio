export interface ExperienceItem {
  company: string;
  role: string;
  project?: string;
  dates: string;
  highlights: string[];
  leadership?: string[];
}

/** Optional structured layout for cloud provider pills (AWS / GCP / other). */
export interface SkillCloudSubsections {
  aws: string[];
  gcp: string[];
  /** e.g. Docker, cross-cloud tooling */
  other?: string[];
}

export interface SkillGroup {
  group: string;
  /** Flat chips when not using `cloud`. */
  items?: string[];
  cloud?: SkillCloudSubsections;
}

export interface ProjectItem {
  name: string;
  summary: string;
  keyPoints: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
}

export interface GameItem {
  title: string;
  caption: string;
  coverImage: string;
}

export interface PortfolioProfile {
  hero: {
    name: string;
    titles: string[];
    tagline: string;
    cta: {
      viewProjectsLabel: string;
      downloadResumeLabel: string;
      contactMeLabel: string;
    };
  };
  about: {
    lead: string;
    expertise: string[];
    storyBullets: string[];
    achievements: string[];
    languages: string[];
  };
  contact: {
    phone: string;
    email: string;
    linkedinUrl: string;
    location: string;
  };
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  education: EducationItem[];
  gamerSection: {
    headline: string;
    games: GameItem[];
  };
  assets: {
    resumeFile: string;
  };
}

export const profile: PortfolioProfile = {
  hero: {
    name: "Viswanath Hemanth Chadalawada",
    titles: ["Generative-AI Engineer", "Technical Lead | Full-Stack AI and Cloud Architect"],
    tagline: "Building scalable AI systems, fine-tuning LLMs, and shipping production-grade GenAI products",
    cta: {
      viewProjectsLabel: "View Projects",
      downloadResumeLabel: "Download Resume",
      contactMeLabel: "Contact Me",
    },
  },
  about: {
    lead: "Technical Lead with ~4 years experience in AI + Full Stack, leading 15+ engineers end-to-end from ML foundations to GenAI specialization.",
    expertise: ["LLM Fine-tuning", "RAG Systems", "NLP Pipelines", "Cloud-native AI deployments"],
    storyBullets: ["From ML foundations to GenAI specialization", "From developer to system builder to team leader"],
    achievements: [
      "Interviewed 300+ candidates",
      "Speaker at tech events (iQconnect, iQED talks)",
      "Represented iQUA.ai product at national-level events",
    ],
    languages: ["English (Expert)", "Telugu (Expert)", "Hindi (Proficient)", "Spanish (Beginner)"],
  },
  contact: {
    phone: "+91 7416766066",
    email: "viswanathhemanth.c@gmail.com",
    linkedinUrl: "https://linkedin.com/in/viswanath-hemanth",
    location: "Nellore, India",
  },
  experience: [
    {
      company: "iQuadra Information Services",
      role: "Technical Lead",
      project: "iQUA.ai",
      dates: "Oct 2022 - Present",
      highlights: [
        "Led a team of 15+ developers with Agile/Scrum planning and execution.",
        "Fine-tuned Llama 3.1, Mistral, BERT, and T5 on 30,000+ interview datasets.",
        "Built an AI interview system (iQUA.ai) with multi-round adaptive questioning.",
        "Designed NLP tasks: question generation, answer scoring, and feedback generation.",
        "Served APIs with FastAPI and integrated third-party AI tools into product workflows.",
        "Deployed fine-tuned LLMs for inference using AWS SageMaker and GCP.",
      ],
      leadership: [
        "Owned BugSprint (AI bug tracking) as Product Owner and Technical Lead.",
        "Participated in hiring (300+ interviews across multiple colleges).",
        "Tech evangelism through events, demos, and stakeholder presentations.",
      ],
    },
    {
      company: "iQuizUAnswer",
      role: "Software Developer",
      dates: "Jul 2022 - Oct 2022",
      highlights: [
        "Built FastAPI APIs and managed product database in MySQL.",
        "Web-scraped 200k+ question-answer pairs for model training.",
        "Implemented a React + Redux frontend and integrated API workflows.",
        "Built a custom semantic answer evaluator using similarity scoring.",
      ],
    },
    {
      company: "Indian Servers",
      role: "Machine Learning Team Lead",
      dates: "Jul 2021 - Jun 2022",
      highlights: [
        "Mentored ML teams and delivered hands-on training using Pandas, Matplotlib, and scikit-learn.",
        "Presented Deep Learning concepts to 500+ faculty and HoDs with live demos.",
        "Co-authored videos for the Python for Beginners course on coursedunia.com.",
      ],
    },
    {
      company: "Motion Dime",
      role: "Game Developer Intern",
      dates: "May 2021 - Jul 2021",
      highlights: [
        "Built 3D virtual environments and high-fidelity graphics for client demos using Unity + C#.",
        "Delivered virtual product demonstrations for industrial use-cases.",
      ],
    },
  ],
  skills: [
    { group: "Gen AI / AI", items: ["LLMs: Llama, Mistral, GPT, BERT, T5, Gemma", "RAG", "Fine-tuning (PEFT, Unsloth)", "NLP pipelines"] },
    { group: "Deep Learning", items: ["PyTorch", "TensorFlow", "Hugging Face"] },
    { group: "Backend", items: ["Python", "FastAPI", "Flask"] },
    { group: "Frontend", items: ["React.js", "Next.js", "Redux"] },
    {
      group: "Cloud & DevOps",
      cloud: {
        aws: [
          "Lambda",
          "S3",
          "EC2",
          "SageMaker",
          "API Gateway",
          "Step Functions",
          "EventBridge",
          "IAM",
          "SES",
          "RDS",
          "Amplify",
          "Secrets Manager",
        ],
        gcp: ["BigQuery (GBQ)", "Vertex AI", "Cloud Storage", "Cloud Run", "IAM", "Pub/Sub"],
        other: ["Docker"],
      },
    },
    { group: "Databases", items: ["MySQL", "PostgreSQL", "Neo4j", "Weaviate", "ChromaDB"] },
    { group: "MLOps", items: ["Model deployment", "Monitoring", "CI/CD"] },
    { group: "Tools", items: ["Git", "JIRA", "AWS CLI"] },
  ],
  projects: [
    {
      name: "AI Interview Platform (iQUA.ai)",
      summary: "A multi-round AI interviewer that orchestrates LLM workflows for adaptive questioning and answer scoring.",
      keyPoints: [
        "Multi-round AI interviewer (HR, Technical, Use-case)",
        "Adaptive questioning based on responses",
        "Answer scoring and automated feedback generation",
      ],
      techStack: ["FastAPI", "React", "AWS", "LLMs"],
    },
    {
      name: "BugSprint (AI Bug Tracking System)",
      summary: "End-to-end AI-assisted workflow for classifying bugs and accelerating developer routing.",
      keyPoints: ["AI-assisted bug classification", "Developer workflow automation", "Owned product and technical delivery"],
      techStack: [],
    },
    {
      name: "Semantic Answer Evaluator",
      summary: "A scoring engine for responses using NLP similarity techniques.",
      keyPoints: ["Used NLP similarity and semantic matching approaches", "Answer scoring pipeline for consistent evaluation"],
      techStack: [],
    },
  ],
  education: [
    { degree: "M.Tech - AI & ML", school: "BITS Pilani", dates: "2023 - 2025" },
    { degree: "B.Tech - CSE", school: "Narayana Engineering College", dates: "2018 - 2022" },
  ],
  gamerSection: {
    headline: "Casual Gamer when not building AI systems",
    games: [
      { title: "Batman: Arkham Knight", caption: "Dark Knight vibes", coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/208650/library_600x900_2x.jpg" },
      { title: "God of War Ragnarok", caption: "Mythic combat", coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/2322010/library_600x900_2x.jpg" },
      { title: "The Last of Us", caption: "Survival journey", coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/1888930/library_600x900_2x.jpg" },
      { title: "Uncharted: A thief's end", caption: "Adventure treasure hunt", coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/1659420/library_600x900_2x.jpg" },
      { title: "GTA V", caption: "Open-world chaos", coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900_2x.jpg" },
      { title: "Ghost of Tsushima", caption: "Samurai honor", coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/2215430/library_600x900_2x.jpg" },
      {
        title: "Sleeping Dogs: Definitive Edition",
        caption: "Hong Kong undercover action",
        coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/307690/library_600x900_2x.jpg",
      },
      { title: "Ghost of Yotei", caption: "Next legend rises", coverImage: "https://gmedia.playstation.com/is/image/SIEPDC/ghost-of-yotei-packshot-ps5-01-24jul25?$800px--t$" },
    ],
  },
  assets: {
    resumeFile: "Hemanth_Resume.pdf",
  },
};
