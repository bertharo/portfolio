import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "RunGPT",
      description: "An AI-powered running coach that gives personalized training advice based on your pace, mileage, and goals.",
      aiNote: "Defined the system's behavioral boundaries: what it should confidently advise (pacing, weekly volume, race prep) vs. defer on (injury diagnosis, nutrition). Iterated on the prompt architecture to reduce hallucinated training plans and evaluated output quality by comparing advice against VDOT-based coaching standards.",
      url: "https://roger-black.vercel.app/",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    },
    {
      title: "AIGE",
      description: "A platform to help families coordinate care for aging loved ones — organizing tasks, communication, and resources in one place.",
      aiNote: "Scoped what the AI assistant should and shouldn't do: surface relevant caregiving resources and summarize care notes, but never simulate a medical opinion. Designed guardrail logic to catch emotionally sensitive queries and route them to human support rather than generate a response.",
      url: "https://aige.vercel.app/",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
    },
    {
      title: "Tranare",
      description: "A native iOS app that connects to Strava and provides AI-powered coaching based on your actual run history.",
      aiNote: "Designed the retrieval layer to ground coaching advice in real Strava data rather than generic heuristics — preventing drift between what the model assumed about the user and what their training log showed. Measured coaching relevance by tracking whether suggested workouts matched the athlete's recent load.",
      url: "https://apps.apple.com/app/tranare",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      title: "Workforce Job Trends",
      description: "An analytics platform visualizing real-time labor market data to help teams understand hiring trends and workforce shifts.",
      url: "https://analytics-dashboard-kohl-three.vercel.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
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
            {project.aiNote && (
              <div style={{
                margin: '0.75rem 0',
                padding: '0.75rem',
                background: '#f9f9f9',
                borderLeft: '3px solid #111',
                fontSize: '0.88rem',
                color: '#444',
                lineHeight: '1.6'
              }}>
                <span style={{ fontWeight: '600', color: '#111', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>AI PM Note</span>
                {project.aiNote}
              </div>
            )}
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

