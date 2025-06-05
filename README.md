# 🌐 3D Portfolio Website

![Vercel Deploy](https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel&logoColor=white)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-React%20%7C%20Vite%20%7C%20Three.js%20%7C%20Tailwind-blueviolet)

A visually stunning, interactive 3D portfolio website built using **React**, **Vite**, **Three.js**, and **Tailwind CSS**. It showcases projects, experience, and contact information with beautiful 3D animations and smooth scroll interactions.

> 🚀 **Live Site**: [https://3d-portfolio-lemon-beta.vercel.app/](https://3d-portfolio-lemon-beta.vercel.app/)

---

## 🔧 Tech Stack

- **React** — UI Library
- **Vite** — Fast build tool
- **Three.js** via `@react-three/fiber` — 3D rendering
- **@react-three/drei** — Helpers for easier Three.js setup
- **Tailwind CSS** — Utility-first styling
- **EmailJS** — For sending contact form emails
- **React Router** — For navigation

---

## 📸 Features

- 🚀 Real-time 3D animations using `react-three-fiber`
- 🧠 Smooth scroll and transitions
- 📱 Responsive design (mobile-friendly)
- 📨 Email contact form (via EmailJS)
- 🎨 Styled with Tailwind CSS
- 🧩 Modular component structure

---

## 📂 Folder Structure

├── public/
├── src/
│ ├── assets/ # 3D models, textures, sounds
│ ├── components/ # Reusable components
│ ├── constants/ # Data files (projects, experiences)
│ ├── pages/ # Route pages
│ ├── App.jsx
│ └── main.jsx
├── index.html
└── package.json

---

## 🛠️ Setup Instructions

bash
# Clone the repository
git clone https://github.com/txnishq28/3d-Portfolio.git
cd 3d-Portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
📦 Build for Production
bash
npm run build
Output will be generated in the dist/ directory.

📤 Deploying
This project is deployed on Vercel, which automatically builds and deploys the site on every git push.

🙋‍♂️ Author
Tanishq Tiwari
Connect with me on LinkedIn
GitHub: @txnishq28

📜 License
This project is open-source and free to use.


