export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI / ML' | 'Research' | 'Systems';
  status: 'Completed' | 'In Progress' | 'Prototype' | 'Research';
  featured: boolean;
  tagline: string;
  problem: string;
  description: string;
  features: string[];
  technologies: string[];
  role: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  secondaryImage?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const portfolioData = {
  profile: {
    name: "Vasantha Kumaran D.",
    shortName: "Vasantha",
    initials: "VK",
    headline: "Building Ideas Into Real-World Solutions.",
    heroSublabel: "Computer Science Student | Aspiring Developer",
    bio: "I'm a Computer Science and Business Systems student at KIT who enjoys building practical software, exploring AI-driven solutions, and turning interesting ideas into working projects. My interests span full-stack development with Python & Django, machine learning, and natural language processing research.",
    location: "Coimbatore, Tamil Nadu, India",
    availability: {
      status: "Open to Internship Opportunities",
      active: true,
    },
    avatar: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    contacts: {
      email: "d.vasanth7708@gmail.com",
      secondaryEmail: "kit25csbsvasanthakumaran@gmail.com",
      github: "https://github.com/lostwings7",
      linkedin: "https://www.linkedin.com/in/vasantha-kumaran-d-792a57381",
    },
  },

  about: {
    summary: "Dedicated Computer Science & Business Systems undergraduate at Kalaignar Karunanidhi Institute of Technology (KIT) with a solid foundation in software engineering, full-stack Python development, and algorithmic problem-solving. My journey centers on turning concepts into well-architected applications—from constraint-based scheduling algorithms and online assessment platforms to cross-script NLP benchmarks and embedded hardware monitors.",
    highlights: [
      {
        title: "Full-Stack Development",
        description: "Building production-ready web applications using Django, relational database schemas, RESTful APIs, and responsive frontends.",
        icon: "Layers",
      },
      {
        title: "AI & Machine Learning",
        description: "Hands-on experience integrating modern foundation models (Gemini API), computer vision pipelines (YOLOv8), and ML workflows.",
        icon: "Brain",
      },
      {
        title: "NLP & Technical Research",
        description: "Investigating representation invariance, uncertainty estimation, and selective prediction on Tamil-English code-mixed corpora.",
        icon: "FileCode",
      },
      {
        title: "Systems & Embedded Tech",
        description: "Connecting software telemetry with embedded microcontrollers (Arduino Uno, OLED, serial protocols) for real-world monitoring.",
        icon: "Cpu",
      },
    ],
  },

  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core languages used for backend architectures, algorithmic design, and application scripting.",
      skills: [
        { name: "Python", description: "Primary language for Django backends, AI/ML pipelines, automation, and data structures.", highlight: true },
        { name: "C++", description: "Algorithmic problem-solving, object-oriented concepts, and performance-critical routines." },
        { name: "Java", description: "OOP principles, modular application design; NPTEL Certified.", highlight: true },
        { name: "JavaScript", description: "Modern ES6+, DOM manipulation, dynamic UI components, and asynchronous workflows." },
        { name: "C", description: "Low-level system foundations, memory concepts, and foundational algorithms." },
      ],
    },
    {
      title: "Web Development",
      description: "Frameworks and technologies for building scalable, responsive web portals and services.",
      skills: [
        { name: "Django (Python)", description: "MVC/MVT pattern, ORM modeling, secure authentication, session management, and admin interfaces.", highlight: true },
        { name: "RESTful APIs", description: "Clean JSON endpoint architecture, HTTP verbs, error serialization, and client integration.", highlight: true },
        { name: "HTML5 & CSS3", description: "Semantic markup, responsive grid/flexbox layouts, modern animations, and accessible interfaces." },
        { name: "Frontend UI Design", description: "Component-driven layout architecture, glassmorphism, responsive navigation, and user-friendly flows." },
      ],
    },
    {
      title: "AI & Machine Learning",
      description: "Applied machine learning, language models, computer vision, and experimental research.",
      skills: [
        { name: "Machine Learning Fundamentals", description: "Supervised classification, regression, model validation, and loss metrics.", highlight: true },
        { name: "Natural Language Processing (NLP)", description: "Tokenization dynamics, multilingual embeddings, and code-mixed Tamil-English text understanding.", highlight: true },
        { name: "Large Language Models & APIs", description: "Gemini API integration, structured prompting, contextual advisory pipelines, and JSON schemas." },
        { name: "Computer Vision & Tracking", description: "Ultralytics YOLOv8 object detection, ByteTrack tracking, and Time-To-Collision (TTC) calculations." },
      ],
    },
    {
      title: "Tools, Databases & Systems",
      description: "Development workflows, databases, operating system utilities, and embedded interfaces.",
      skills: [
        { name: "Git & GitHub", description: "Version control, collaborative branching, pull requests, and commit hygiene.", highlight: true },
        { name: "SQL & Relational Databases", description: "SQLite, MySQL schema design, indexing, foreign keys, and query optimization.", highlight: true },
        { name: "Linux / WSL & OS Internals", description: "Bash scripting, system performance telemetry (psutil), process lifecycle monitoring." },
        { name: "Arduino & Microcontrollers", description: "C++ firmware, serial communication protocols, I2C OLED displays, and sensor telemetry." },
        { name: "VS Code & Development Tools", description: "Integrated debugging, environment management, and multi-file project orchestration." },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "quizx",
      title: "QuizX - Online Quiz & Examination Platform",
      category: "Full-Stack",
      status: "Completed",
      featured: true,
      tagline: "Scalable assessment engine with automated scoring, timed sessions, and performance analytics.",
      problem: "Traditional academic testing environments struggle with secure question randomization, controlled student attempts, instant evaluation, and actionable administrative insights.",
      description: "Architected and deployed an interactive web-based examination platform utilizing Django's MVC architecture. Features secure candidate authentication, quiz-code entry, timer-governed question navigation, automatic response auto-saving, and detailed post-exam analytics with chart visualizations and exportable reports.",
      features: [
        "Student & faculty authentication with role-specific views",
        "Unique quiz-code access control with enforced attempt limits",
        "Live exam interface featuring question palette, countdown timer, and AJAX autosave",
        "Automated grading engine providing instant feedback and granular score breakdown",
        "Faculty dashboard with question-level difficulty analysis and score distributions",
        "Relational schema managing user profiles, category banks, and historical results",
      ],
      technologies: ["Python", "Django", "SQLite", "JavaScript", "HTML5", "CSS3"],
      role: "Full-Stack Developer (Designed relational models, exam state machine, and student dashboard)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/quizx.png",
    },
    {
      id: "timetable-generator",
      title: "Smart Timetable Generator",
      category: "Full-Stack",
      status: "Completed",
      featured: true,
      tagline: "Automated academic scheduling system powered by backtracking constraint satisfaction algorithms.",
      problem: "Constructing conflict-free college schedules across multiple departments, overlapping faculty commitments, lab requirements, and room capacities requires days of manual iteration.",
      description: "A timetable management and automated generation platform engineered to eliminate scheduling collisions. Implements backtracking constraint satisfaction algorithms to balance faculty workloads, room assignments, and grouped class hours, offering coordinators an intuitive visual management dashboard.",
      features: [
        "Comprehensive management for faculties, courses, classrooms, and time slots",
        "Constraint satisfaction algorithm resolving instructor collisions and room overlaps",
        "Specialized logic handling consecutive lab hours, faculty workloads, and batch splits",
        "Interactive schedule viewer with section filtering and export capability",
        "Administrative override portal allowing manual fine-tuning of generated schedules",
        "Relational database structure ensuring complete referential integrity",
      ],
      technologies: ["Python", "Django", "Constraint Satisfaction", "HTML5", "CSS3", "JavaScript", "SQLite"],
      role: "Lead Developer (Implemented constraint engine, optimization rules, and admin interface)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/timetable.png",
    },
    {
      id: "agrosense",
      title: "AgroSense - Smart Crop Advisory Platform",
      category: "AI / ML",
      status: "Completed",
      featured: true,
      tagline: "AI-assisted agricultural decision support platform for small and marginal farmers (SIH25010).",
      problem: "Smallholder farmers often lack access to localized soil data, micro-climate forecasts, disease diagnostic tools, and real-time mandi commodity prices.",
      description: "Developed around Smart India Hackathon problem statement SIH25010. AgroSense pairs real-time weather forecasts (Open-Meteo), spatial soil composition (ISRIC SoilGrids), and wholesale commodity prices (Agmarknet) with Google Gemini AI to provide actionable, multilingual agronomic recommendations tailored to small and marginal farmers.",
      features: [
        "Context-grounded agronomic advisory powered by Google Gemini API",
        "Hyperlocal 7-day weather forecasting and FAO-56 evapotranspiration (ET0) tracking",
        "Spatial soil estimation (pH, organic carbon, texture) via ISRIC SoilGrids v2.0 API",
        "Crop health and visual disease assessment workflow",
        "Real-time mandi commodity price intelligence cached from Agmarknet feeds",
        "Mobile-first responsive interface with voice interaction and PWA readiness",
      ],
      technologies: ["Python", "Django", "Google Gemini API", "Open-Meteo API", "SoilGrids API", "SQLite", "JavaScript"],
      role: "Full-Stack & AI Engineer (Integrated Gemini API, external meteorological APIs, and advisory UI)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/agrosense.png",
    },
    {
      id: "smartmove",
      title: "AI-Assisted Traffic Diversion & Safety Intelligence",
      category: "Research",
      status: "Prototype",
      featured: true,
      tagline: "Intelligent diversion planning and urban road hazard detection using computer vision and graph algorithms.",
      problem: "Temporary road closures and urban road hazards lead to severe congestion when vehicles of different sizes and capacities are diverted along unsuitable alternative routes.",
      description: "An intelligent transportation concept combining computer vision road hazard detection (YOLOv8 pothole, crack, and near-miss monitoring) with vehicle-aware diversion algorithms. Computes differentiated alternative routes tailored to vehicle classes (motorcycles, passenger cars, buses, and heavy commercial vehicles).",
      features: [
        "Ultralytics YOLOv8 inference pipeline for road surface anomaly and pothole detection",
        "Traffic conflict detection utilizing ByteTrack multi-object tracking and Time-To-Collision (TTC < 2.0s)",
        "Vehicle-aware alternative routing model for temporary road closures",
        "Differentiated capacity constraints factoring vehicle dimensions and turning radii",
        "Interactive geospatial dashboard built with Leaflet displaying real-time hazard markers",
      ],
      technologies: ["Python", "FastAPI", "YOLOv8", "ByteTrack", "OpenStreetMap", "Leaflet", "React"],
      role: "Developer & Researcher (Engineered CV detection models, near-miss tracking, and map dashboard)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/smartmove.png",
    },
    {
      id: "tamil-english-research",
      title: "Cross-Script Understanding of Tamil-English Code-Mixed Text",
      category: "Research",
      status: "Research",
      featured: false,
      tagline: "Reliability benchmark investigating representation invariance and selective prediction in multilingual NLP.",
      problem: "Multilingual language models exhibit pronounced performance volatility and tokenizer fragmentation when colloquial Dravidian languages are written in Romanized scripts (Tanglish) versus native script.",
      description: "A research-oriented benchmark (TEP-RB) exploring how multilingual models behave across paired Romanized Tanglish and native Tamil script representations of identical messages. Analyzes prediction flips, Total Variation Distance (TVD), and tests risk-calibrated selective prediction (PV-RCC) to allow models to safely abstain on uncertain classifications.",
      features: [
        "Human-verified paired-script benchmark corpus (Romanized Tanglish vs. Native Tamil)",
        "Quantification of cross-script prediction flip rates on identical semantic content",
        "Total Variation Distance (TVD) analysis measuring softmax probability shift",
        "Risk-calibrated selective prediction (PV-RCC) evaluating epistemic abstention",
        "Systematic comparison of modern multilingual models and baseline tokenizers",
      ],
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "NLP", "Scikit-Learn", "Matplotlib"],
      role: "Lead Researcher (Designed benchmark methodology, annotation platform, and evaluation metrics)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/tanglish_research.png",
      secondaryImage: "/projects/tanglish_research_eval.png",
    },
    {
      id: "pc-sentinel",
      title: "Hardware & OS Diagnostic Watchdog (PC Sentinel)",
      category: "Systems",
      status: "Prototype",
      featured: false,
      tagline: "Physical telemetry watchdog combining Windows system monitoring with Arduino OLED hardware.",
      problem: "Full-screen gaming, intensive rendering, or headless operation can obscure vital CPU/GPU thermal and memory spikes before an OS crash occurs.",
      description: "A hardware-assisted system health monitor that queries low-level Windows OS telemetry via Python (psutil) and broadcasts real-time statistics over USB serial to an external Arduino Uno microcontroller powering an I2C OLED status screen and an acoustic alert buzzer.",
      features: [
        "Continuous monitoring of CPU frequency, RAM utilization, disk activity, and top processes",
        "Robust serial communication protocol with packet checksums and watchdog heartbeats",
        "Real-time graphical display on a physical 128x64 I2C OLED panel",
        "Threshold-triggered acoustic buzzer alerts for thermal or memory emergencies",
        "Automatic HTML incident report generation upon anomaly detection",
      ],
      technologies: ["Python", "psutil", "Arduino Uno (C++)", "I2C OLED", "Serial Telemetry", "Hardware"],
      role: "Developer (Created Python monitoring service, serial communication protocol, and Arduino firmware)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/pc_sentinel.png",
    },
    {
      id: "talentgraph",
      title: "TalentGraph AI - Skill & Mobility Intelligence",
      category: "Full-Stack",
      status: "Completed",
      featured: false,
      tagline: "Enterprise internal talent mobility platform powered by Gemini AI and graph-inspired relational logic.",
      problem: "Large enterprises lose visibility into internal employee capabilities and struggle to match emerging project requirements with existing organizational talent.",
      description: "An intelligent talent intelligence platform connecting employees with internal mobility opportunities. Implements a bi-directional matching engine, AI-synthesized skill profiles using Google Gemini, and interactive 'What-If' readiness simulations within a modular Django REST and React architecture.",
      features: [
        "Bi-directional capability matching connecting Employees, Skills, and Projects",
        "Skill DNA synthesis and live 'What-If' readiness simulation",
        "Multi-tenant Django REST backend with role-based access control (RBAC)",
        "Interactive employee and enterprise shells built with React and Tailwind CSS",
      ],
      technologies: ["Python", "Django REST Framework", "Google Gemini API", "React", "Tailwind CSS", "SQLite"],
      role: "Full-Stack Developer (Implemented matching engine, profile synthesizer, and frontend views)",
      githubUrl: "https://github.com/lostwings7",
      image: "/projects/talentlens.png",
    },
  ] as Project[],

  research: {
    title: "Research & Academic Inquiry",
    subtitle: "Exploring the boundaries of multilingual NLP, epistemic uncertainty, and intelligent systems.",
    intro: "Beyond building traditional software, I am deeply intrigued by research questions: How do neural language models perceive informal, code-switched Indian languages? When can we trust model confidence, and when should a decision system safely abstain? How can graph algorithms optimize urban mobility during infrastructure failures?",
    areas: [
      {
        title: "Cross-Script Dravidian NLP & Code-Switching",
        description: "Investigating tokenizer representation bias and semantic consistency across native Tamil script and Romanized Tanglish expressions.",
        tag: "Active Research",
      },
      {
        title: "Risk-Calibrated Selective Prediction",
        description: "Formulating disagreement-based uncertainty estimation (PV-RCC) to empower high-stakes AI systems to withhold low-confidence predictions.",
        tag: "Methodology",
      },
      {
        title: "Intelligent Transportation & Graph Algorithms",
        description: "Applying graph routing, constraint modeling, and real-time computer vision telemetry to dynamic urban congestion management.",
        tag: "Applied Research",
      },
      {
        title: "Grounded LLM Decision Systems",
        description: "Designing prompt architectures and API orchestration patterns that strictly ground LLM outputs in verified domain datasets.",
        tag: "System Design",
      },
    ],
    highlightedStudy: {
      title: "Tamil-English Paired-View Reliability Benchmark (TEP-RB)",
      type: "Ongoing Research Project",
      institution: "KIT - Kalaignar Karunanidhi Institute of Technology",
      summary: "Standard multilingual models (such as mBERT, XLM-RoBERTa, and Open-Jev) frequently suffer from tokenizer fragmentation when reading Romanized Tamil (Tanglish). By establishing an authentic paired-view benchmark with exact cross-script alignment, this research measures prediction volatility, Total Variation Distance (TVD) in probability distributions, and evaluates risk-coverage trade-offs for safe AI deployment.",
      keyMetrics: [
        { label: "Corpus Construction", value: "Authentic Paired Scripts" },
        { label: "Evaluation Lens", value: "Prediction Flips & Softmax TVD" },
        { label: "Safety Mechanism", value: "Disagreement-Based Abstention" },
      ],
      image: "/projects/tanglish_research.png",
    },
  },

  education: [
    {
      degree: "B.Tech. in Computer Science and Business Systems (CSBS)",
      institution: "KIT - Kalaignar Karunanidhi Institute of Technology",
      location: "Coimbatore, Tamil Nadu, India",
      period: "2025 – 2029 (Expected)",
      grade: "CGPA: 9.03 / 10.0 (Current Second Year)",
      description: "Focused curriculum combining core computer science engineering (operating systems, data structures, DBMS, networks) with business intelligence and modern software engineering practices.",
      highlights: [
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks",
        "Active member of technical student developer communities and competitive coding sessions",
        "Academic projects in automated constraint scheduling and skill intelligence",
      ],
    },
    {
      degree: "Senior Secondary Certificate (Class XII)",
      institution: "Vedavalli Vidyalaya, NPS Senior Secondary School (CBSE)",
      location: "Ranipet, Tamil Nadu, India",
      period: "2023 – 2025",
      grade: "Score: 89.0% | JEE Mains: 90.03 Percentile",
      description: "Comprehensive scientific curriculum with intensive focus on Physics, Chemistry, and Advanced Mathematics.",
    },
    {
      degree: "Secondary School Leaving Certificate (Class X)",
      institution: "Vedavalli Vidyalaya, NPS Senior Secondary School (CBSE)",
      location: "Ranipet, Tamil Nadu, India",
      period: "2022 – 2023",
      grade: "Score: 92.6%",
      description: "Strong foundational academics in science, mathematics, computer foundations, and English.",
    },
  ] as EducationItem[],

  certifications: [
    { name: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", year: "2025" },
    { name: "Networking Essentials", issuer: "Cisco Networking Academy", year: "2026" },
    { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", year: "2026" },
    { name: "Algorithmic Graph Theory and Data Structures", issuer: "NPTEL", year: "2026" },
    { name: "Programming In Java", issuer: "NPTEL", year: "2026" },
  ] as Certification[],

  approach: {
    headline: "How I Approach Engineering & Problem Solving",
    subtitle: "A philosophy centered on real-world utility, continuous building, and technical rigor.",
    pillars: [
      {
        number: "01",
        title: "Build Practical, Useful Solutions",
        description: "Software shines when it solves a tangible problem. Whether it's removing timetabling conflicts or delivering agronomic advice to farmers, I prioritize concrete user value over vanity complexity.",
      },
      {
        number: "02",
        title: "Learn by Implementing",
        description: "Theory gains meaning through execution. I deepen my architectural intuition by spinning up servers, modeling relational schemas, debugging edge cases, and pushing working software to completion.",
      },
      {
        number: "03",
        title: "Bridge Software with Physical Realities",
        description: "Computing doesn't live in a silo. I enjoy connecting backend logic with physical sensors, embedded serial OLEDs, geospatial maps, and real-world urban constraints.",
      },
      {
        number: "04",
        title: "Rigor Over Hype",
        description: "While I actively explore emerging AI, LLMs, and computer vision, I believe in empirical evaluation, uncertainty calibration, and grounded architectures rather than unverified claims.",
      },
    ],
  },
};
