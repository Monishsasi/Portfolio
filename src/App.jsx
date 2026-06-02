import resume from "./assets/resume.pdf";

// =====================
// CONFIG DATA (EDIT HERE ONLY)
// =====================

const PROFILE = {
  name: "Monish Sasikumar",
  title: "AI/ML Engineer & Full Stack Developer",
  description:
    "I build intelligent systems and beautiful interfaces — from neural networks to production-grade web apps. Obsessed with the intersection of machine learning and exceptional user experience.",
  email: "monishsasi2004@gmail.com",
  github: "https://github.com/monishsasi",
  linkedin: "https://www.linkedin.com/in/monish-sasikumar/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0ZbSkLLhSRG0lBoTdGNOXg%3D%3D",
  resume: resume,
};

const SKILLS = [
  {
    category: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    category: "Deep Learning & NLP",
    items: [
      "TensorFlow",
      "Keras",
      "Neural Networks",
      "NLP",
      "PyTorch",
    ],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "Prompt Engineering",
      "HuggingFace",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "RAG",
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      "FastAPI",
      "Docker",
      "Git/GitHub",
      "PostgreSQL",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Resume Analyser Agent",
    description: "An AI-powered Resume Analyzer and ATS system built with LangGraph, FastAPI, OCR, and LLM orchestration that performs semantic resume-to-job matching, extracts key insights from documents, and generates ATS scores, skill gap analysis, and career recommendations through a multi-node intelligent workflow.",
    tech: ["Python", "LangGraph", "FastAPI", "React", "CSS3", "LLaMA 3.3", "EasyOCR"],
    github: "https://github.com/Monishsasi/Deployment_Repo/tree/main/AI-Resume-Analyser-Agent",
  },
  {
    title: "Coffee Shop Prediction Model",
    description: "Built a machine learning-based revenue prediction system for coffee shops using FastAPI and Streamlit, enabling daily revenue forecasting based on customer count, operating hours, and marketing spend, with Dockerized deployment and model inference using Joblib.",
    tech: ["Python", "FastAPI", "Docker","Numpy", "Scikit-learn", "Matplotlib", "Streamlit"],
    github: "https://github.com/Monishsasi/Deployment_Repo/tree/main/Coffee%20Shop%20Prediction%20Model%20Deployment",
  },
  {
    title: "Diabetes Prediction Model",
    description: "A containerized machine learning application that predicts diabetes risk using a FastAPI backend and Streamlit frontend. It demonstrates real-time inference through a REST API, with Docker and Docker Compose enabling a modular, scalable, and production-ready multi-service deployment.",
    tech: ["Python", "FastAPI", "Docker","Numpy", "Scikit-learn", "Matplotlib", "Streamlit"],
    github: "https://github.com/Monishsasi/Deployment_Repo/tree/main/Diabetes%20Prediction%20Model%20Deployment",
  },
  {
    title: "E Commerce Customer Intent Detection Model",
    description: "A lightweight NLP intent classification system that improves cost efficiency in AI pipelines by routing user queries before they reach LLMs, handling simple requests locally and forwarding only complex ones by creating API. The project focused heavily on data collection and preparation to ensure strong classification performance.",
    tech: ["Python", "FastAPI", "Scikit-learn","DistilBERT","Hugging Face","Kaggle","PyTorch"],
    github: "https://github.com/Monishsasi/Finetuned-Models/tree/main/E-Commerce-Customer-Intent-Detection-Model",
  },
  {
    title: "Gold Price Prediction Model",
    description: "A machine learning project that predicts gold prices using a Random Forest Regressor trained on financial and time-series data. It involves feature engineering, model training, and evaluation using indicators like stock indices, oil, silver, and forex rates. The model achieved a high accuracy with an R² score of 0.99, showing strong predictive performance on historical market trends.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/Monishsasi/ML-Projects/tree/main/Gold%20Price%20Prediction",
  },
  {
    title: "IMDB Movie Review Sentiment Analysis",
    description: "A natural language processing project that classifies IMDB movie reviews as positive or negative using deep learning techniques, covering the complete workflow from dataset loading and preprocessing to model building (LSTM/GRU/CNN), training, evaluation, and prediction, achieving around 85–90% accuracy, and enabling reliable sentiment analysis on unseen text data.",
    tech: ["Python","TensorFlow", "Keras", "LSTM","NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/Monishsasi/Deep-Learning-Projects/tree/main/IMDB%20Movie%20Review",
  },
  {
    title: "Product Listing with API Integration",
    description: "A React-based e-commerce web application that simulates a real-world shopping experience using dynamic API data. It includes features like product listing, search functionality, category filtering, and a product detail modal. The project strengthened understanding of React component-based architecture, state management, and API integration, with future plans to add cart functionality and AI-based recommendations.",
    tech: ["React", "CSS3"],
    github: "https://github.com/Monishsasi/Frontend/tree/main/React/Product%20Listing%20with%20API",
  },
  {
    title: "Weather Dashboard with Geolocation & Search",
    description: "A weather web application that provides real-time weather updates by accessing the user’s current location and allowing manual search for any desired location. Built using a “vibe coding” approach, it delivers an interactive and user-friendly experience for checking live weather conditions, along with a clean and responsive UI for seamless usage across devices. It helps users quickly access accurate weather information anytime, anywhere.",
    tech: ["React", "CSS3"],
    github: "https://github.com/Monishsasi/Frontend/tree/main/React/Weather-API/Weather-API",
  },
  {
    title: "ANPR System",
    description: "Developed an end-to-end ANPR system using computer vision and deep learning to detect and extract vehicle license plates from live RTSP CCTV streams at a commercial weighbridge, enabling real-time industrial automation., Built a robust processing pipeline using YOLO for license plate detection, ESRGAN for image enhancement, and EasyOCR for character recognition, improving accuracy under low light, motion blur, and low-resolution conditions. Integrated extracted vehicle number data with backend business logic to automatically generate and validate sales and purchase orders, streamlining operational workflows and improving process efficiency.",
    tech: ["Python", "OpenCV", "PyTorch", "Ultralytics", "YOLO", "ESRGAN", "EasyOCR"],
    github: "https://github.com/Monishsasi/Deep-Learning-Projects/tree/main/ANPR",
  },
  {
    title: "",
    description: "",
    tech: [],
    github: "",
  },
];

const EXPERIENCE = [
  {
    role: " Python Developer Intern",
    company: "ICore Software Technologies ",
    duration: "3 Months",
    points: ["Worked on end-to-end AI/ML systems involving machine learning, deep learning, NLP, and computer vision, including data collection, preprocessing, feature engineering, model training, evaluation, and optimization for real-world applications.",
"Developed and fine-tuned advanced models such as BERT for NLP tasks, YOLO for object detection, and ESRGAN for image enhancement, while improving performance through hyperparameter tuning and handling imbalanced datasets.",
"Built and integrated scalable AI pipelines using FastAPI for backend deployment and React-based dashboards for frontend interaction, enabling real-time inference, testing, and visualization of model outputs.",
"Gained hands-on experience in LLM workflows, prompt engineering, OCR, and ANPR systems, while working on full-stack AI solutions and improving system accuracy through iterative debugging and experimentation."],
  },
  {
    role: " Machine Learning Intern",
    company: "ICore Software Technologies ",
    duration: "1 Month",
    points: ["Applied machine learning and deep learning techniques for comprehensive data preprocessing, feature engineering, model training, and evaluation to build high-quality predictive models.", "Gained hands-on experience in designing and optimizing end-to-end ML pipelines, including data cleaning, transformation, and hyperparameter tuning.", "Developed strong understanding of model performance evaluation using standard metrics and iterative experimentation to improve accuracy and reliability."],
  },
];

// =====================
// END CONFIG — DO NOT EDIT BELOW UNLESS CHANGING UI
// =====================

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// ── Utility ──────────────────────────────────────────────────────────────────

function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      className={`fade-up${visible ? " visible" : ""}${className ? " " + className : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function GradText({ children, variant = 1 }) {
  return (
    <span className={variant === 2 ? "grad-text-2" : "grad-text"}>
      {children}
    </span>
  );
}

// ── Shared UI ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <div className="section-label__bar" />
      <span className="section-label__text">{children}</span>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">✦</div>
      <p className="empty-state__text">{message}</p>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      const current = sections.reduce((acc, sec) => {
        if (!sec) return acc;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) return sec.id;
        return acc;
      }, "home");
      setActive(current.charAt(0).toUpperCase() + current.slice(1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
      <div className="navbar__inner">
        <span className="navbar__logo">
          {PROFILE.name.split(" ")[0]}
          <span className="navbar__logo-dot">.</span>
        </span>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={`navbar__link-btn${active === l ? " active" : ""}`}
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="navbar__resume-btn">
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="navbar__hamburger"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`navbar__mobile-link${active === l ? " active" : ""}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function SocialBtn({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-btn">
      {children}
    </a>
  );
}

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      {/* Blobs */}
      <div className="hero__blobs">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <svg className="hero__grid-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="hero__content">
        <div className="hero__badge-wrap">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </div>

        <div className="hero__name-wrap">
          <h1 className="hero__name">
            {PROFILE.name.split(" ").map((word, i) =>
              i === 0 ? word : <GradText key={i}>{" " + word}</GradText>
            )}
          </h1>
        </div>

        <div className="hero__title-wrap">
          <p className="hero__title">{PROFILE.title}</p>
        </div>

        <div className="hero__desc-wrap">
          <p className="hero__desc">{PROFILE.description}</p>
        </div>

        <div className="hero__cta-wrap">
          <button onClick={() => scrollTo("projects")} className="hero__btn-primary">
            View Projects →
          </button>
          <button onClick={() => scrollTo("contact")} className="hero__btn-secondary">
            Contact Me
          </button>
        </div>

        <div className="hero__social-wrap">
          <SocialBtn href={PROFILE.github} label="GitHub">
            <GithubIcon />
          </SocialBtn>
          <SocialBtn href={PROFILE.linkedin} label="LinkedIn">
            <LinkedinIcon />
          </SocialBtn>
          <a href={`mailto:${PROFILE.email}`} className="hero__email-link">
            {PROFILE.email}
          </a>
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function About() {
  const stats = [
    { value: "∞", label: "curiosity", grad: 1 },
    { value: "Fresher", label: "looking for opportunities", grad: 2 },
    { value: "AI & Full Stack", label: "focused", grad: 1 },
  ];

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <FadeUp>
          <SectionLabel>About me</SectionLabel>
          <h2 className="section-heading">
            Building at the edge of
            <br />
            <GradText variant={2}>intelligence & interface.</GradText>
          </h2>
        </FadeUp>

        <div className="about__grid">
          <FadeUp delay={100}>
            <div className="about__text">
              <p className="about__para">
                I am a recent B.Tech Information Technology graduate with a strong interest in Artificial Intelligence, Machine Learning, and Full-Stack Development. I enjoy building practical, end-to-end systems that combine intelligent models with clean and user-friendly interfaces.
              </p>
              <p className="about__para">
                I have hands-on experience working with AI/ML, NLP, and computer vision projects, along with building scalable backend services using FastAPI and interactive frontends using React. I am particularly passionate about Generative AI and LLM-based systems, and I aim to create solutions that deliver real-world impact through automation and intelligence.
              </p>
              <p className="about__para about__para--footnote">
                {/* *shipped zero bugs (disclaimer: possibly inaccurate) */}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="about__stats">
              {stats.map((s, i) => (
                <div key={i} className="glass-card about__stat-card">
                  <div className={`about__stat-value grad-text${s.grad === 2 ? "-2" : ""}`}>
                    {s.value}
                  </div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────

function SkillBadge({ name }) {
  return <span className="skill-badge">{name}</span>;
}

function Skills() {
  const hasSkills = SKILLS.some((cat) => cat.category && cat.items && cat.items.length > 0);

  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <FadeUp>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="section-heading">
            Technologies I've learned
            <br />
            <GradText>through building and experimenting.</GradText>
          </h2>
        </FadeUp>

        {hasSkills ? (
          <div className="skills__grid">
            {SKILLS.filter((cat) => cat.category && cat.items?.length > 0).map((cat, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="glass-card skills__category-card">
                  <h3 className="skills__category-title">{cat.category}</h3>
                  <div className="skills__badges">
                    {cat.items.map((skill, j) => (
                      <SkillBadge key={j} name={skill} />
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        ) : (
          <FadeUp delay={100}>
            <EmptyState message="Add skill categories and items to the SKILLS config at the top of the file." />
          </FadeUp>
        )}
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────

function ProjectCard({ project, delay }) {
  return (
    <FadeUp delay={delay}>
      <div className="glass-card project-card">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                <GithubIcon size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
                <ExternalIcon size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="project-card__desc">{project.description}</p>

        {project.tech?.length > 0 && (
          <div className="project-card__tech">
            {project.tech.map((t, i) => (
              <span key={i} className="project-card__tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </FadeUp>
  );
}

function Projects() {
  const hasProjects = PROJECTS.some((p) => p.title);

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <FadeUp>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="section-heading">
            Things I've built while
            <br />
            <GradText variant={2}>exploring AI & ML</GradText>
          </h2>
        </FadeUp>

        {hasProjects ? (
          <div className="projects__grid">
            {PROJECTS.filter((p) => p.title).map((p, i) => (
              <ProjectCard key={i} project={p} delay={i * 80} />
            ))}
          </div>
        ) : (
          <FadeUp delay={100}>
            <EmptyState message="Add project entries to the PROJECTS config at the top of the file." />
          </FadeUp>
        )}
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────

function ExperienceCard({ exp, delay }) {
  return (
    <FadeUp delay={delay} className="exp-card">
      <div className="exp-card__dot" />
      <div className="glass-card exp-card__inner">
        <div className="exp-card__header">
          <div>
            <h3 className="exp-card__role">{exp.role}</h3>
            <p className="exp-card__company">{exp.company}</p>
          </div>
          <span className="exp-card__duration">{exp.duration}</span>
        </div>

        {exp.points?.length > 0 && (
          <ul className="exp-card__points">
            {exp.points.map((pt, i) => (
              <li key={i} className="exp-card__point">
                {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </FadeUp>
  );
}

function Experience() {
  const hasExp = EXPERIENCE.some((e) => e.role);

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <FadeUp>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="section-heading">
            Where I've been
            <br />
            <GradText>building things.</GradText>
          </h2>
        </FadeUp>

        {hasExp ? (
          <div className="experience__timeline">
            <div className="experience__line" />
            <div className="experience__list">
              {EXPERIENCE.filter((e) => e.role).map((exp, i) => (
                <ExperienceCard key={i} exp={exp} delay={i * 100} />
              ))}
            </div>
          </div>
        ) : (
          <FadeUp delay={100}>
            <EmptyState message="Add experience entries to the EXPERIENCE config at the top of the file." />
          </FadeUp>
        )}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────

function FormField({ label, name, type = "text", value, onChange, placeholder, textarea, rows }) {
  return (
    <div className="form-field">
      <label className="form-field__label">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="form-field__textarea"
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-field__input"
        />
      )}
    </div>
  );
}

function ContactLink({ icon, href, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="contact-link">
      <span className="contact-link__icon">{icon}</span>
      {label}
    </a>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <FadeUp>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="section-heading">
            Let's build something
            <br />
            <GradText variant={2}>remarkable together.</GradText>
          </h2>
        </FadeUp>

        <div className="contact__grid">
          <FadeUp delay={100}>
            <div className="contact__info">
              <p className="contact__intro">
                I'm always open to new opportunities, collaborations, and interesting conversations.
                Whether you have a project in mind or just want to say hello — my inbox is open.
              </p>
              <div className="contact__links">
                <ContactLink icon={<MailIcon />} href={`mailto:${PROFILE.email}`} label={PROFILE.email} />
                <ContactLink icon={<GithubIcon />} href={PROFILE.github} label="GitHub Profile" />
                <ContactLink icon={<LinkedinIcon />} href={PROFILE.linkedin} label="LinkedIn Profile" />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <form onSubmit={handleSubmit} className="glass-card contact-form">
              {sent && (
                <div className="form-success">✓ Message sent — I'll be in touch soon!</div>
              )}
              <FormField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              <FormField
                label="Message"
                name="message"
                textarea
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
              />
              <button type="submit" className="form-submit-btn">
                Send Message →
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name">{PROFILE.name}</span>
        <div className="footer__links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="footer__link">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="footer__link">
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="footer__link">
            Email
          </a>
        </div>
        <span className="footer__credit">Built with React ♥</span>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}