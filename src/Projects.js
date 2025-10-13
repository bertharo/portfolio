import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Hux: Social Media Without Ads",
      description: "A modern social media platform reimagined without advertisements. Built with a focus on authentic connections and user experience, providing a clean and distraction-free environment for meaningful interactions.",
      url: "https://myhux.com/",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      title: "State versus State Analysis",
      description: "An interactive data visualization tool comparing key metrics and statistics across different U.S. states. Explore demographic, economic, and social indicators to understand regional differences and trends.",
      url: "https://musical-dieffenbachia-e5cb4a.netlify.app/",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform featuring real-time data visualization and insights. Designed to help teams make data-driven decisions with intuitive charts and customizable reporting tools.",
      url: "https://analytics-dashboard-kohl-three.vercel.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "AIGE",
      description: "A compassionate platform designed to help families coordinate and manage care for their loved ones. Simplifying the complexities of family caregiving with thoughtful tools and support.",
      url: "https://aige.vercel.app/",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
    },
    {
      title: "OUSD School Finder",
      description: "A user-friendly tool to help families find the perfect school in Oakland. Features interactive maps, detailed school information, and comparison tools to make informed educational decisions.",
      url: "https://schools-eosin.vercel.app/",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.projectLink}
            >
              Visit Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

