import React from 'react';

const projects = [
  {
    title: "RunGPT",
    description: "An AI running coach that builds training advice around your pace, mileage, and goals. The hard part wasn't generating plans — it was deciding what the system shouldn't say: it advises on pacing and race prep but defers on injury and nutrition, and its output is checked against VDOT coaching standards rather than vibes.",
    url: "https://roger-black.vercel.app/",
  },
  {
    title: "kiness.ai",
    description: "A platform for families coordinating care for aging loved ones. The assistant summarizes care notes and surfaces resources, but is deliberately scoped to never simulate a medical opinion — emotionally sensitive queries get routed to a human instead of a generated response.",
    url: "https://aige.vercel.app/",
  },
  {
    title: "Tranare",
    description: "A native iOS app that connects to Strava and coaches from your actual run history. Advice is grounded in real training data rather than generic heuristics, so what the model believes about you can't drift from what your log shows.",
    url: "https://apps.apple.com/app/tranare",
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
