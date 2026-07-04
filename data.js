/* =====================================================
   NEURALGATE — DATA STORE (PYQs + Lectures + Planner)
   ===================================================== */

const GV = {

  // ── GATE CSE PREVIOUS YEAR QUESTIONS ──
  pyqs: [
    {
      id: 1,
      year: 2024,
      subject: "Algorithms",
      topic: "Sorting",
      difficulty: "Medium",
      marks: 1,
      question: "What is the time complexity of the worst-case for QuickSort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      answer: 1,
      explanation: "QuickSort's worst case occurs when the pivot is always the smallest or largest element, causing O(n²) comparisons. This happens with sorted or reverse-sorted arrays when naïve pivot selection is used."
    },
    {
      id: 2,
      year: 2024,
      subject: "Operating Systems",
      topic: "Scheduling",
      difficulty: "Hard",
      marks: 2,
      question: "In a system with 3 processes, each requiring 4 resources with 10 total resources, can a safe state exist if each currently holds 2?",
      options: ["Yes, always", "No, deadlock is guaranteed", "Yes, if at least one process gets 2 more", "Depends on scheduling algorithm"],
      answer: 2,
      explanation: "Each process holds 2, total held = 6. Available = 10-6 = 4. Remaining needs per process = 2. One process can finish with 4 available (needs 2), releasing 4 more — cascading. Safe sequence exists."
    },
    {
      id: 3,
      year: 2023,
      subject: "DBMS",
      topic: "Normalization",
      difficulty: "Medium",
      marks: 1,
      question: "A relation R(A,B,C) with FDs A→B and B→C is in which normal form?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: 1,
      explanation: "A is the key. B→C creates a transitive dependency (A→B→C). The non-prime attribute C is transitively dependent on the key A, violating 3NF. So the relation is only in 2NF."
    },
    {
      id: 4,
      year: 2023,
      subject: "Computer Networks",
      topic: "TCP/IP",
      difficulty: "Easy",
      marks: 1,
      question: "Which layer of OSI model is responsible for end-to-end error recovery and flow control?",
      options: ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"],
      answer: 2,
      explanation: "The Transport Layer (Layer 4) provides end-to-end error recovery, flow control, and segmentation/reassembly. TCP at this layer uses acknowledgements and sequence numbers for reliability."
    },
    {
      id: 5,
      year: 2023,
      subject: "Theory of Computation",
      topic: "Automata",
      difficulty: "Hard",
      marks: 2,
      question: "The language {aⁿbⁿcⁿ | n ≥ 1} is:",
      options: ["Regular", "Context-Free", "Context-Sensitive", "Recursively Enumerable only"],
      answer: 2,
      explanation: "This language requires counting three equal groups simultaneously. A PDA can handle two equal counts, but not three. A Linear Bounded Automaton (context-sensitive) can recognize it. It is CSL but not CFL."
    },
    {
      id: 6,
      year: 2022,
      subject: "Data Structures",
      topic: "Trees",
      difficulty: "Medium",
      marks: 1,
      question: "The maximum number of nodes in a binary tree of height h (root at height 0) is:",
      options: ["2h", "2h+1 - 1", "2h - 1", "h²"],
      answer: 1,
      explanation: "A complete binary tree of height h has at most 2⁰ + 2¹ + ... + 2ʰ = 2ʰ⁺¹ - 1 nodes. This is the geometric series sum for a full binary tree."
    },
    {
      id: 7,
      year: 2022,
      subject: "Algorithms",
      topic: "Dynamic Programming",
      difficulty: "Hard",
      marks: 2,
      question: "Longest Common Subsequence of 'ABCBDAB' and 'BDCAB' is of length:",
      options: ["3", "4", "5", "6"],
      answer: 1,
      explanation: "The LCS is 'BCAB' or 'BDAB' of length 4. Using the standard LCS dynamic programming table, the maximum matching subsequence length between the two strings is 4."
    },
    {
      id: 8,
      year: 2022,
      subject: "Digital Logic",
      topic: "Boolean Algebra",
      difficulty: "Easy",
      marks: 1,
      question: "What is the simplified form of F = A'B + AB' + AB?",
      options: ["A + B", "A'B", "AB'", "A' + B"],
      answer: 0,
      explanation: "F = A'B + AB' + AB. Group AB' + AB = A(B'+B) = A. Group A'B + AB = B(A'+A) = B. So F = A + B. This is confirmed by truth table: F=0 only when A=0,B=0."
    },
    {
      id: 9,
      year: 2021,
      subject: "Operating Systems",
      topic: "Memory Management",
      difficulty: "Medium",
      marks: 2,
      question: "In a system with page size 4KB and logical address 32 bits, the number of entries in page table is:",
      options: ["2¹⁰", "2²⁰", "2¹²", "2³²"],
      answer: 1,
      explanation: "Page size = 4KB = 2¹² bytes. Page offset bits = 12. Page number bits = 32 - 12 = 20. Number of page table entries = 2²⁰ = 1,048,576."
    },
    {
      id: 10,
      year: 2021,
      subject: "DBMS",
      topic: "SQL",
      difficulty: "Easy",
      marks: 1,
      question: "Which SQL clause filters groups created by GROUP BY?",
      options: ["WHERE", "HAVING", "FILTER", "SELECT"],
      answer: 1,
      explanation: "HAVING clause is used to filter groups after GROUP BY aggregation. WHERE filters individual rows before grouping. HAVING can use aggregate functions like COUNT, SUM, AVG."
    },
    {
      id: 11,
      year: 2021,
      subject: "Computer Networks",
      topic: "Routing",
      difficulty: "Medium",
      marks: 1,
      question: "Dijkstra's algorithm is used for:",
      options: ["Minimum spanning tree", "Shortest path routing", "Flooding", "Distance vector routing"],
      answer: 1,
      explanation: "Dijkstra's algorithm finds the shortest path from a source to all other nodes. It is used in Link State Routing protocols like OSPF. It is greedy and works with non-negative edge weights."
    },
    {
      id: 12,
      year: 2020,
      subject: "Algorithms",
      topic: "Graph",
      difficulty: "Medium",
      marks: 1,
      question: "Topological sort is applicable to:",
      options: ["Undirected graphs", "Directed Acyclic Graphs", "Weighted graphs", "Trees only"],
      answer: 1,
      explanation: "Topological sort is defined only for Directed Acyclic Graphs (DAGs). It produces a linear ordering of vertices such that for every directed edge u→v, u appears before v."
    },
    {
      id: 13,
      year: 2020,
      subject: "Theory of Computation",
      topic: "Turing Machine",
      difficulty: "Hard",
      marks: 2,
      question: "Which of the following is undecidable?",
      options: ["Membership problem for DFA", "Emptiness of CFL", "Halting problem for Turing Machines", "Equivalence of DFAs"],
      answer: 2,
      explanation: "The Halting Problem (will a TM halt on a given input?) is famously undecidable as proven by Turing. Membership for DFA, CFL emptiness, and DFA equivalence are all decidable problems."
    },
    {
      id: 14,
      year: 2019,
      subject: "Data Structures",
      topic: "Hashing",
      difficulty: "Easy",
      marks: 1,
      question: "Average case time complexity for search in a Hash Table is:",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      answer: 2,
      explanation: "With a good hash function and low load factor, hash table search/insert/delete are O(1) on average. Worst case is O(n) due to collisions causing linear chaining."
    },
    {
      id: 15,
      year: 2019,
      subject: "Digital Logic",
      topic: "Flip-Flops",
      difficulty: "Medium",
      marks: 1,
      question: "A T flip-flop with T=1 will:",
      options: ["Set Q to 1", "Reset Q to 0", "Toggle Q", "Hold Q unchanged"],
      answer: 2,
      explanation: "A Toggle (T) flip-flop toggles its output when T=1. If T=0, the output holds its current state. T flip-flops are commonly used in counters and frequency dividers."
    },
    {
      id: 16,
      year: 2018,
      subject: "Algorithms",
      topic: "Greedy",
      difficulty: "Medium",
      marks: 1,
      question: "Which problem cannot be solved optimally by Greedy approach?",
      options: ["Activity Selection", "Fractional Knapsack", "0/1 Knapsack", "Prim's MST"],
      answer: 2,
      explanation: "0/1 Knapsack cannot be solved optimally by greedy because items cannot be broken — local optimal choices don't guarantee global optimum. It requires dynamic programming. Fractional knapsack is greedy-solvable."
    },
    {
      id: 17,
      year: 2018,
      subject: "DBMS",
      topic: "Transactions",
      difficulty: "Medium",
      marks: 2,
      question: "Which isolation level prevents phantom reads?",
      options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      answer: 3,
      explanation: "Serializable isolation level prevents phantom reads by using range locks or predicate locks. Repeatable Read prevents dirty and non-repeatable reads but not phantom reads. Serializable is the strictest isolation level."
    },
    {
      id: 18,
      year: 2018,
      subject: "Operating Systems",
      topic: "Deadlock",
      difficulty: "Hard",
      marks: 2,
      question: "Banker's algorithm is used for:",
      options: ["Deadlock detection", "Deadlock avoidance", "Deadlock recovery", "Deadlock prevention"],
      answer: 1,
      explanation: "Banker's Algorithm is a deadlock avoidance algorithm. It grants resource requests only if the resulting state is safe. It requires prior knowledge of maximum resource needs of all processes."
    }
  ],

  // ── VIDEO LECTURE DATA ──
  lectures: [
    // ── ALGORITHMS ──
    { id: 1,  subject: "Algorithms", topic: "Asymptotic Analysis & Big-O Notation",    channel: "Abdul Bari",  instructor: "Abdul Bari",           duration: "32 min",   ytId: "0IAPZzGSbME", level: "Foundation" },
    { id: 2,  subject: "Algorithms", topic: "Sorting Algorithms — Complete Series",     channel: "Abdul Bari",  instructor: "Abdul Bari",           duration: "1h 12min", ytId: "pkkFqlG0Cf4", level: "Foundation" },
    { id: 3,  subject: "Algorithms", topic: "Dynamic Programming — Full Course",        channel: "PW",          instructor: "PW GATE Wallah",       duration: "3h 20min", ytId: "tyB0ztf0DNY", level: "Intermediate" },
    { id: 4,  subject: "Algorithms", topic: "Graph Algorithms — BFS, DFS, Dijkstra",   channel: "Abdul Bari",  instructor: "Abdul Bari",           duration: "38 min",   ytId: "pcKY4hjDrxk", level: "Intermediate" },
    { id: 5,  subject: "Algorithms", topic: "Greedy Algorithms — GATE Lectures",        channel: "GFG",         instructor: "GeeksForGeeks",        duration: "1h 45min", ytId: "ARvQcqJ_-lU", level: "Intermediate" },
    { id: 6,  subject: "Algorithms", topic: "NPTEL — Design & Analysis of Algorithms",  channel: "NPTEL",       instructor: "Prof. Madhavan Mukund (IIT Madras)", duration: "40 min each", ytId: "oiVywd1E9D0", level: "Foundation" },
    { id: 7,  subject: "Algorithms", topic: "Divide & Conquer + Recurrences",           channel: "PW",          instructor: "PW GATE Wallah",       duration: "2h 10min", ytId: "1smMSJQqBLM", level: "Foundation" },

    // ── DATA STRUCTURES ──
    { id: 8,  subject: "Data Structures", topic: "Linked Lists — Complete Deep Dive",   channel: "Neso",        instructor: "Neso Academy",         duration: "2h 05min", ytId: "58YbpRDc4yw", level: "Foundation" },
    { id: 9,  subject: "Data Structures", topic: "Trees — Binary Trees & BST",          channel: "Abdul Bari",  instructor: "Abdul Bari",           duration: "55 min",   ytId: "oSWTXtMglKE", level: "Foundation" },
    { id: 10, subject: "Data Structures", topic: "Heaps & Priority Queues",             channel: "Jenny",       instructor: "Jenny's Lectures",     duration: "40 min",   ytId: "HqPJF2L5h9U", level: "Intermediate" },
    { id: 11, subject: "Data Structures", topic: "Data Structures Full Course",         channel: "GFG",         instructor: "GeeksForGeeks",        duration: "4h 30min", ytId: "RBSGKlAvoiM", level: "Foundation" },
    { id: 12, subject: "Data Structures", topic: "Hashing — Concepts & Collision",      channel: "PW",          instructor: "PW GATE Wallah",       duration: "1h 20min", ytId: "Fv4B-JR7Tdc", level: "Intermediate" },
    { id: 13, subject: "Data Structures", topic: "NPTEL — Programming, Data Structures & Algorithms", channel: "NPTEL", instructor: "Prof. Naveen Garg (IIT Delhi)", duration: "50 min each", ytId: "A2bblVCA8N4", level: "Foundation" },

    // ── OPERATING SYSTEMS ──
    { id: 14, subject: "Operating Systems", topic: "Process Scheduling — All Algorithms", channel: "Neso",      instructor: "Neso Academy",         duration: "1h 18min", ytId: "EWkQl0n0w5M", level: "Foundation" },
    { id: 15, subject: "Operating Systems", topic: "Memory Management & Paging",          channel: "GS",        instructor: "Gate Smashers",        duration: "52 min",   ytId: "w-kGEUWrySY", level: "Intermediate" },
    { id: 16, subject: "Operating Systems", topic: "Deadlocks — Detection & Avoidance",   channel: "Neso",      instructor: "Neso Academy",         duration: "35 min",   ytId: "s2DVEem6y9s", level: "Intermediate" },
    { id: 17, subject: "Operating Systems", topic: "OS Complete GATE Course",             channel: "PW",        instructor: "PW GATE Wallah",       duration: "8h 00min", ytId: "dOiA2nNJpc0", level: "Foundation" },
    { id: 18, subject: "Operating Systems", topic: "NPTEL — Operating Systems",           channel: "NPTEL",     instructor: "Prof. Chester Rebeiro (IIT Madras)", duration: "45 min each", ytId: "AZ1e8bYd1B0", level: "Foundation" },
    { id: 19, subject: "Operating Systems", topic: "OS Concepts — GFG Full Lecture",      channel: "GFG",       instructor: "GeeksForGeeks",        duration: "5h 15min", ytId: "mXw3LLAM8WY", level: "Foundation" },

    // ── DBMS ──
    { id: 20, subject: "DBMS", topic: "ER Diagrams & Relational Model",                  channel: "GS",         instructor: "Gate Smashers",        duration: "48 min",   ytId: "T7AxatXB7SU", level: "Foundation" },
    { id: 21, subject: "DBMS", topic: "Normalization — 1NF to BCNF",                     channel: "Neso",       instructor: "Neso Academy",         duration: "1h 02min", ytId: "mUtAPbb1ECQ", level: "Intermediate" },
    { id: 22, subject: "DBMS", topic: "SQL Complete Masterclass",                        channel: "GFG",        instructor: "GeeksForGeeks",        duration: "3h 30min", ytId: "HXV3zeQKqGY", level: "Foundation" },
    { id: 23, subject: "DBMS", topic: "DBMS Full GATE Preparation",                      channel: "PW",         instructor: "PW GATE Wallah",       duration: "6h 00min", ytId: "dl00fOOYLOM", level: "Foundation" },
    { id: 24, subject: "DBMS", topic: "NPTEL — Database Management Systems",             channel: "NPTEL",      instructor: "Prof. D. Janakiram (IIT Madras)", duration: "1h each", ytId: "4Z9KEBexzcM", level: "Intermediate" },
    { id: 25, subject: "DBMS", topic: "Transactions & Concurrency Control",              channel: "GS",         instructor: "Gate Smashers",        duration: "55 min",   ytId: "pomxJOFVcQs", level: "Intermediate" },

    // ── COMPUTER NETWORKS ──
    { id: 26, subject: "Computer Networks", topic: "OSI & TCP/IP Model In Depth",        channel: "Neso",       instructor: "Neso Academy",         duration: "42 min",   ytId: "vv4y_uOneC0", level: "Foundation" },
    { id: 27, subject: "Computer Networks", topic: "TCP/IP, Routing & Congestion",       channel: "GS",         instructor: "Gate Smashers",        duration: "1h 10min", ytId: "OTwp3yl35t4", level: "Intermediate" },
    { id: 28, subject: "Computer Networks", topic: "CN Full GATE Course — PW",           channel: "PW",         instructor: "PW GATE Wallah",       duration: "5h 30min", ytId: "t3Q3EFNkTNE", level: "Foundation" },
    { id: 29, subject: "Computer Networks", topic: "NPTEL — Computer Networks",          channel: "NPTEL",      instructor: "Prof. Sujoy Ghosh (IIT Kharagpur)", duration: "55 min each", ytId: "UXMIxCYZu8o", level: "Intermediate" },
    { id: 30, subject: "Computer Networks", topic: "Computer Networks — GFG Series",     channel: "GFG",        instructor: "GeeksForGeeks",        duration: "4h 00min", ytId: "qiQR5rTSshk", level: "Foundation" },

    // ── THEORY OF COMPUTATION ──
    { id: 31, subject: "Theory of Computation", topic: "DFA — Construction & Examples",   channel: "Neso",      instructor: "Neso Academy",         duration: "58 min",   ytId: "40i4PKpM0cI", level: "Foundation" },
    { id: 32, subject: "Theory of Computation", topic: "CFG & Pushdown Automata",         channel: "GS",        instructor: "Gate Smashers",        duration: "45 min",   ytId: "Qleswiu8mHs", level: "Intermediate" },
    { id: 33, subject: "Theory of Computation", topic: "TOC Full GATE Series — PW",       channel: "PW",        instructor: "PW GATE Wallah",       duration: "4h 00min", ytId: "58oxAY_pqiI", level: "Foundation" },
    { id: 34, subject: "Theory of Computation", topic: "NPTEL — Theory of Computation",   channel: "NPTEL",     instructor: "Prof. Kamala Krithivasan (IIT Madras)", duration: "1h each", ytId: "eqCkkC9A77A", level: "Intermediate" },
    { id: 35, subject: "Theory of Computation", topic: "Turing Machines & Decidability",  channel: "GFG",       instructor: "GeeksForGeeks",        duration: "2h 15min", ytId: "dNRDvLACg5Q", level: "Intermediate" },

    // ── DIGITAL LOGIC ──
    { id: 36, subject: "Digital Logic", topic: "Boolean Algebra & K-Maps",               channel: "Neso",       instructor: "Neso Academy",         duration: "1h 05min", ytId: "59BbncMjL8I", level: "Foundation" },
    { id: 37, subject: "Digital Logic", topic: "Sequential Circuits & Flip-Flops",       channel: "Jenny",      instructor: "Jenny's Lectures",     duration: "50 min",   ytId: "hjR3gEDvjz4", level: "Intermediate" },
    { id: 38, subject: "Digital Logic", topic: "Digital Logic — Complete GATE Series",   channel: "PW",         instructor: "PW GATE Wallah",       duration: "3h 30min", ytId: "m4jCmE7aFr8", level: "Foundation" },
    { id: 39, subject: "Digital Logic", topic: "NPTEL — Digital Circuits & Systems",     channel: "NPTEL",      instructor: "Prof. S. Srinivasan (IIT Madras)", duration: "50 min each", ytId: "CeD2L6KbtVM", level: "Foundation" },

    // ── DISCRETE MATHS ──
    { id: 40, subject: "Discrete Maths", topic: "Propositional Logic & Proofs",           channel: "MIT",        instructor: "MIT OpenCourseWare",   duration: "1h 20min", ytId: "L3LMbpZIKhQ", level: "Foundation" },
    { id: 41, subject: "Discrete Maths", topic: "Graph Theory Fundamentals",              channel: "Abdul Bari", instructor: "Abdul Bari",           duration: "55 min",   ytId: "pcKY4hjDrxk", level: "Intermediate" },
    { id: 42, subject: "Discrete Maths", topic: "Discrete Maths — GFG Full Series",       channel: "GFG",        instructor: "GeeksForGeeks",        duration: "3h 00min", ytId: "2SpuBqvNjHI", level: "Foundation" },
    { id: 43, subject: "Discrete Maths", topic: "NPTEL — Discrete Mathematics",           channel: "NPTEL",      instructor: "Prof. Sudarshan Iyengar (IIT Ropar)", duration: "45 min each", ytId: "MYm95OkgDL8", level: "Foundation" },

    // ── COMPUTER ARCHITECTURE ──
    { id: 44, subject: "Computer Architecture", topic: "ISA & Pipeline Architecture",     channel: "GS",         instructor: "Gate Smashers",        duration: "44 min",   ytId: "FZGugFqdr60", level: "Foundation" },
    { id: 45, subject: "Computer Architecture", topic: "NPTEL — Computer Architecture",   channel: "NPTEL",      instructor: "Prof. Anshul Kumar (IIT Delhi)", duration: "1h each", ytId: "9nuAjYRbITQ", level: "Intermediate" },
    { id: 46, subject: "Computer Architecture", topic: "COA Full GATE Series — PW",       channel: "PW",         instructor: "PW GATE Wallah",       duration: "2h 45min", ytId: "cPdISj8SXAA", level: "Foundation" }
  ],

  // ── 12-WEEK STUDY PLAN ──
  studyPlan: [
    { week: 1, title: "Foundation Setup", topics: ["Discrete Maths: Logic & Sets", "Discrete Maths: Relations & Functions", "Digital Logic: Boolean Algebra & K-Maps"], status: "pending" },
    { week: 2, title: "Digital Logic & Number Systems", topics: ["Number Systems & Conversion", "Combinational Circuits", "Sequential Circuits & Flip-Flops"], status: "pending" },
    { week: 3, title: "Data Structures – Linear", topics: ["Arrays, Stacks & Queues", "Linked Lists", "Hashing & Hash Tables"], status: "pending" },
    { week: 4, title: "Data Structures – Non-Linear", topics: ["Binary Trees & BST", "Heaps & Priority Queues", "Graphs – Representation"], status: "pending" },
    { week: 5, title: "Algorithm Design I", topics: ["Asymptotic Analysis & Recurrences", "Sorting Algorithms", "Searching & Selection"], status: "pending" },
    { week: 6, title: "Algorithm Design II", topics: ["Divide & Conquer", "Dynamic Programming", "Greedy Algorithms"], status: "pending" },
    { week: 7, title: "Algorithm Design III + TOC", topics: ["Graph Algorithms (BFS, DFS, MST)", "DFA & NFA Construction", "Regular Languages & Grammars"], status: "pending" },
    { week: 8, title: "Theory of Computation", topics: ["Context-Free Languages & PDA", "Turing Machines", "Decidability & Complexity"], status: "pending" },
    { week: 9, title: "Operating Systems I", topics: ["Process Concepts & Scheduling", "Synchronization & Deadlocks", "Memory Management"], status: "pending" },
    { week: 10, title: "Operating Systems II + DBMS I", topics: ["File Systems & I/O", "ER Model & Relational Algebra", "SQL & Normalization"], status: "pending" },
    { week: 11, title: "DBMS II + Computer Networks", topics: ["Transactions & Concurrency", "OSI Model & TCP/IP", "Routing & Congestion Control"], status: "pending" },
    { week: 12, title: "Revision + Mock Tests", topics: ["Full Syllabus Revision", "GATE PYQs 2019–2024", "3 Full Mock Tests + Analysis"], status: "pending" }
  ],

  // ── AUTH HELPERS ──
  getUser() {
    const u = localStorage.getItem('gv_user');
    return u ? JSON.parse(u) : null;
  },

  setUser(userData) {
    localStorage.setItem('gv_user', JSON.stringify(userData));
  },

  logout() {
    localStorage.removeItem('gv_user');
    window.location.href = 'index.html';
  },

  requireAuth() {
    if (!this.getUser()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  // ── USER DATA HELPERS ──
  getUserData(key, defaultVal) {
    const u = this.getUser();
    if (!u) return defaultVal;
    const store = JSON.parse(localStorage.getItem(`gv_data_${u.id}`) || '{}');
    return store[key] !== undefined ? store[key] : defaultVal;
  },

  setUserData(key, val) {
    const u = this.getUser();
    if (!u) return;
    const store = JSON.parse(localStorage.getItem(`gv_data_${u.id}`) || '{}');
    store[key] = val;
    localStorage.setItem(`gv_data_${u.id}`, JSON.stringify(store));
  },

  // ── DAYS LEFT CALCULATOR ──
  getDaysLeft() {
    const gateDate = new Date('2027-02-07');
    const today = new Date();
    const diff = gateDate - today;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  },

  // ── DISCUSSION HELPERS ──
  getPosts() {
    return JSON.parse(localStorage.getItem('gv_posts') || '[]');
  },

  addPost(post) {
    const posts = this.getPosts();
    posts.unshift({ ...post, id: Date.now(), timestamp: new Date().toISOString(), upvotes: 0, replies: [], resolved: false });
    localStorage.setItem('gv_posts', JSON.stringify(posts));
    return posts[0];
  },

  savePosts(posts) {
    localStorage.setItem('gv_posts', JSON.stringify(posts));
  },

  // ── NAVBAR RENDER ──
  renderNavbar(activePage) {
    const user = this.getUser();
    const pages = [
      { key: 'dashboard', label: 'Dashboard', href: 'dashboard.html' },
      { key: 'lectures', label: 'Lectures', href: 'lectures.html' },
      { key: 'pyqs', label: 'PYQs', href: 'pyqs.html' },
      { key: 'discuss', label: 'Discuss', href: 'discuss.html' },
      { key: 'planner', label: 'Planner', href: 'planner.html' },
      { key: 'resources', label: 'Resources', href: 'resources.html' }
    ];

    const linksHTML = pages.map(p => `<li><a href="${p.href}" class="${activePage === p.key ? 'active' : ''}">${p.label}</a></li>`).join('');

    const userHTML = user
      ? `<div class="nav-user-badge" onclick="GV.logout()">
           <div class="nav-avatar">${user.name[0].toUpperCase()}</div>
           <span class="nav-username">${user.name.split(' ')[0]}</span>
           <span style="font-size:12px; color:var(--text-muted)">↗</span>
         </div>`
      : `<a href="login.html" class="btn btn-outline btn-sm">Login</a>
         <a href="register.html" class="btn btn-primary btn-sm">Join Free</a>`;

    return `
      <div class="bg-mesh"></div>
      <div class="bg-grid"></div>
      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="nav-brand">
            <div class="nav-brand-icon">🧠</div>
            Neural<span>GATE</span>
          </a>
          <ul class="nav-links">${linksHTML}</ul>
          <div class="nav-actions">${userHTML}</div>
        </div>
      </nav>`;
  },

  // ── FOOTER RENDER ──
  renderFooter() {
    return `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="nav-brand" style="margin-bottom:12px;">
                <div class="nav-brand-icon">🧠</div>
                Neural<span style="color:var(--accent-light)">GATE</span>
              </div>
              <p class="footer-brand-desc">The smartest GATE CSE prep platform. Curated lectures, real PYQs, live forum & AI-structured 12-week plans. 100% free.</p>
            </div>
            <div class="footer-col">
              <h4>Prepare</h4>
              <ul>
                <li><a href="lectures.html">Video Lectures</a></li>
                <li><a href="pyqs.html">PYQ Bank</a></li>
                <li><a href="planner.html">Study Planner</a></li>
                <li><a href="resources.html">Resources</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Community</h4>
              <ul>
                <li><a href="discuss.html">Discussion Forum</a></li>
                <li><a href="register.html">Join as Student</a></li>
                <li><a href="dashboard.html">My Dashboard</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>GATE Info</h4>
              <ul>
                <li><a href="resources.html">Syllabus 2027</a></li>
                <li><a href="resources.html">Important Dates</a></li>
                <li><a href="resources.html">Exam Pattern</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 NeuralGATE — Built for GATE Aspirants 🧠</span>
            <span>GATE 2027 | CSE Preparation Portal | Free Forever</span>
          </div>
        </div>
      </footer>`;
  }
};
