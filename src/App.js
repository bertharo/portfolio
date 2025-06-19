import styles from './App.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main className={styles.main}>
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionText}>Here are some of my projects...</p>
          <Button onClick={() => alert('More projects coming soon!')}>See More Projects</Button>
        </section>
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionText}>This is a short bio about me...</p>
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
