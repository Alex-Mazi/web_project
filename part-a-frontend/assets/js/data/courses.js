window.courses = [
  /* -------------------- PROGRAMMING -------------------- */
  {
    id: 1,
    title: "Introduction to Programming",
    category: "Programming",
    level: "Beginner",
    duration: "5 weeks",
    teacher: "Dr. Elena Markou",
    shortDescription: "Learn the fundamentals of programming and computational thinking.",
    description:
      "This course introduces the core concepts of programming through clear explanations, problem-solving strategies, and hands-on exercises. It is designed for students with little to no prior coding experience.",
    learningOutcomes: [
      "Understand basic programming concepts",
      "Write simple programs using variables and conditions",
      "Develop problem-solving skills",
      "Read and interpret basic code structures"
    ],
    topics: ["Variables", "Conditions", "Loops", "Functions"],
    prerequisites: [],
    recommended: true,
    image: "assets/img/thumbnails/intro-programming.png"
  },
  {
    id: 2,
    title: "Object-Oriented Programming with Java",
    category: "Programming",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Nikolas Georgiou",
    shortDescription: "Learn object-oriented programming principles using Java.",
    description:
      "This course focuses on object-oriented programming concepts such as classes, inheritance, interfaces, and polymorphism. Through hands-on Java examples, students will learn how to design modular and reusable software.",
    learningOutcomes: [
      "Understand object-oriented programming principles",
      "Design classes and interfaces",
      "Apply inheritance and polymorphism",
      "Build structured Java applications"
    ],
    topics: ["Classes", "Inheritance", "Interfaces", "Polymorphism"],
    prerequisites: ["Introduction to Programming"],
    recommended: true,
    image: "assets/img/thumbnails/java.png"
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    teacher: "Alex Papadopoulos",
    shortDescription: "Build modern, responsive websites using core web technologies.",
    description:
      "A hands-on introduction to HTML, CSS, and JavaScript. Students will learn how the web works and how to create structured, styled, and interactive websites from scratch.",
    learningOutcomes: [
      "Create semantic HTML structures",
      "Style pages using CSS",
      "Build responsive layouts",
      "Add basic interactivity with JavaScript"
    ],
    topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    prerequisites: ["Basic computer skills"],
    recommended: true,
    image: "assets/img/thumbnails/web.png"
  },
  /* -------------------- NETWORKS -------------------- */
  {
    id: 4,
    title: "Computer Networks Basics",
    category: "Networks",
    level: "Beginner",
    duration: "4 weeks",
    teacher: "Maria Nikolaou",
    shortDescription: "Understand how computers communicate over networks.",
    description:
      "This course explores the fundamentals of computer networking, including IP addressing, protocols, routing, and basic network architecture concepts.",
    learningOutcomes: [
      "Understand how data is transmitted across networks",
      "Identify common network devices",
      "Explain basic networking protocols",
      "Describe how the internet works"
    ],
    topics: ["IP Addressing", "Routing", "Protocols", "Network Devices"],
    prerequisites: [],
    recommended: false,
    image: "assets/img/thumbnails/networks-basics.png"
  },
  {
    id: 5,
    title: "Network Administration & Security",
    category: "Networks",
    level: "Intermediate",
    duration: "7 weeks",
    teacher: "Dimitris Karras",
    shortDescription: "Learn how to manage and secure modern computer networks.",
    description:
      "An intermediate-level course focusing on network configuration, traffic management, and security principles. Students will explore common vulnerabilities and methods for protecting network infrastructure.",
    learningOutcomes: [
      "Configure and manage network services",
      "Apply basic network security measures",
      "Monitor network traffic",
      "Identify and mitigate common threats"
    ],
    topics: ["Firewalls", "Network Configuration", "Security Protocols", "Traffic Analysis"],
    prerequisites: ["Computer Networks Basics"],
    recommended: true,
    image: "assets/img/thumbnails/networks.png"
  },
  /* -------------------- CYBERSECURITY -------------------- */
  {
    id: 6,
    title: "Cybersecurity Essentials",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Sophia Anagnostou",
    shortDescription: "Explore digital threats and modern security practices.",
    description:
      "This course introduces key cybersecurity concepts, including common attack types, defensive strategies, and best practices for protecting systems and data.",
    learningOutcomes: [
      "Recognize common cyber threats",
      "Understand basic cryptography concepts",
      "Apply security best practices",
      "Evaluate system vulnerabilities"
    ],
    topics: ["Malware", "Encryption", "Authentication", "Security Policies"],
    prerequisites: ["Basic networking knowledge"],
    recommended: true,
    image: "assets/img/thumbnails/cybersecurity.png"
  },
  {
    id: 7,
    title: "Ethical Hacking & Penetration Testing",
    category: "Cybersecurity",
    level: "Advanced",
    duration: "8 weeks",
    teacher: "Andreas Konstantinou",
    shortDescription: "Learn ethical hacking techniques and penetration testing methods.",
    description:
      "This advanced course introduces ethical hacking methodologies, vulnerability scanning tools, and penetration testing techniques within a controlled and legal environment.",
    learningOutcomes: [
      "Understand ethical hacking principles",
      "Perform vulnerability assessments",
      "Conduct penetration testing",
      "Analyze security weaknesses"
    ],
    topics: ["Penetration Testing", "Vulnerability Scanning", "Exploits", "Security Tools"],
    prerequisites: ["Cybersecurity Essentials"],
    recommended: true,
    image: "assets/img/thumbnails/hacking.png"
  },
  /* -------------------- DATABASES -------------------- */
  {
    id: 8,
    title: "Databases & SQL Fundamentals",
    category: "Databases",
    level: "Beginner",
    duration: "5 weeks",
    teacher: "Eleni Stavrou",
    shortDescription: "Learn how databases work and write practical SQL queries.",
    description:
      "This course covers database fundamentals, relational models, and SQL queries used to store, retrieve, and manage structured data.",
    learningOutcomes: [
      "Understand relational database concepts",
      "Write basic SQL queries",
      "Design simple database schemas",
      "Manage data efficiently"
    ],
    topics: ["SQL", "Relational Models", "Tables", "Queries"],
    prerequisites: [],
    recommended: true,
    image: "assets/img/thumbnails/sql.png"
  },
  {
    id: 9,
    title: "Database Design & Optimization",
    category: "Databases",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Christos Pappas",
    shortDescription: "Design efficient databases and optimize performance.",
    description:
      "Students will learn how to design normalized database schemas, apply indexing strategies, and optimize queries for performance and scalability.",
    learningOutcomes: [
      "Design normalized database schemas",
      "Apply indexing strategies",
      "Optimize SQL queries",
      "Improve database performance"
    ],
    topics: ["Normalization", "Indexes", "Query Optimization", "Performance Tuning"],
    prerequisites: ["Databases & SQL Fundamentals"],
    recommended: true,
  },
  /* -------------------- AI & DATA -------------------- */
  {
    id: 10,
    title: "Introduction to Artificial Intelligence",
    category: "Artificial Intelligence",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "George Ioannou",
    shortDescription: "Explore the foundations of artificial intelligence.",
    description:
      "This course introduces core AI concepts including search algorithms, reasoning, decision-making, and introductory machine learning techniques.",
    learningOutcomes: [
      "Understand core AI concepts",
      "Apply basic search algorithms",
      "Explain reasoning and decision-making models",
      "Recognize real-world AI applications"
    ],
    topics: ["Search Algorithms", "Reasoning", "Decision Making", "AI Applications"],
    prerequisites: ["Introduction to Programming"],
    recommended: false,
    image: "assets/img/thumbnails/ai-intro.png"
  },
  {
    id: 11,
    title: "Machine Learning Fundamentals",
    category: "Artificial Intelligence",
    level: "Intermediate",
    duration: "7 weeks",
    teacher: "Panagiotis Roussos",
    shortDescription: "Learn how machines identify patterns using data.",
    description:
      "This course introduces supervised and unsupervised learning techniques, model evaluation, and practical machine learning workflows.",
    learningOutcomes: [
      "Understand supervised and unsupervised learning",
      "Train simple machine learning models",
      "Evaluate model performance",
      "Apply machine learning to real datasets"
    ],
    topics: ["Supervised Learning", "Unsupervised Learning", "Models", "Evaluation"],
    prerequisites: ["Introduction to Artificial Intelligence"],
    recommended: true,
    image: "assets/img/thumbnails/ai.png"
  }
];
