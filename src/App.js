import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>BERT HARO</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section} style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a href="https://www.linkedin.com/in/bert-h-15181116/" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#111',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} aria-label="LinkedIn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/><line x1="12" y1="11" x2="12" y2="16"/><path d="M16 11c0-1.1-.9-2-2-2s-2 .9-2 2"/></svg>
            </a>
            <a href="https://www.strava.com/athletes/21540517" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#fc4c02',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} aria-label="Strava">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 21.5l-4.5-8.5H0l8 14 8-14h-4.5l-4.5 8.5zm8 0l-4.5-8.5H16l8 14 8-14h-4.5l-4.5 8.5z" fill="currentColor"/></svg>
            </a>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '2rem', 
            margin: '1.5rem 0',
            flexWrap: 'wrap'
          }}>
            <img src={process.env.PUBLIC_URL + '/workday-logo.png'} alt="Workday Logo" style={{ maxHeight: '40px', width: 'auto', maxWidth: '100%' }} />
            <img src={process.env.PUBLIC_URL + '/roofstock-logo.png'} alt="Roofstock Logo" style={{ maxHeight: '40px', width: 'auto', maxWidth: '100%' }} />
            <img src={process.env.PUBLIC_URL + '/human-interest-logo.png'} alt="Human Interest Logo" style={{ maxHeight: '40px', width: 'auto', maxWidth: '100%' }} />
          </div>
          <img src={process.env.PUBLIC_URL + '/profile-photo.jpg'} alt="Bert Haro Profile" style={{ 
            display: 'block', 
            margin: '2rem auto 0', 
            maxWidth: '250px', 
            width: '100%', 
            borderRadius: '8px',
            height: 'auto'
          }} />
        </section>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>ABOUT ME</h2>
          <p className={styles.sectionText}>
            Hey there — I'm Bert Haro, a product manager who loves solving messy problems and turning ideas into products that people actually use. I've spent the last 10+ years building and growing software at places like Workday, Human Interest, and Roofstock, working on everything from enterprise SaaS to fintech. Along the way, I've led teams, launched new product areas, and helped drive some serious business growth — like scaling products to &gt;$150MM ARR and boosting user engagement through smart design and data.<br /><br />
            I get excited about connecting dots across teams, diving into data, and finding simple solutions to complex challenges. I've got an MBA from UC Berkeley's Haas School of Business, and a healthy obsession with running.<br /><br />
            Speaking of running — I qualified for and ran the Boston Marathon in 2025. When I'm not working on product roadmaps, there's a good chance you'll find me logging miles on the trails or planning my next race.<br /><br />
            Let's connect!
          </p>
        </section>
        <section id="featured" className={styles.section}>
          <h2 className={styles.sectionTitle}>FEATURED ON</h2>
          <a href="https://creators.spotify.com/pod/profile/lee-greathouse/episodes/Episode-1-Bert-Haro-e322smi" target="_blank" rel="noopener noreferrer" style={{ 
            fontWeight: 'bold', 
            color: '#111', 
            textDecoration: 'underline', 
            fontSize: '1.1rem',
            padding: '0.5rem 0',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Qualified Podcast: Episode 1 Bert Haro
          </a>
        </section>
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>PROJECTS</h2>
          <div style={{ textAlign: 'left' }}>
            <a href="https://myhux.com/" target="_blank" rel="noopener noreferrer" style={{ 
              fontWeight: 'bold', 
              color: '#111', 
              textDecoration: 'underline', 
              fontSize: '1.1rem', 
              marginBottom: '1rem',
              padding: '0.5rem 0',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
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
