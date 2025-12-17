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
    topics: ["Python", "Variables", "Conditions", "Loops", "Functions"],
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
    topics: ["Java", "Classes", "Inheritance", "Interfaces", "Polymorphism"],
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
  {
    id: 4,
    title: "Data Structures & Algorithms",
    category: "Programming",
    level: "Intermediate",
    duration: "7 weeks",
    teacher: "Katerina Louka",
    shortDescription: "Learn how data is organized and how efficient algorithms are designed.",
    description: "This course introduces the fundamental data structures and algorithms that form the backbone of efficient software development. Students will explore how data can be organized, stored, and manipulated using structures such as arrays, linked lists, stacks, queues, trees, and graphs. The course also covers essential algorithmic techniques including searching, sorting, recursion, and basic complexity analysis. Through clear explanations and practical examples, students will learn how to evaluate algorithm efficiency and make informed design decisions. By the end of the course, students will be able to choose appropriate data structures, implement common algorithms, and reason about performance in real-world programming scenarios.",
    learningOutcomes: [
      "Understand common data structures",
      "Implement basic algorithms",
      "Analyze algorithm efficiency",
      "Apply problem-solving strategies"
    ],
    topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Sorting", "Searching", "Big-O"],
    prerequisites: ["Introduction to Programming"],
    recommended: true,
    //image: "assets/img/thumbnails/algorithms.png",
    teacherImage: "assets/img/people/katerinalouka.jpg"
  },
  {
    id: 5,
    title: "Advanced Python Programming",
    category: "Programming",
    level: "Advanced",
    duration: "8 weeks",
    teacher: "Dimitra Kalogirou",
    shortDescription: "Write efficient, clean, and scalable Python applications.",
    description: "This course builds on existing Python knowledge to explore advanced programming techniques and best practices. Students will learn how to write more expressive and efficient code using advanced language features such as decorators, generators, context managers, and functional programming concepts. The course also introduces performance considerations, error handling strategies, and code organization patterns used in larger Python projects. Through practical examples and structured exercises, students will gain confidence in writing maintainable, scalable Python applications suitable for professional development environments. By the end of the course, students will be able to design robust Python programs and understand how to optimize and structure complex codebases.",
    learningOutcomes: [
      "Use advanced Python language features",
      "Write clean and maintainable code",
      "Optimize Python program performance",
      "Structure larger Python applications"
    ],
    topics: ["Python", "Decorators", "Generators", "Context Managers", "Performance"],
    prerequisites: ["Introduction to Programming"],
    recommended: true,
    //image: "assets/img/thumbnails/advanced-python.png",
    teacherImage: "assets/img/people/dimitrakalogirou.jpg"
  },

  /* -------------------- NETWORKS -------------------- */
  {
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    title: "Wireless Networks & Wi-Fi Technologies",
    category: "Networks",
    level: "Intermediate",
    duration: "5 weeks",
    teacher: "Ioannis Petrou",
    shortDescription: "Understand how wireless networks operate and are secured.",
    description: "This course explores the principles and technologies behind modern wireless networking, with a focus on Wi-Fi standards and real-world deployment scenarios. Students will learn how wireless communication works, how access points and clients interact, and how data is transmitted over radio frequencies. The course covers Wi-Fi standards, signal propagation, interference, and basic wireless security mechanisms. Through practical examples, students will gain insight into designing, configuring, and troubleshooting wireless networks in home, enterprise, and public environments. By the end of the course, students will understand how wireless networks are built and how to ensure reliable and secure connectivity.",
    learningOutcomes: [
      "Understand wireless networking principles",
      "Explain Wi-Fi standards and architectures",
      "Identify common wireless issues",
      "Apply basic wireless security practices"
    ],
    topics: ["Wi-Fi Standards", "Wireless Signals", "Access Points", "Interference", "Wireless Security"],
    prerequisites: ["Computer Networks Basics"],
    recommended: false,
    //image: "assets/img/thumbnails/wireless-networks.png",
    teacherImage: "assets/img/people/ioannispetrou.jpg"
  },
  {
    id: 9,
    title: "Routing & Switching Concepts",
    category: "Networks",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Stavros Michailidis",
    shortDescription: "Learn how routers and switches move data across networks.",
    description: "This course focuses on the core concepts behind routing and switching, which are essential for building and managing modern computer networks. Students will learn how switches forward traffic within local networks and how routers connect different networks together. Topics include VLANs, routing tables, static and dynamic routing, and basic network segmentation. The course emphasizes conceptual understanding supported by practical scenarios, helping students visualize how data flows across complex network infrastructures. By the end of the course, students will be able to explain routing and switching behavior and understand how network devices collaborate to deliver data efficiently.",
    learningOutcomes: [
      "Understand switching and routing functions",
      "Explain VLAN and subnet concepts",
      "Describe routing table behavior",
      "Analyze network traffic flow"
    ],
    topics: ["Switching", "Routing", "VLANs", "Subnets", "Routing Tables"],
    prerequisites: ["Computer Networks Basics"],
    recommended: true,
    //image: "assets/img/thumbnails/routing-switching.png",
    teacherImage: "assets/img/people/stavrosmichailidis.jpg"
  },
  {
    id: 10,
    title: "Network Troubleshooting & Monitoring",
    category: "Networks",
    level: "Advanced",
    duration: "6 weeks",
    teacher: "Eftychia Karamanou",
    shortDescription: "Diagnose, monitor, and resolve network performance issues.",
    description: "This advanced course focuses on identifying, analyzing, and resolving common network problems in real-world environments. Students will learn systematic troubleshooting methodologies and how to use monitoring tools to observe network performance and detect anomalies. Topics include latency, packet loss, bandwidth analysis, log inspection, and fault isolation. The course also introduces proactive monitoring strategies that help prevent issues before they impact users. Through realistic scenarios and guided exercises, students will develop the skills needed to maintain stable and efficient network infrastructures. By the end of the course, students will be able to diagnose network issues and apply effective remediation techniques.",
    learningOutcomes: [
      "Apply structured troubleshooting methodologies",
      "Monitor network performance metrics",
      "Identify causes of network failures",
      "Resolve connectivity and performance issues"
    ],
    topics: ["Network Monitoring", "Troubleshooting", "Logs", "Performance Metrics", "Fault Isolation"],
    prerequisites: ["Network Administration & Security"],
    recommended: true,
    //image: "assets/img/thumbnails/network-troubleshooting.png",
    teacherImage: "assets/img/people/eftychiakaramanou.jpg"
  },
  /* -------------------- CYBERSECURITY -------------------- */
  {
    id: 11,
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
    id: 12,
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
  {
    id: 13,
    title: "Digital Forensics Fundamentals",
    category: "Cybersecurity",
    level: "Intermediate",
    duration: "6 weeks",
    teacher: "Nikos Theodorou",
    shortDescription: "Learn how digital evidence is collected and analyzed.",
    description: "This course introduces the core principles and practices of digital forensics, focusing on how digital evidence is identified, preserved, and analyzed during cybersecurity investigations. Students will explore the forensic process, including evidence handling, chain of custody, and analysis techniques for computers, storage devices, and basic network data. The course emphasizes legal and ethical considerations while demonstrating how forensic methods are applied in incident response and investigations. Through realistic scenarios and guided examples, students will gain insight into how forensic professionals reconstruct events and support security decision-making. By the end of the course, students will understand the role of digital forensics in cybersecurity and be able to explain fundamental investigation techniques.",
    learningOutcomes: [
      "Understand digital forensics principles",
      "Identify and preserve digital evidence",
      "Explain forensic investigation workflows",
      "Recognize legal and ethical constraints"
    ],
    topics: ["Digital Evidence", "Forensics Process", "Chain of Custody", "Incident Analysis"],
    prerequisites: ["Cybersecurity Essentials"],
    recommended: false,
    //image: "assets/img/thumbnails/digital-forensics.png",
    teacherImage: "assets/img/people/nikostheodorou.jpg"
  },
  {
    id: 14,
    title: "Security Operations & Incident Response",
    category: "Cybersecurity",
    level: "Advanced",
    duration: "7 weeks",
    teacher: "Eirini Papakonstantinou",
    shortDescription: "Detect, analyze, and respond to cybersecurity incidents.",
    description: "This advanced course focuses on the operational side of cybersecurity, teaching students how organizations detect, analyze, and respond to security incidents in real time. Students will learn about Security Operations Centers (SOCs), monitoring strategies, alert triage, and incident response frameworks. The course covers the full incident lifecycle, from detection and containment to eradication and recovery, as well as post-incident analysis and reporting. Through realistic scenarios and case-based learning, students will gain insight into how security teams coordinate responses to threats and minimize impact. By the end of the course, students will be able to explain SOC operations and apply structured incident response procedures in modern security environments.",
    learningOutcomes: [
      "Understand SOC operations",
      "Analyze security alerts and incidents",
      "Apply incident response frameworks",
      "Coordinate containment and recovery actions"
    ],
    topics: ["SOC", "Incident Response", "Threat Detection", "Security Monitoring", "Response Frameworks"],
    prerequisites: ["Ethical Hacking & Penetration Testing"],
    recommended: true,
    //image: "assets/img/thumbnails/incident-response.png",
    teacherImage: "assets/img/people/eirinipapakonstantinou.jpg"
  },
  /* -------------------- DATABASES -------------------- */
  {
    id: 15,
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
    id: 16,
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
    topics: ["SQL", "Normalization", "Indexes", "Query Optimization", "Performance Tuning"],
    prerequisites: ["Databases & SQL Fundamentals"],
    recommended: true,
    teacherImage: "assets/img/people/christospappas.jpg"
  },
  /* -------------------- AI & DATA -------------------- */
  {
    id: 17,
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
    id: 18,
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