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
    description: "This course provides a comprehensive introduction to the fundamental principles of programming and computational thinking. Designed for students with little to no prior coding experience, it focuses on building a strong conceptual foundation through clear explanations, practical examples, and guided exercises. Students will learn how programs are structured, how data is processed, and how logic is applied to solve problems step by step. Emphasis is placed on understanding core programming concepts rather than memorizing syntax, allowing learners to develop transferable problem-solving skills. By the end of the course, students will be confident in reading, writing, and reasoning about simple programs, preparing them for more advanced topics in software development.",
    learningOutcomes: [
      "Understand basic programming concepts",
      "Write simple programs using variables and conditions",
      "Develop problem-solving skills",
      "Read and interpret basic code structures"
    ],
    topics: ["Variables", "Conditions", "Loops", "Functions"],
    prerequisites: [],
    recommended: true,
    image: "assets/img/thumbnails/intro-programming.png",
    teacherImage: "assets/img/people/elenamarkou.jpg"
  },
  {
    id: 2,
    title: "Object-Oriented Programming with Java",
    category: "Programming",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Nikolas Georgiou",
    shortDescription: "Learn object-oriented programming principles using Java.",
    description: "This course introduces students to the principles of Object-Oriented Programming (OOP) using Java as the primary language. Building on basic programming knowledge, it explores how complex software systems are designed and structured using classes, objects, and reusable components. Students will learn how to model real-world problems through abstraction and apply key OOP concepts such as encapsulation, inheritance, polymorphism, and interfaces. Through hands-on exercises and practical examples, the course emphasizes writing clean, maintainable, and scalable code. By the end of the course, students will be able to design object-oriented solutions, understand existing Java codebases, and apply best practices that are essential for modern software development.",
    learningOutcomes: [
      "Understand object-oriented programming principles",
      "Design classes and interfaces",
      "Apply inheritance and polymorphism",
      "Build structured Java applications"
    ],
    topics: ["Classes", "Inheritance", "Interfaces", "Polymorphism"],
    prerequisites: ["Introduction to Programming"],
    recommended: true,
    image: "assets/img/thumbnails/java.png",
    teacherImage: "assets/img/people/nikolasgeorgiou.jpg"
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    category: "Programming",
    level: "Beginner",
    duration: "6 weeks",
    teacher: "Alex Papadopoulos",
    shortDescription: "Build modern, responsive websites using core web technologies.",
    description: "This course provides a practical introduction to modern web development, focusing on the core technologies used to build responsive and interactive websites. Students will learn how the web works and how HTML, CSS, and JavaScript come together to create structured, styled, and dynamic user experiences. The course emphasizes best practices in semantic markup, layout design, and client-side interactivity, with a strong focus on hands-on learning. Through guided exercises and real-world examples, students will build and enhance their own web pages while gaining an understanding of accessibility, responsiveness, and performance. By the end of the course, students will be confident in creating functional, visually appealing websites and prepared to explore more advanced front-end or full-stack development topics.",
    learningOutcomes: [
      "Create semantic HTML structures",
      "Style pages using CSS",
      "Build responsive layouts",
      "Add basic interactivity with JavaScript"
    ],
    topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    prerequisites: ["Basic computer skills"],
    recommended: true,
    image: "assets/img/thumbnails/web.png",
    teacherImage: "assets/img/people/alexpapadopoulos.jpg"
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
    description: "This course introduces the fundamental principles of computer networking and how devices communicate across local and global networks. Students will explore how data is transmitted, routed, and received, gaining an understanding of the building blocks that power the internet and modern digital communication. Key topics include IP addressing, network protocols, routing concepts, and the role of common network devices. The course balances theory with practical insight, helping students visualize how networks function in real-world scenarios. By the end of the course, students will be able to explain core networking concepts, identify network components, and understand how information flows between connected systems.",
    learningOutcomes: [
      "Understand how data is transmitted across networks",
      "Identify common network devices",
      "Explain basic networking protocols",
      "Describe how the internet works"
    ],
    topics: ["IP Addressing", "Routing", "Protocols", "Network Devices"],
    prerequisites: [],
    recommended: false,
    image: "assets/img/thumbnails/networks-basics.png",
    teacherImage: "assets/img/people/marianikolaou.jpg"
  },
  {
    id: 5,
    title: "Network Administration & Security",
    category: "Networks",
    level: "Intermediate",
    duration: "7 weeks",
    teacher: "Dimitris Karras",
    shortDescription: "Learn how to manage and secure modern computer networks.",
    description: "This course focuses on the practical and security-focused aspects of managing modern computer networks. Building on foundational networking knowledge, students will learn how to configure network services, manage traffic flow, and apply essential security measures to protect systems and data. Topics include network configuration, firewall setup, secure communication protocols, traffic monitoring, and common network vulnerabilities. Through real-world scenarios and guided examples, students will gain insight into how administrators maintain reliable and secure network infrastructures. By the end of the course, students will understand how to manage network environments, identify potential threats, and apply fundamental techniques to safeguard digital communication.",
    learningOutcomes: [
      "Configure and manage network services",
      "Apply basic network security measures",
      "Monitor network traffic",
      "Identify and mitigate common threats"
    ],
    topics: ["Firewalls", "Network Configuration", "Security Protocols", "Traffic Analysis"],
    prerequisites: ["Computer Networks Basics"],
    recommended: true,
    image: "assets/img/thumbnails/networks.png",
    teacherImage: "assets/img/people/dimitriskarras.jpg"
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
    description: "This course provides a comprehensive introduction to the core principles of cybersecurity, focusing on how digital systems are protected against modern threats. Students will explore common types of cyber attacks, including malware, phishing, and unauthorized access, as well as the techniques used to prevent, detect, and respond to them. The course covers essential security concepts such as authentication, encryption, access control, and security policies. Through practical examples and real-world scenarios, students will learn how vulnerabilities arise and how defensive strategies are applied to safeguard systems and data. By the end of the course, students will have a solid understanding of cybersecurity fundamentals and the role they play in maintaining secure digital environments.",
    learningOutcomes: [
      "Recognize common cyber threats",
      "Understand basic cryptography concepts",
      "Apply security best practices",
      "Evaluate system vulnerabilities"
    ],
    topics: ["Malware", "Encryption", "Authentication", "Security Policies"],
    prerequisites: ["Basic networking knowledge"],
    recommended: true,
    image: "assets/img/thumbnails/cybersecurity.png",
    teacherImage: "assets/img/people/sophiaanagnostou.jpg"
  },
  {
    id: 7,
    title: "Ethical Hacking & Penetration Testing",
    category: "Cybersecurity",
    level: "Advanced",
    duration: "8 weeks",
    teacher: "Andreas Konstantinou",
    shortDescription: "Learn ethical hacking techniques and penetration testing methods.",
    description: "This advanced course focuses on ethical hacking techniques and penetration testing methodologies used to identify and assess security vulnerabilities in computer systems and networks. Students will learn how attackers think and operate, while applying ethical and legal frameworks to test system defenses in a controlled environment. The course covers reconnaissance, vulnerability scanning, exploitation, and post-exploitation techniques, as well as reporting and remediation practices. Through hands-on labs and realistic scenarios, students will develop practical skills in assessing system security, understanding common attack vectors, and strengthening defenses. By the end of the course, students will be able to perform structured penetration tests and contribute to improving the security posture of modern digital infrastructures.",
    learningOutcomes: [
      "Understand ethical hacking principles",
      "Perform vulnerability assessments",
      "Conduct penetration testing",
      "Analyze security weaknesses"
    ],
    topics: ["Penetration Testing", "Vulnerability Scanning", "Exploits", "Security Tools"],
    prerequisites: ["Cybersecurity Essentials"],
    recommended: true,
    image: "assets/img/thumbnails/hacking.png",
    teacherImage: "assets/img/people/andreaskonstantinou.jpg"
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
    description: "This course introduces the fundamental concepts of databases and relational data management, focusing on how data is structured, stored, and retrieved efficiently. Students will learn the principles of relational database design, including tables, keys, relationships, and normalization. A strong emphasis is placed on practical SQL skills, enabling students to write queries to create, read, update, and delete data. Through guided examples and hands-on exercises, students will gain experience working with real-world datasets, understanding how databases support modern applications. By the end of the course, students will be able to design simple databases, write effective SQL queries, and understand the role of databases in software systems.",
    learningOutcomes: [
      "Understand relational database concepts",
      "Write basic SQL queries",
      "Design simple database schemas",
      "Manage data efficiently"
    ],
    topics: ["SQL", "Relational Models", "Tables", "Queries"],
    prerequisites: [],
    recommended: true,
    image: "assets/img/thumbnails/sql.png",
    teacherImage: "assets/img/people/elenistavrou.jpg"
  },
  {
    id: 9,
    title: "Database Design & Optimization",
    category: "Databases",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Christos Pappas",
    shortDescription: "Design efficient databases and optimize performance.",
    description: "This course focuses on designing efficient, scalable, and high-performance databases for real-world applications. Students will explore advanced database design principles, including normalization and denormalization strategies, schema modeling, and the use of primary and foreign keys to enforce data integrity. The course also introduces performance optimization techniques such as indexing, query optimization, and execution plan analysis. Through practical case studies and hands-on exercises, students will learn how to identify bottlenecks, improve query performance, and maintain database efficiency as systems grow. By the end of the course, students will be able to design well-structured database schemas and apply optimization techniques to support reliable and performant applications.",
    learningOutcomes: [
      "Design normalized database schemas",
      "Apply indexing strategies",
      "Optimize SQL queries",
      "Improve database performance"
    ],
    topics: ["Normalization", "Indexes", "Query Optimization", "Performance Tuning"],
    prerequisites: ["Databases & SQL Fundamentals"],
    recommended: true,
    teacherImage: "assets/img/people/christospappas.jpg"
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
    description: "This course provides an introduction to the fundamental concepts and techniques behind Artificial Intelligence. Students will explore how intelligent systems reason, learn, and make decisions by studying topics such as search algorithms, problem-solving strategies, knowledge representation, and basic machine learning concepts. Through real-world examples and guided exercises, the course explains how AI is applied in areas like recommendation systems, natural language processing, and autonomous agents. Emphasis is placed on understanding the logic and limitations of AI rather than advanced mathematics, making the course accessible while still conceptually rigorous. By the end of the course, students will have a solid foundation for further study in machine learning, data science, and intelligent systems.",
    learningOutcomes: [
      "Understand core AI concepts",
      "Apply basic search algorithms",
      "Explain reasoning and decision-making models",
      "Recognize real-world AI applications"
    ],
    topics: ["Search Algorithms", "Reasoning", "Decision Making", "AI Applications"],
    prerequisites: ["Introduction to Programming"],
    recommended: false,
    image: "assets/img/thumbnails/ai-intro.png",
    teacherImage: "assets/img/people/georgeioannou.jpg"
  },
  {
    id: 11,
    title: "Machine Learning Fundamentals",
    category: "Artificial Intelligence",
    level: "Intermediate",
    duration: "7 weeks",
    teacher: "Panagiotis Roussos",
    shortDescription: "Learn how machines identify patterns using data.",
    description: "This course introduces the core principles of machine learning, focusing on how systems can learn patterns and make predictions from data. Students will explore supervised and unsupervised learning approaches, understand how models are trained and evaluated, and examine common algorithms such as linear regression, decision trees, and clustering techniques. Through practical examples and conceptual exercises, the course explains key ideas like feature selection, overfitting, and model performance. Rather than emphasizing complex mathematics, the course prioritizes intuition and real-world applications, helping students understand how machine learning is used in areas such as recommendation systems, image recognition, and data-driven decision making. By the end of the course, students will be prepared to continue into more advanced AI and data science topics.",
    learningOutcomes: [
      "Understand supervised and unsupervised learning",
      "Train simple machine learning models",
      "Evaluate model performance",
      "Apply machine learning to real datasets"
    ],
    topics: ["Supervised Learning", "Unsupervised Learning", "Models", "Evaluation"],
    prerequisites: ["Introduction to Artificial Intelligence"],
    recommended: true,
    image: "assets/img/thumbnails/ai.png",
    teacherImage: "assets/img/people/panagiotisroussos.jpg"
  }
];
