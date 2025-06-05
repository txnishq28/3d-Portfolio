import { 
    rinex,
    drdo,
    afame,
    LinkedIn , 
    leetcode , 
    chess , 
    banking , 
    complaint , 
    notification , 
    portfolio , 
    stock , 
    todo , 
    maps 
} from "../assets/images";


import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "Software Development Intern",
        company_name: "CFEES-DRDO , Delhi",
        icon: drdo,
        iconBg: "#accbe1",
        date: "July 2024 - September 2024",
        points: [
            "Contributed to the design and implementation of software solutions, achieving a 15% performance improvement in critical applications.",
            "Collaborated with a team of 5 developers on code development, testing, and debugging.",
            "Reduced bugs by 30% through rigorous testing practices and active participation in 10+ code reviews.",
            "Enhanced team efficiency by 25% by streamlining agile workflows and optimizing development processes.",
        ],
    },
    {
        title: "Data Analyst Intern",
        company_name: "Afame Technologies , Bengaluru",
        icon: afame,
        iconBg: "#fbc3bc",
        date: "March 2024 - April 2024",
        points: [
            "Built an advanced Power BI sales dashboard by consolidating multiple datasets, boosting sales monitoring efficiency by 30% through interactive charts and dynamic filtering.",
            "Conducted data analysis and achieved 85% model prediction accuracy using machine learning techniques such as feature engineering and model optimization.",
            "Improved model performance by 20% over baseline models.",
            "Utilized Python libraries like Pandas for data processing and visualizations, delivering actionable business insights.",
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "Rinex.AI , Bengaluru",
        icon: rinex,
        iconBg: "#b7e4c7",
        date: "September 2023 - October 2023",
        points: [
            "Created predictive models using Python and SQL, analyzing over 10,000 data points and improving forecast accuracy by 25%, enabling better decision-making and enhanced project efficiency.",
            "Developed and optimized machine learning models including Logistic Regression and Random Forest.",
            "Utilized Python libraries such as Pandas, Seaborn, and Scikit-learn for data manipulation, modeling, and visualization.",
            "Achieved 85% predictive accuracy on the test dataset through rigorous model training and evaluation.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        imageUrl: github,
        link: 'https://github.com/txnishq28',
    },
    {
        name: 'LinkedIn',
        imageUrl: LinkedIn ,
        link: 'https://linkedin.com/in/tanishq-tiwari-0193702b9',
    },
    {
        name: 'LeetCode',
        imageUrl: leetcode ,
        link: 'https://leetcode.com/u/tanishqtiwari_28/',
    },
];

export const projects = [
    {
        imageUrl: chess,
        theme: 'btn-back-darkgreen',
        name: 'Online Chess Game',
        description: 'Built an interactive online chess game with real-time multiplayer support and a clean UI, enhancing competitive gameplay experience.',
        live: '', // No live version yet
        source: 'https://github.com/txnishq28/Chess',
    },
    {
        imageUrl: notification,
        theme: 'btn-back-orange',
        name: 'Notification System',
        description: 'Engineered a real-time notification system delivering instant updates using web technologies and enhancing user engagement.',
        live: 'https://notification-front-git-4552ea-tanishq-tiwaris-projects-1661b60d.vercel.app/',
        source: 'https://github.com/txnishq28/notification-frontend',
    },
    {
        imageUrl: todo,
        theme: 'btn-back-yellow',
        name: 'To-Do List App',
        description: 'Designed a responsive task manager using React and Bootstrap with neon styling, featuring search, animations, and pop-up notifications.',
        live: 'https://txnishq28.github.io/To-Do-List/', 
        source: 'https://github.com/txnishq28/To-Do-List',
    },
    {
        imageUrl: maps,
        theme: 'btn-back-green',
        name: 'TrackSphere - Real-Time Device Mapping',
        description: 'Developed a WebSocket-powered tracking system using Leaflet, Socket.io, and Node.js to handle 10,000+ updates/min with 50ms latency.',
        live: 'https://tracksphere-4gxu.onrender.com/', 
        source: 'https://github.com/txnishq28/TRACKSPHERE',
    },
    {
        imageUrl: portfolio,
        theme: 'btn-back-blue',
        name: '3D Portfolio Website',
        description: 'Crafted a 3D portfolio using React and Three.js with 6 interactive models and animations, optimized for 95+ Lighthouse performance.',
        live: 'https://txnishq28.vercel.app/',
        source: 'https://github.com/txnishq28/3d-portfolio',
    },
    {
        imageUrl: complaint,
        theme: 'btn-back-orange',
        name: 'Works Complaint Management System',
        description: 'Developed a PHP-based complaint portal for DRDO serving 500+ employees, reducing resolution time by 30% with real-time updates.',
        live: '', // Not public
        source: 'https://github.com/txnishq28/Work-complaint-management-system',
    },
    {
        imageUrl: banking,
        theme: 'btn-back-blue',
        name: 'Banking App with Finance Management',
        description: 'Built a responsive finance dashboard with Next.js and Tailwind, featuring budgeting tools, charts, and secure transaction views.',
        live: '', // Add live URL if deployed
        source: 'https://github.com/txnishq28/Credora',
    },
    {
        imageUrl: stock,
        theme: 'btn-back-yellow',
        name: 'Stock Predictor Model',
        description: 'Implemented a stock price prediction model using machine learning techniques in Python, achieving high forecasting accuracy with real-time visualizations.',
        live: '', // Add live URL if deployed
        source: 'https://github.com/txnishq28/Stock-Predictor-Model',
    }
];
