import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, BarChart3, Brain, FileText, Award, Calendar, ChevronRight } from 'lucide-react';
import DarkModeToggle from '../components/DarkModeToggle';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { category: 'Programming', items: ['Python', 'R', 'SQL', 'JavaScript'], icon: Code, color: 'indigo' },
    { category: 'Data Science', items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'], icon: Brain, color: 'purple' },
    { category: 'Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'], icon: BarChart3, color: 'blue' },
    { category: 'Tools', items: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy'], icon: Database, color: 'violet' },
  ];

  const projects = [
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Built an interactive dashboard for real-time data analysis and prediction using machine learning models.',
      tech: ['Python', 'Scikit-learn', 'Plotly', 'Flask'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Developed a sentiment analysis tool to classify customer reviews with 92% accuracy using BERT.',
      tech: ['Python', 'BERT', 'Transformers', 'FastAPI'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    },
    {
      title: 'Computer Vision Object Detector',
      description: 'Created a real-time object detection system using YOLO for autonomous vehicle applications.',
      tech: ['Python', 'YOLO', 'OpenCV', 'PyTorch'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Built a predictive model to identify customers at risk of churning with actionable insights.',
      tech: ['Python', 'XGBoost', 'Pandas', 'Tableau'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
  ];

  const experiences = [
    {
      role: 'Data Science Intern',
      organization: 'Tech Innovations Inc.',
      period: 'Jun 2024 - Present',
      description: 'Working on predictive models for customer behavior analysis and developing ML pipelines.',
    },
    {
      role: 'Research Assistant',
      organization: 'University AI Lab',
      period: 'Jan 2024 - May 2024',
      description: 'Conducted research on deep learning applications in computer vision and published 2 papers.',
    },
    {
      role: 'Machine Learning Club Lead',
      organization: 'University Student Organization',
      period: 'Sep 2023 - Dec 2023',
      description: 'Organized workshops and hackathons, mentored 50+ students in ML fundamentals.',
    },
  ];

  const certifications = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera - DeepLearning.AI',
      date: '2024',
    },
    {
      title: 'AWS Certified Machine Learning',
      issuer: 'Amazon Web Services',
      date: '2024',
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2023',
    },
    {
      title: 'Data Science Professional',
      issuer: 'IBM',
      date: '2023',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center fade-in">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto flex items-center justify-center text-white text-4xl font-bold">
              DS
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6">
            Your Name Here
          </h1>
          <p className="text-2xl md:text-3xl text-indigo-600 dark:text-purple-400 mb-8 font-medium">
            Data Science Student & ML Enthusiast
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights through machine learning and advanced analytics
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-indigo-600 dark:bg-purple-600 text-white rounded-lg font-medium hover:bg-indigo-700 dark:hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-indigo-600 dark:text-purple-400 border-2 border-indigo-600 dark:border-purple-600 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
              <Github className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Data Science student with a strong foundation in machine learning, statistical analysis, and data visualization. My journey in data science began with a curiosity about how data can solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With experience in Python, R, and various ML frameworks, I love building intelligent systems that learn from data. I'm particularly interested in deep learning, natural language processing, and computer vision applications.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests:</h3>
                <div className="flex flex-wrap gap-3">
                  {['Machine Learning', 'Data Analysis', 'Artificial Intelligence', 'Data Visualization', 'Statistical Modeling', 'Deep Learning'].map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-indigo-100 dark:bg-purple-900/30 text-indigo-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => {
              const IconComponent = skillGroup.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-${skillGroup.color}-100 dark:bg-${skillGroup.color}-900/30 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${skillGroup.color}-600 dark:text-${skillGroup.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                        <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Some of my recent work in data science and machine learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-purple-900/30 text-indigo-700 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-purple-600 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Activities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My professional journey and contributions
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-purple-800"></div>
              
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative mb-12 fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-indigo-600 dark:bg-purple-600 rounded-full flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-600 dark:text-purple-400 font-medium mb-2">
                        {exp.organization}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional certifications and recognitions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-indigo-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-indigo-600 dark:text-purple-400 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl fade-in">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-indigo-600 dark:bg-purple-600 text-white rounded-lg font-medium hover:bg-indigo-700 dark:hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-center gap-6">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>github.com/username</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/username</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;