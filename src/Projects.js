import React, { useState } from 'react';

const projects = [
  {
    title: "RunGPT",
    description: "An AI-powered running coach that gives personalized training advice based on your pace, mileage, and goals.",
    aiNote: "Defined the system's behavioral boundaries: what it should confidently advise (pacing, weekly volume, race prep) vs. defer on (injury diagnosis, nutrition). Iterated on the prompt architecture to reduce hallucinated training plans and evaluated output quality by comparing advice against VDOT-based coaching standards.",
    url: "https://roger-black.vercel.app/",
  },
  {
    title: "kiness.ai",
    description: "A platform to help families coordinate care for aging loved ones — organizing tasks, communication, and resources in one place.",
    aiNote: "Scoped what the AI assistant should and shouldn't do: surface relevant caregiving resources and summarize care notes, but never simulate a medical opinion. Designed guardrail logic to catch emotionally sensitive queries and route them to human support rather than generate a response.",
    url: "https://aige.vercel.app/",
  },
  {
    title: "Tranare",
    description: "A native iOS app that connects to Strava and provides AI-powered coaching based on your actual run history.",
    aiNote: "Designed the retrieval layer to ground coaching advice in real Strava data rather than generic heuristics — preventing drift between what the model assumed about the user and what their training log showed. Measured coaching relevance by tracking whether suggested workouts matched the athlete's recent load.",
    url: "https://apps.apple.com/app/tranare",
  },
  {
    title: "Workforce Job Trends",
    description: "An analytics platform visualizing real-time labor market data to help teams understand hiring trends and workforce shifts.",
    url: "https://analytics-dashboard-kohl-three.vercel.app/",
  },
];

const ProjectRow = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
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
          <p style={{ margin: '0.4rem 0 0 0', color: '#555', fontSize: '0.93rem', lineHeight: '1.6', maxWidth: '640px' }}>
            {project.description}
          </p>
          {project.aiNote && (
            <>
              <button
                onClick={() => setOpen(o => !o)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  marginTop: '0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  color: '#999',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'inherit',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = '#111'}
                onMouseLeave={e => e.target.style.color = '#999'}
              >
                {open ? '− Hide AI PM Note' : '+ AI PM Note'}
              </button>
              {open && (
                <div style={{
                  marginTop: '0.75rem',
                  padding: '1rem 1.25rem',
                  background: '#f5f5f5',
                  borderLeft: '2px solid #111',
                  fontSize: '0.88rem',
                  color: '#444',
                  lineHeight: '1.65',
                  maxWidth: '620px',
                }}>
                  {project.aiNote}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <div style={{ borderTop: '1px solid #e5e5e5' }}>
    {projects.map((project, i) => (
      <ProjectRow key={project.title} project={project} index={i} />
    ))}
  </div>
);

export default Projects;
