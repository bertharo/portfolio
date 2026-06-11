import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './Projects';
import Blog from './Blog';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.mainTitle}>Bert Haro</h1>
          <p className={styles.heroSubtitle}>Product Leader · Boston Marathoner · Podcast Host</p>
          <div className={styles.heroLinks}>
            <a href="https://www.linkedin.com/in/bert-h-15181116/" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>LinkedIn</a>
            <a href="https://www.strava.com/athletes/21540517" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>Strava</a>
            <a href="https://github.com/bertharo" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>GitHub</a>
          </div>
        </div>
      </header>

      <hr className={styles.heroDivider} />

      <main className={styles.main}>

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div style={{ lineHeight: '1.8', color: '#333', maxWidth: '680px' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              I build AI-powered products. Most of that work is deciding how a system should behave — what it should say, what it should refuse to do, and how you'd know when it's wrong — then building the feedback loops to keep it honest in production.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Over 10 years I've shipped products at Workday, Roofstock, and Human Interest — scaling to $150MM+ ARR and leading cross-functional teams across enterprise SaaS and fintech.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I hold an MBA from UC Berkeley's Haas School of Business. I think in systems, work across disciplines, and move fast without losing precision.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I care a lot about who comes next. I've run a mentorship cohort for early-career product managers — the kind of investment in the next generation that pays off in ways no roadmap captures.
            </p>
            <p>
              Outside work I qualified for and ran the 2025 Boston Marathon — a useful reminder that ambitious goals require both a plan and the willingness to iterate when the plan breaks down.
            </p>
          </div>
        </section>

        <hr className={styles.sectionDivider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              { logo: '/workday-logo.png', name: 'Workday', tag: 'Enterprise SaaS' },
              { logo: '/roofstock-logo.png', name: 'Roofstock', tag: 'Fintech' },
              { logo: '/human-interest-logo.png', name: 'Human Interest', tag: 'Fintech' },
            ].map(({ logo, name, tag }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={process.env.PUBLIC_URL + logo} alt={name} style={{ width: '36px', height: 'auto', opacity: 0.85 }} />
                <div>
                  <div style={{ fontWeight: '500', color: '#111', fontSize: '0.97rem' }}>{name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#999', marginTop: '1px' }}>{tag}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.sectionDivider} />

        <section id="podcast" className={styles.section}>
          <h2 className={styles.sectionTitle}>Podcast</h2>
          <p style={{ marginBottom: '1rem', color: '#444', lineHeight: '1.7', maxWidth: '580px' }}>
            I host a podcast on startups — conversations with founders about building companies, product decisions, and the journey from idea to scale.
          </p>
          <a href="https://open.spotify.com/episode/4IPwB35TmY5Ifeay0CNmOa?si=difNGTeBRz2VOv49ICEu-g&nd=1&dlsi=2b7a9b8d228e4d52" target="_blank" rel="noopener noreferrer" style={{ color: '#111', textDecoration: 'none', fontSize: '0.95rem' }}>
            Latest Episode: Built AI-First: ololand.ai →
          </a>
        </section>

        <hr className={styles.sectionDivider} />

        <section id="featured" className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured</h2>
          <a href="https://creators.spotify.com/pod/profile/lee-greathouse/episodes/Episode-1-Bert-Haro-e322smi" target="_blank" rel="noopener noreferrer" style={{ color: '#111', textDecoration: 'none', fontSize: '0.95rem' }}>
            Qualified Podcast: Episode 1 — Bert Haro →
          </a>
        </section>

        <hr className={styles.sectionDivider} />

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <Projects />
        </section>

        <hr className={styles.sectionDivider} />

        <Blog />

      </main>
      <Footer />
    </div>
  );
}

export default App;
