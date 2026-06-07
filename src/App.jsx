import Profile from "./assets/profile.jpeg";
// Tech Stack
import Dart from './assets/Dart.png';
import DBeaver from './assets/DBeaver.png';
import Express from './assets/Express.png';
import FastApi from './assets/FastAPI.png';
import Flutter from './assets/Flutter.png';
import Git from './assets/Git.png';
import Github from './assets/GitHub.png';
import JavaScript from './assets/JavaScript.png';
import Linux from './assets/Linux.png';
import React from './assets/React.png';
import Tailwind from './assets/Tailwind.png';
import HandShake from './assets/hands.png';
// -------- end

import mobDevIcon from './assets/mobile-development.png';
import dev from './assets/development.png';
import Favicon from './assets/cirlular_profile.png';
import { useState, useEffect } from 'react';
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  ExternalLink, 
  Download, 
  ChevronRight, 
  Menu, 
  X, 
  Mail, 
  Smartphone, 
  Monitor, 
  Database, 
  Cpu, 
  Terminal,
  Calendar,
  MapPin,
  Sparkles,
  Layers,
  CheckCircle2,
  PhoneCall,
  Server
} from "lucide-react";

// Resume data structures
const projects = [
  {
    title: "Form2Mail",
    description: "A serverless form-handling platform enabling static websites to process submissions with automated email workflows and Google Sheets integration. Built with automated storage and processing of 100+ submissions.",
    tech: ["EJS", "Node.js", "REST APIs", "Google Sheets API", "Serverless"],
    category: "Full Stack",
    link: "https://github.com/v-ishnu",
    status: "Beta Version",
    iconType: "web"
  },
  {
    title: "Music App Auxify",
    description: "A React Native music streaming application integrated with Spotify APIs and OAuth authentication for personalized playlist management. Improved content loading performance by 30% via lazy loading and API response caching.",
    tech: ["React Native", "Node.js", "MongoDB", "Spotify API", "OAuth"],
    category: "Mobile",
    link: "https://github.com/v-ishnu",
    status: "GitHub",
    iconType: "mobile"
  },
  {
    title: "NexGEN IRCTC",
    description: "Redesigned railway booking application using Flutter and Node.js with RapidAPI integration for real-time train data retrieval. Features accessibility-focused UI/UX improvements.",
    tech: ["Flutter", "Node.js", "MongoDB", "RapidAPI", "UI/UX"],
    category: "Mobile",
    link: "https://github.com/v-ishnu",
    status: "GitHub",
    iconType: "mobile"
  },
  {
    title: "urlShortner",
    description: "A secure URL shortening platform built with PHP and MySQL using collision-resistant key generation. Improved redirect query performance using database index optimization techniques.",
    tech: ["PHP", "HTML", "MySQL", "DB Indexing"],
    category: "Full Stack",
    link: "https://github.com/v-ishnu",
    status: "GitHub",
    iconType: "web"
  }
];

const experiences = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Anvera Esport",
    location: "Remote",
    period: "2024 - Present",
    bullets: [
      "Developed a scalable esports tournament platform using Next.js, Node.js, MongoDB, and REST APIs supporting real-time tournament workflows and player management.",
      "Implemented real-time tournament tracking, player registration, and leaderboard systems, improving match management efficiency for competitive gaming events.",
      "Optimized server-side rendering and responsive UI components, improving application performance and user experience across devices."
    ]
  },
  {
    role: "Freelance Backend Developer",
    company: "TktHive",
    location: "Remote",
    period: "2023 - 2024",
    bullets: [
      "Developed scalable backend architecture using Node.js, MongoDB, and Redis with OTP authentication, password-based login, session handling, and role-based access control.",
      "Reduced API response latency by 40% using Redis caching, asynchronous processing, and modular RESTful architecture for high-concurrency backend workflows.",
      "Implemented push notification systems, JWT authentication, rate limiting, input validation, and secure API workflows to improve backend reliability and security."
    ]
  }
];

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5 text-indigo-600" />,
    skills: ["Python", "C/C++", "SQL", "Go", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
    skills: ["React Native", "Next.js", "Flutter", "React.js", "Node.js", "Express", "Tailwind CSS"]
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-indigo-600" />,
    skills: ["REST APIs", "Redis", "MongoDB", "MySQL", "JWT", "OAuth", "Rate Limiting", "Google Sheets API"]
  },
  {
    title: "Tools & Concepts",
    icon: <Cpu className="w-5 h-5 text-indigo-600" />,
    skills: ["Git", "Docker", "Linux", "DBeaver", "Postman", "Figma", "CI/CD", "Asynchronous Prog."]
  }
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University Jaipur",
    period: "2025 – 2027",
    grade: "CGPA: 8.26",
    details: "Advanced topics in Software Engineering, Cloud Architectures, and Database Systems."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lovely Professional University",
    period: "2022 – 2025",
    grade: "CGPA: 7.17",
    details: "Focus on Data Structures, Algorithms, OOPs, and Web Development."
  },
  {
    degree: "Intermediate",
    institution: "Dhwarka High School",
    period: "2020 – 2022",
    grade: "Percentage: 72%",
    details: "Science stream with Core Mathematics and Physics."
  }
];

const achievements = [
  {
    title: "National Ideathon Recognition",
    org: "SBI Foundation · IIT Delhi",
    description: "Received national recognition at the College Youth Ideathon (CYI) for innovative software solutions."
  },
  {
    title: "Winner - Web-E-Stan 4.0 Hackathon",
    org: "School of Computer Science & Engineering, LPU",
    description: "Won first place for designing and implementing a farmer-to-consumer digital marketplace."
  },
  {
    title: "Winner - Inter-college Hackathon",
    org: "PCTE Group of Institutes",
    description: "Secured first place for high-speed full-stack application development in a competitive environment."
  },
  {
    title: "Student Organization Head",
    org: "InnovXus Club",
    description: "Led LPU's computer science coding club, organizing multiple hackathons and workshops for 1,500+ students."
  }
];

const getTechStyle = (techName) => {
  const tech = techName.toLowerCase();
  if (tech.includes('react')) return 'bg-sky-50 text-sky-700 border-sky-200/50 hover:bg-sky-500 hover:text-white';
  if (tech.includes('node') || tech.includes('express')) return 'bg-emerald-50 text-emerald-700 border-emerald-200/50 hover:bg-emerald-600 hover:text-white';
  if (tech.includes('flutter') || tech.includes('dart')) return 'bg-cyan-50 text-cyan-700 border-cyan-200/50 hover:bg-cyan-500 hover:text-white';
  if (tech.includes('api') || tech.includes('rest') || tech.includes('jwt') || tech.includes('oauth')) return 'bg-indigo-50 text-indigo-700 border-indigo-200/50 hover:bg-indigo-600 hover:text-white';
  if (tech.includes('mongo') || tech.includes('sql') || tech.includes('db')) return 'bg-green-50 text-green-700 border-green-200/50 hover:bg-green-600 hover:text-white';
  if (tech.includes('php') || tech.includes('ejs')) return 'bg-violet-50 text-violet-700 border-violet-200/50 hover:bg-violet-600 hover:text-white';
  if (tech.includes('python')) return 'bg-yellow-50 text-yellow-800 border-yellow-200/50 hover:bg-yellow-600 hover:text-white';
  if (tech.includes('html') || tech.includes('css') || tech.includes('tailwind')) return 'bg-orange-50 text-orange-700 border-orange-200/50 hover:bg-orange-500 hover:text-white';
  if (tech.includes('git') || tech.includes('docker') || tech.includes('linux')) return 'bg-rose-50 text-rose-700 border-rose-200/50 hover:bg-rose-600 hover:text-white';
  return 'bg-gray-50 text-gray-600 border-gray-200/60 hover:bg-gray-900 hover:text-white';
};

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

function App() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');

  const images = [
    Dart,
    DBeaver,
    Express,
    FastApi,
    Flutter,
    Git,
    Github,
    JavaScript,
    Linux,
    React,
    Tailwind
  ];

  const services = [
    {
      title: "UX & UI Design",
      icon: mobDevIcon,
      desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      title: "Web & Mobile App Development",
      icon: mobDevIcon,
      desc: "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      title: "Design & Creative",
      icon: dev,
      desc: "Crafting visually stunning designs that connect with your audience.",
    },
    {
      title: "Full-Stack Development",
      icon: mobDevIcon,
      desc: "Bringing your vision to life with the latest technology and design trends.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy observer
  useEffect(() => {
    const sections = ['home', 'services', 'projects', 'experience', 'skills', 'education'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('vishnu.praaksh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/Resume.pdf";
    link.download = "Vishnu_Prakash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-50/60 select-none font-outfit scroll-smooth">
      {/* Reading progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      {/* Grid Pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
          opacity: 0.02,
          backgroundSize: '120px 120px',
          zIndex: 0,
        }}
      />

      {/* Floating Header */}
      <AnimatePresence>
        {scrolled && (
          <motion.header 
            initial={{ y: -80, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -80, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-full border border-gray-200/80 bg-white/80 backdrop-blur-md px-5 py-2.5 shadow-xl flex items-center justify-between"
          >
            <a href="#home" className="text-black font-bold text-lg tracking-tight hover:opacity-85 flex items-center gap-2">
              <img src={Favicon} alt="VP Favicon" className="w-8 h-8 rounded-full object-cover shadow-inner border border-gray-150" />
              <span className="hidden sm:inline font-bold">Vishnu Prakash</span>
            </a>

            <nav className="hidden md:flex items-center gap-1.5 font-semibold text-xs text-gray-500">
              {[
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-black text-white shadow-sm' 
                      : 'hover:text-black hover:bg-gray-100/60'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <button 
                onClick={downloadCV} 
                className="hidden sm:flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-black px-4 py-1.5 rounded-full text-xs font-bold border border-gray-200 transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
              <a 
                href="#contact" 
                className="bg-black hover:bg-gray-900 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Hire Me
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 md:hidden hover:bg-gray-100 rounded-full text-gray-700 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && scrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="fixed top-18 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl z-40 p-5 flex flex-col gap-3.5 font-semibold text-gray-600 md:hidden"
          >
            {[
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`py-2 px-3 rounded-xl transition-all ${
                  activeSection === item.id 
                    ? 'bg-black text-white' 
                    : 'hover:text-black hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => { downloadCV(); setMobileMenuOpen(false); }} 
              className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 py-3 rounded-full text-sm font-bold border border-gray-200 text-black mt-2 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen z-10" id="home">
        {/* Floating gradient glow behind Hero */}
        <div className="absolute top-[20%] left-[10%] w-[320px] h-[320px] bg-sky-200/15 rounded-full blur-[90px] pointer-events-none animate-float-0" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-indigo-200/15 rounded-full blur-[100px] pointer-events-none animate-float-1" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-purple-200/10 rounded-full blur-[100px] pointer-events-none animate-float-2" />

        {/* Hero Section Container */}
        <div className="min-h-[100vh] md:h-[105vh] flex flex-col bg-white rounded-bl-[45px] rounded-br-[45px] md:rounded-bl-[100px] md:rounded-br-[100px] border-b border-gray-200/80 relative overflow-hidden shadow-sm">
          {/* Subtle grid pattern inside header block */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
              backgroundSize: '120px 120px',
              zIndex: 0,
            }}
          />

          <div className="relative flex flex-col justify-between h-full z-10 py-6 md:py-8">
            {/* Header for mobile */}
            <div className="flex md:hidden flex-row h-14 items-center justify-between px-4">
              <div className="flex flex-row h-10 w-max text-black items-center rounded-full">
                {/* Email Section */}
                <button
                  onClick={handleCopy}
                  className={`bg-black rounded-full px-5 py-2 text-xs text-white font-semibold mr-2 transition-all duration-300 active:scale-95 shadow-sm`}
                >
                  {copied ? 'Copied!' : 'Email'}
                </button>
                {/* CV Section */}
                <button
                  onClick={downloadCV}
                  className="bg-white rounded-full px-5 py-2 text-xs font-semibold hover:bg-gray-50 border border-gray-200 shadow-sm flex items-center gap-1 text-gray-700">
                  <Download className="w-3.5 h-3.5" />
                  <span>CV</span>
                </button>
              </div>

              <div className="flex flex-row gap-2.5 items-center justify-center">
                <button
                  type="button"
                  className="h-9 w-9 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm active:scale-95 text-gray-600 hover:text-black"
                  onClick={() => window.open('https://www.linkedin.com/in/vishnupraksh', '_blank')}
                  aria-label="Open LinkedIn"
                >
                  <LuLinkedin className="w-4.5 h-4.5" />
                </button>
                <button
                  type="button"
                  className="h-9 w-9 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm active:scale-95 text-gray-600 hover:text-black"
                  onClick={() => window.open('https://github.com/v-ishnu', '_blank')}
                  aria-label="Open GitHub"
                >
                  <BsGithub className="w-4.5 h-4.5" />
                </button>
                <button
                  type="button"
                  className="h-9 w-9 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm active:scale-95 text-gray-600 hover:text-black"
                  onClick={() => window.open('https://www.instagram.com/_im_vishn_u', '_blank')}
                  aria-label="Open Instagram"
                >
                  <BsInstagram className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Header Section for Tab and Laptop */}
            <div className="hidden md:flex flex-row h-16 items-center justify-between px-12">
              <div className="flex flex-row h-11 w-max border border-gray-200 text-black items-center pl-5 pr-1.5 rounded-full bg-gray-50/50 backdrop-blur-sm shadow-sm">
                <span className="font-outfit text-sm font-medium mr-4 text-gray-500">vishnu.praaksh@gmail.com</span>
                <button
                  onClick={handleCopy}
                  className={`bg-white rounded-full px-5 py-2 text-xs font-bold mr-2 transition-all duration-300 border border-gray-200 hover:bg-gray-50 active:scale-95 shadow-sm`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button 
                  onClick={downloadCV} 
                  className="bg-black text-white hover:bg-gray-900 rounded-full px-5 py-2 text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-102 active:scale-98"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              </div>
              <div className="flex flex-row font-outfit items-center text-sm font-semibold text-gray-400 gap-3">
                <a className="hover:text-black transition-colors" href="https://github.com/v-ishnu" target="_blank" rel="noreferrer">GitHub</a>
                <span>/</span>
                <a className="hover:text-black transition-colors" href="https://www.linkedin.com/in/vishnupraksh" target="_blank" rel="noreferrer">LinkedIn</a>
                <span>/</span>
                <a className="hover:text-black transition-colors" href="https://www.instagram.com/_im_vishn_u" target="_blank" rel="noreferrer">Instagram</a>
                <span>/</span>
                <a className="hover:text-black transition-colors" href="https://x.com/_im_vishn_u" target="_blank" rel="noreferrer">Twitter</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-grow justify-center items-center gap-8 py-10 md:py-16">
              {/* Profile Image & Floating Tag */}
              <div className="relative flex items-center justify-center">
                <div className="overflow-hidden h-32 w-32 md:h-36 md:w-36 rounded-full border-4 border-white shadow-2xl bg-gray-50">
                  <img src={Profile} alt="Vishnu Prakash" className="h-full w-full object-cover" />
                </div>
                <div className="absolute bg-white shadow-xl w-max h-12 ml-[195px] rounded-full -rotate-12 flex items-center justify-center px-4.5 py-2 border border-gray-200/50 animate-[bounce_6s_infinite] hover:scale-105 transition-transform duration-300">
                  <span className="font-outfit text-sm font-bold text-black tracking-tight flex items-center gap-1">
                    Vishnu Prakash <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div className='flex justify-center font-outfit text-4xl md:text-6xl px-4 max-w-5xl'>
                <h1 className="text-center font-bold leading-tight tracking-tight">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-black via-black/75 to-gray-700">
                    Building scalable apps,
                  </span>
                  <br />
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-black via-black/80 to-gray-600">
                    backends & digital experiences.
                  </span>
                </h1>
              </div>

              <div className="text-center px-4 max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                React Native & Full Stack Developer with hands-on experience building high-performance mobile apps, 
                scalable RESTful APIs, and responsive architectures. LPU Coding Club Head & National Hackathon Winner.
              </div>

              {/* Main Call to Action */}
              <div className="flex flex-row items-center gap-4">
                <a
                  href="#projects"
                  className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 hover:scale-102"
                >
                  View Selected Projects
                </a>
                <button 
                  onClick={downloadCV}
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow flex items-center gap-2 active:scale-98"
                >
                  <Download className="w-4 h-4 text-gray-600" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-8 md:h-12" />
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative w-full overflow-hidden bg-white border-b border-gray-200 py-10 shadow-sm">
          <div className="flex justify-center mb-6">
            <span className="text-xs uppercase tracking-widest font-bold font-outfit text-gray-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-gray-400" /> Core Tech Stack
            </span>
          </div>
          <div className="flex animate-marquee items-center gap-8">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="inline-flex items-center justify-center shrink-0">
                <div className="h-[46px] w-[130px] px-4 rounded-xl flex items-center justify-center bg-gray-50/50 border border-gray-100 hover:border-gray-200 shadow-sm transition-colors duration-300">
                  <img
                    src={img}
                    alt={`Tech logo`}
                    className="h-7 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="flex flex-col relative justify-center items-center h-full w-full py-24 px-4 bg-gray-50/30" id="services">
        <div className="w-full max-w-4xl text-center mb-16">
          <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">What I Offer</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-black/80 to-gray-700">
            Collaborating to build high-performance products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-white border border-gray-200/80 hover:border-black/15 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-black group-hover:text-white flex items-center justify-center border border-gray-100 mb-5 transition-all duration-300">
                <img src={service.icon} alt={service.title} className="w-6 h-6 object-contain group-hover:invert transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white border-t border-b border-gray-200/80" id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">My Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-black/85 to-gray-700">
                Selected Projects
              </h2>
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'Mobile', 'Full Stack'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all border shrink-0 ${
                    projectFilter === cat 
                      ? 'bg-black border-black text-white shadow-md scale-102' 
                      : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-500 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="group relative bg-white border border-gray-200 hover:border-black/20 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-[0_20px_50px_rgba(99,_102,_241,_0.05)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Hover background mesh glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-50/15 via-indigo-50/10 to-purple-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shadow-inner group-hover:bg-black group-hover:text-white transition-all duration-300">
                        {project.iconType === 'mobile' ? <Smartphone className="w-5 h-5 text-current" /> : <Monitor className="w-5 h-5 text-current" />}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase bg-gray-50 border border-gray-200/80 px-3.5 py-1 rounded-full text-gray-500">
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className={`text-[10px] font-bold border px-3 py-1.5 rounded-xl transition-all duration-300 ${getTechStyle(t)}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer / Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-bold text-gray-800 hover:text-black flex items-center gap-1.5 hover:underline"
                      >
                        <BsGithub className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                        <span>Source Code</span>
                      </a>
                      <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-50/50 border-b border-gray-200" id="experience">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">My Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-black/85 to-gray-700">
              Work Experience
            </h2>
          </div>

          {/* Timeline Structure */}
          <div className="relative border-l border-gray-300 md:pl-10 pl-6 ml-2 md:ml-4 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                className="relative group"
                {...fadeInUp}
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[31px] md:-left-[47px] top-2 bg-white border-2 border-black w-4.5 h-4.5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-black group-hover:shadow-[0_0_0_8px_rgba(0,0,0,0.05)]" />

                {/* Experience Card */}
                <div className="bg-white border border-gray-200/80 hover:border-black/15 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50/10 to-transparent rounded-tr-3xl pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1 font-semibold">
                        <span>{exp.company}</span>
                        <span className="text-gray-300 hidden sm:inline">•</span>
                        <span className="flex items-center gap-0.5"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200/60 px-3.5 py-1.5 rounded-full w-max text-xs font-bold text-gray-500 shadow-sm shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3.5 mt-6 border-t border-gray-100/80 pt-6">
                    {exp.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed font-medium">
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 bg-white border-b border-gray-200" id="skills">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-black/85 to-gray-700">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                {...fadeInUp}
                className="bg-gray-50/50 border border-gray-200/80 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-base text-gray-900">{category.title}</h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border shadow-sm transition-all duration-300 hover:scale-105 ${getTechStyle(skill)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements Grid */}
      <section className="py-24 bg-gray-50/50" id="education">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Education Column */}
            <div>
              <div className="mb-10">
                <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">Timeline</span>
                <h2 className="text-2xl md:text-4xl font-bold mt-3 text-gray-900">Education</h2>
              </div>

              <div className="relative border-l border-gray-300 pl-6 ml-2 space-y-8">
                {education.map((edu, idx) => (
                  <motion.div 
                    key={idx} 
                    className="relative group"
                    {...fadeInUp}
                  >
                    {/* Small Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-black group-hover:bg-black transition-all group-hover:scale-110" />
                    
                    <div className="bg-white/50 border border-gray-100 hover:bg-white rounded-2xl p-5 shadow-sm transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base md:text-lg font-bold text-gray-900">{edu.degree}</h3>
                        <span className="text-[10px] font-bold bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full shrink-0 shadow-sm">
                          {edu.grade}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 font-semibold">
                        <span>{edu.institution}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                      
                      <p className="text-xs text-gray-500 leading-relaxed mt-3 font-medium">
                        {edu.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Column */}
            <div>
              <div className="mb-10">
                <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">Accolades</span>
                <h2 className="text-2xl md:text-4xl font-bold mt-3 text-gray-900">Achievements</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((ach, idx) => (
                  <motion.div 
                    key={idx} 
                    {...fadeInUp}
                    className="bg-white border border-gray-200/80 rounded-3xl p-5 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-all" />
                    
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 mb-4 shadow-sm group-hover:scale-105 group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <Award className="w-4.5 h-4.5 text-current" />
                      </div>
                      <h3 className="font-bold text-sm text-gray-900 mb-1.5">{ach.title}</h3>
                      <span className="text-[10px] font-bold text-gray-400 block mb-3 uppercase tracking-wider">{ach.org}</span>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer & Contact Section */}
      <section className="bg-white border-t border-gray-200/80 rounded-tl-[45px] rounded-tr-[45px] lg:rounded-tl-[90px] lg:rounded-tr-[90px] pt-20 pb-8 px-4 z-10 relative" id="contact">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 bg-gray-100 hover:scale-105 transition-transform duration-300">
            <img
              src={HandShake}
              alt="Handshake"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-black via-black/85 to-gray-700 mb-10">
            Tell me about your next project
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto px-4">
            <a
              href="mailto:vishnu.praaksh@gmail.com"
              className="bg-black hover:bg-gray-900 hover:shadow-xl hover:shadow-black/10 text-white px-8 py-4 rounded-full transition-all text-sm font-bold text-center shadow-md flex items-center justify-center gap-2 hover:scale-102"
            >
              <Mail className="w-4.5 h-4.5" />
              <span>Email Me</span>
            </a>
            <a
              href="https://wa.me/+918936860540"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-450 text-black px-8 py-4 rounded-full transition-all text-sm font-bold text-center shadow-sm flex items-center justify-center gap-2 hover:scale-102"
            >
              <PhoneCall className="w-4.5 h-4.5 text-gray-700" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl border-t border-gray-200/70 pb-6" />

          {/* Footer Bottom */}
          <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <div className="font-outfit text-sm text-gray-400 font-medium">
              © {new Date().getFullYear()} Vishnu Prakash. All rights reserved.
            </div>
            
            <div className="flex flex-row items-center font-outfit text-sm font-semibold text-gray-400 gap-3">
              <a
                href="https://github.com/v-ishnu"
                target="_blank" 
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href="https://www.linkedin.com/in/vishnupraksh"
                target="_blank" 
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <span>/</span>
              <a
                href="https://www.instagram.com/_im_vishn_u"
                target="_blank" 
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                Instagram
              </a>
              <span>/</span>
              <a
                href="https://x.com/_im_vishn_u"
                target="_blank" 
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
