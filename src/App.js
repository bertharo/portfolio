import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './Projects';
import Blog from './Blog';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      
      {/* Minimalistic Hero Section */}
      <header className={styles.header}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '4rem 2rem 2rem 2rem',
          textAlign: 'left'
        }}>
          <h1 className={styles.mainTitle} style={{ 
            fontSize: '2.5rem', 
            fontWeight: '300', 
            marginBottom: '1rem',
            color: '#fff'
          }}>
            Bert Haro
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#fff',
            opacity: 0.9,
            marginBottom: '2rem',
            fontWeight: '300'
          }}>
            AI Product Manager · Boston Marathoner · Podcast Host
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <a href="https://www.linkedin.com/in/bert-h-15181116/" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              opacity: 0.8,
              transition: 'opacity 0.2s'
            }} aria-label="LinkedIn">
              LinkedIn
            </a>
            <span style={{ color: '#fff', opacity: 0.5 }}>•</span>
            <a href="https://www.strava.com/athletes/21540517" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              opacity: 0.8,
              transition: 'opacity 0.2s'
            }} aria-label="Strava">
              Strava
            </a>
            <span style={{ color: '#fff', opacity: 0.5 }}>•</span>
            <a href="https://github.com/bertharo" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              opacity: 0.8,
              transition: 'opacity 0.2s'
            }} aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main} style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        
        {/* About Section - Minimalistic */}
        <section id="about" className={styles.section} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{ 
            fontSize: '1.5rem', 
            fontWeight: '400', 
            marginBottom: '1.5rem',
            color: '#111'
          }}>
            About
          </h2>
          <div style={{ lineHeight: '1.7', color: '#333' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I build AI-powered products — defining how systems should behave, how to know when they're failing, and how to iterate toward the right outputs. My work sits at the intersection of product strategy and AI system design: writing behavior specs, designing evaluation frameworks, and owning the full pipeline from prompt architecture to production monitoring.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Over 10 years I've shipped products at Workday, Roofstock, and Human Interest — scaling to $150MM ARR and leading cross-functional teams across enterprise SaaS and fintech. I bring the same rigor to AI work: clear problem framing, defined success criteria, and honest failure analysis.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I hold an MBA from UC Berkeley's Haas School of Business. I think in systems, work across disciplines, and move fast without losing precision.
            </p>
            <p>
              Outside work I qualified for and ran the 2025 Boston Marathon — a useful reminder that ambitious goals require both a plan and the willingness to iterate when the plan breaks down.
            </p>
          </div>
        </section>

        {/* Experience Section - Clean list */}
        <section className={styles.section} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{ 
            fontSize: '1.5rem', 
            fontWeight: '400', 
            marginBottom: '1.5rem',
            color: '#111'
          }}>
            Experience
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={process.env.PUBLIC_URL + '/workday-logo.png'} alt="Workday" style={{ width: '40px', height: 'auto' }} />
              <div>
                <div style={{ fontWeight: '500', color: '#111' }}>Workday</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Enterprise SaaS</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={process.env.PUBLIC_URL + '/roofstock-logo.png'} alt="Roofstock" style={{ width: '40px', height: 'auto' }} />
              <div>
                <div style={{ fontWeight: '500', color: '#111' }}>Roofstock</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Fintech</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={process.env.PUBLIC_URL + '/human-interest-logo.png'} alt="Human Interest" style={{ width: '40px', height: 'auto' }} />
              <div>
                <div style={{ fontWeight: '500', color: '#111' }}>Human Interest</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Fintech</div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className={styles.section} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{ 
            fontSize: '1.5rem', 
            fontWeight: '400', 
            marginBottom: '1.5rem',
            color: '#111'
          }}>
            Podcast
          </h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: '1rem', color: '#333', lineHeight: '1.7' }}>
              I host a podcast focused on startups, featuring conversations with founders and entrepreneurs about building companies, product development, and the journey of bringing ideas to life.
            </p>
            <a href="https://open.spotify.com/episode/4IPwB35TmY5Ifeay0CNmOa?si=difNGTeBRz2VOv49ICEu-g&nd=1&dlsi=2b7a9b8d228e4d52" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#111',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '400',
              transition: 'opacity 0.2s'
            }}>
              Latest Episode: Built AI-First: ololand.ai →
            </a>
          </div>
        </section>

        {/* Featured Section - Simple link */}
        <section id="featured" className={styles.section} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{ 
            fontSize: '1.5rem', 
            fontWeight: '400', 
            marginBottom: '1.5rem',
            color: '#111'
          }}>
            Featured
          </h2>
          <div>
            <a href="https://creators.spotify.com/pod/profile/lee-greathouse/episodes/Episode-1-Bert-Haro-e322smi" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#111',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '400',
              transition: 'opacity 0.2s'
            }}>
              Qualified Podcast: Episode 1 Bert Haro
            </a>
          </div>
        </section>

        {/* Projects Section - Card-based layout */}
        <section id="projects" className={styles.section} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            marginBottom: '1.5rem',
            color: '#111'
          }}>
            Projects
          </h2>
          <Projects />
        </section>

        {/* AI Daily Memo */}
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
