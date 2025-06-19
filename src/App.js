import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>BERT HARO</h1>
      </header>
      <main className={styles.main}>
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionText}>Here are some of my projects...</p>
          <Button onClick={() => alert('More projects coming soon!')}>See More Projects</Button>
        </section>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionText}>
            Hey there — I'm Bert Haro, a product manager who loves solving messy problems and turning ideas into products that people actually use. I've spent the last 10+ years building and growing software at places like Workday, Human Interest, and Roofstock, working on everything from enterprise SaaS to fintech. Along the way, I've led teams, launched new product areas, and helped drive some serious business growth — like scaling products to &gt;$150MM ARR and boosting user engagement through smart design and data.<br /><br />
            I get excited about connecting dots across teams, diving into data, and finding simple solutions to complex challenges. I've got an MBA from UC Berkeley's Haas School of Business, and a healthy obsession with running.<br /><br />
            Speaking of running — I qualified for and ran the Boston Marathon in 2025. When I'm not working on product roadmaps, there's a good chance you'll find me logging miles on the trails or planning my next race.<br /><br />
            Let's connect!
          </p>
        </section>
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p className={styles.sectionText}>You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
