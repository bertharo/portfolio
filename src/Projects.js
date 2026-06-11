import React from 'react';

const projects = [
  {
    title: "Tranare",
    description: "A native iOS app that connects to Strava and coaches from your actual run history. The hard part wasn't generating training advice — it was deciding what the system shouldn't say: it advises on pacing and race prep but defers on injury, and everything it suggests is grounded in your real training log, so what the model believes about you can't drift from what your data shows.",
    url: "https://apps.apple.com/app/tranare",
  },
  {
    title: "kiness.ai",
    description: "A platform for families coordinating care for aging loved ones. The assistant summarizes care notes and surfaces resources, but is deliberately scoped to never simulate a medical opinion — emotionally sensitive queries get routed to a human instead of a generated response.",
    url: "https://aige.vercel.app/",
  },
  {
    title: "tapsa.ai",
    description: "A navigable map of ideas — enter a topic in science or history and follow connections to things you didn't know to ask about. Every connection is grounded in Wikipedia rather than free-form generation, so each link leads somewhere checkable. No accounts, no ads.",
    url: "https://tapsa.ai",
  },
  {
    title: "Workforce Job Trends",
    description: "An analytics platform visualizing real-time labor market data to help teams understand hiring trends and workforce shifts.",
    url: "https://analytics-dashboard-kohl-three.vercel.app/",
  },
];

const ProjectRow = ({ project, index }) => (
  <div style={{
    padding: '1.75rem 0',
    borderBottom: '1px solid #e5e5e5',
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
      <span style={{ fontSize: '0.72rem', color: '#bbb', fontWeight: '500', minWidth: '1.5rem', letterSpacing: '0.04em' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#111', margin: 0 }}>
            {project.title}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#999', textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap', transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = '#111'}
            onMouseLeave={e => e.target.style.color = '#999'}
          >
            Visit →
          </a>
        </div>
        <p style={{ margin: '0.4rem 0 0 0', color: '#555', fontSize: '0.93rem', lineHeight: '1.65', maxWidth: '640px' }}>
          {project.description}
        </p>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div style={{ borderTop: '1px solid #e5e5e5' }}>
    {projects.map((project, i) => (
      <ProjectRow key={project.title} project={project} index={i} />
    ))}
  </div>
);

export default Projects;
