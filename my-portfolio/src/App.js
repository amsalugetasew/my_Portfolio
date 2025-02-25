import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css"; // Import the CSS file
import profilePic from "./assets/profile.jpg";

const projects = [
  {
    title: "AI based Financial News Data Analsyis",
    description: "This project focuses on the detailed analysis of a large corpus of financial news data to discover correlations between news sentiment and stock market movements.",
    link: "https://github.com/amsalugetasew/10_Academy_AI_Mastery_kifiya_Week_1",
  },
  {
    title: "Fruad Detection",
    description: "Improved detection of fraud cases for e-commerce and bank transactions, Deploying the models using Django for real-time fraud detection and setting up monitoring for continuous improvement, Building and training machine learning models to detect fraud.",
    link: "https://github.com/amsalugetasew/10_Academy_AI_Mastery_kifiya_Week_8",
  },
  {
    title: "Credit Scoring Prediction",
    description: "Django based deployment of a complete workflow for building, evaluating, and deploying a credit scoring system. The system uses customer data to predict creditworthiness, enabling financial institutions to make data-driven lending decisions",
    link: "https://github.com/amsalugetasew/10_Academy_AI_Mastery_kifiya_Week_6",
  },


  {
    title: "AI based Pharmaceuticals Data Customer Behavior Analysis and Store Sales Prediction Using Machine Learning and Deep Learning",
    description: "This project explores customer purchasing behavior and predicts store sales using machine learning and deep learning. It involves data cleaning, exploratory analysis, and visualizations to identify patterns in promotions, holidays, and store openings. Sales predictions are made using regression models and LSTMs, with feature engineering and loss function selection to optimize accuracy. The trained models are serialized and deployed via a REST API (Django) for real-time predictions, enabling data-driven decision-making for store operations.",
    link: "https://github.com/amsalugetasew/10_Academy_AI_Mastery_kifiya_Week_4",
  },
  {
    title: "Amharic Named Entity Recognition (NER) for Ethiopian E-commerce Messages",
    description: "This project focuses on building a robust NER system tailored for Amharic language text of e-commerce channels. The process involves collecting data from Telegram, preprocessing and labeling entities in CoNLL format, and fine-tuning multilingual models such as XLM-Roberta and BERT-based variants. The system is further enhanced by model comparison and interpretability tools (SHAP and LIME) to ensure transparency and trust in predictions. The outcome is a high-performing NER model capable of accurately extracting key entities from Amharic e-commerce messages, providing valuable insights for businesses."
  },
  {
    title: "Brent Oil Price Analysis and Forecasting Using Machine Learning and Econometric Models",
    description: "This project focuses on defining a structured data analysis workflow to understand Brent oil price fluctuations using time series models like ARIMA, GARCH, and LSTM. It involves exploring economic, technological, and political factors influencing oil prices and refining predictions using advanced econometric models. The study also adapts the framework to related energy markets and evaluates model performance using historical data. Finally, an interactive Flask-React dashboard is developed to visualize results, providing stakeholders with insights into price trends, influential events, and predictive analytics.",
    link: "https://github.com/amsalugetasew/10_Academy_AI_Mastery_kifiya_Week_10_V1",
  },
];

const App = () => {
  return (
    <div>
      {/* HEADER */}
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
      {/* <img src="/profile.jpg" alt="Getasew Amsalu" className="profile-picture" /> */}
      <img src={profilePic} alt="Getasew Amsalu" className="profile-picture" />
        <h2>Hello, I'm <span>Getasew Amsalu</span></h2>
        <a href="#projects">View Projects</a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title">About Me
            <p className="intro-text">
                I am a passionate <span className="highlight">Data Scientist and Analyst</span> with expertise in <span className="highlight">AI-based Machine Learning</span> and <span className="highlight">Deep Learning</span> project development.
            </p>
          </h2>
          {/* Education */}
          <div className="about-box">
            <h3 className="about-heading">🎓 Education</h3>
            <ul>
              <li>Master’s in <span className="highlight">Data Science and Information Systems</span></li>
              <li>Master’s in <span className="highlight">Information Systems</span></li>
              <li>BSc in <span className="highlight">Information Systems</span></li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="about-box">
            <h3 className="about-heading">💼 Work Experience</h3>
            <ul>
              <li>Lecturer & Researcher in Data Science and Information Systems</li>
              <li>Currently working as a <span className="highlight">Data Science & Analytics Professional</span> in the Financial Sector</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="about-box">
            <h3 className="about-heading">🛠️ Skills</h3>
            <ul className="skills-grid">
              <li>Excel</li>
              <li>Power BI</li>
              <li>SQL</li>
              <li>Python</li>
              <li>Data Visualization</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>NLP</li>
              <li>Django (ML Deployment)</li>
              <li>Flask</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME LINK SECTION */}
      <section id="resume" className="resume-section">
        <h1>
          <a href="/Getasew_Amsalu_Abera-CV_Updated.pdf" target="_blank" rel="noopener noreferrer">
          <h2>My Resume</h2>
          </a>
        </h1>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <a href="https://github.com/amsalugetasew"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/getasew-amsalu" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:amsalugetasew12@gmail.com"><FaEnvelope /></a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Getasew Amsalu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
