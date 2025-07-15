import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

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
            Product Manager & Boston Marathon Qualifier
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
              I'm a senior product manager with over 10 years of experience building and scaling software products. I specialize in solving complex business problems and turning ideas into products that people actually use. My expertise spans enterprise SaaS, fintech, and consumer products.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Throughout my career, I've led cross-functional teams, launched new product areas, and driven significant business growth. I've helped scale products to over $150MM ARR and boosted user engagement through data-driven design and strategic product decisions.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I hold an MBA from UC Berkeley's Haas School of Business and bring a unique blend of analytical thinking and creative problem-solving to product development. I excel at connecting insights across teams, diving deep into data, and finding elegant solutions to complex challenges.
            </p>
            <p>
              Beyond product management, I'm a dedicated runner who qualified for and completed the Boston Marathon in 2025. This achievement reflects my commitment to setting ambitious goals and the discipline to achieve them.
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

        {/* Projects Section - Clean list */}
        <section id="projects" className={styles.section} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle} style={{ 
            fontSize: '1.5rem', 
            fontWeight: '400', 
            marginBottom: '1.5rem',
            color: '#111'
          }}>
            Projects
          </h2>
          <div>
            <a href="https://myhux.com/" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#111',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '400',
              transition: 'opacity 0.2s'
            }}>
              Hux: Social Media Without Ads
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
