import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      
      {/* Hero Section - Clean and focused */}
      <header className={styles.header}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2rem',
          padding: '3rem 2rem'
        }}>
          <img src={process.env.PUBLIC_URL + '/profile-photo.jpg'} alt="Bert Haro Profile" style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }} />
          <div style={{ textAlign: 'center' }}>
            <h1 className={styles.mainTitle}>BERT HARO</h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#fff', 
              margin: '0.5rem 0 1rem 0',
              opacity: 0.9
            }}>
              Product Manager & Boston Marathon Qualifier
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <a href="https://www.linkedin.com/in/bert-h-15181116/" target="_blank" rel="noopener noreferrer" style={{ 
                color: '#fff',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }} aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/><line x1="12" y1="11" x2="12" y2="16"/><path d="M16 11c0-1.1-.9-2-2-2s-2 .9-2 2"/></svg>
              </a>
              <a href="https://www.strava.com/athletes/21540517" target="_blank" rel="noopener noreferrer" style={{ 
                color: '#fff',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }} aria-label="Strava">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 21.5l-4.5-8.5H0l8 14 8-14h-4.5l-4.5 8.5zm8 0l-4.5-8.5H16l8 14 8-14h-4.5l-4.5 8.5z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        
        {/* Experience Section - Company logos with context */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '3rem', 
            margin: '2rem 0',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/workday-logo.png'} alt="Workday Logo" style={{ maxHeight: '50px', width: 'auto', maxWidth: '100%', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Enterprise SaaS</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/roofstock-logo.png'} alt="Roofstock Logo" style={{ maxHeight: '50px', width: 'auto', maxWidth: '100%', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Fintech</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/human-interest-logo.png'} alt="Human Interest Logo" style={{ maxHeight: '50px', width: 'auto', maxWidth: '100%', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Fintech</p>
            </div>
          </div>
        </section>

        {/* About Section - Broken into digestible chunks */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>ABOUT ME</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111' }}>Product Leadership</h3>
              <p className={styles.sectionText}>
                I'm a product manager who loves solving messy problems and turning ideas into products that people actually use. I've spent the last 10+ years building and growing software at places like Workday, Human Interest, and Roofstock, working on everything from enterprise SaaS to fintech.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111' }}>Impact & Growth</h3>
              <p className={styles.sectionText}>
                Along the way, I've led teams, launched new product areas, and helped drive some serious business growth — like scaling products to &gt;$150MM ARR and boosting user engagement through smart design and data.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111' }}>Background & Interests</h3>
              <p className={styles.sectionText}>
                I get excited about connecting dots across teams, diving into data, and finding simple solutions to complex challenges. I've got an MBA from UC Berkeley's Haas School of Business, and a healthy obsession with running.
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '8px',
              borderLeft: '4px solid #111'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>🏃‍♂️ Boston Marathon 2025</h3>
              <p className={styles.sectionText} style={{ margin: 0 }}>
                I qualified for and ran the Boston Marathon in 2025. When I'm not working on product roadmaps, there's a good chance you'll find me logging miles on the trails or planning my next race.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Section - Enhanced with context */}
        <section id="featured" className={styles.section}>
          <h2 className={styles.sectionTitle}>FEATURED ON</h2>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111' }}>Qualified Podcast</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Listen to my conversation about product management, running, and building successful products
            </p>
            <a href="https://creators.spotify.com/pod/profile/lee-greathouse/episodes/Episode-1-Bert-Haro-e322smi" target="_blank" rel="noopener noreferrer" style={{ 
              fontWeight: 'bold', 
              color: '#fff', 
              backgroundColor: '#111',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Listen to Episode 1
            </a>
          </div>
        </section>

        {/* Projects Section - Enhanced with description */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>PROJECTS</h2>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '8px'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>
              Hux: Social Media Without Ads
            </h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              A social media platform focused on authentic connections without the distraction of advertisements
            </p>
            <a href="https://myhux.com/" target="_blank" rel="noopener noreferrer" style={{ 
              fontWeight: 'bold', 
              color: '#fff', 
              backgroundColor: '#111',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Visit Hux
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
