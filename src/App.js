import Blog from './Blog';

// The React app now serves only the daily AI memo, mounted at /memo.
// The home page (/) is a static, crawlable HTML file in site/index.html.
function App() {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: '#fafafa',
      minHeight: '100vh',
      color: '#1a1a1a',
    }}>
      <header style={{
        borderBottom: '1px solid #e5e5e5',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <a href="/" style={{ fontSize: '0.88rem', fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>
            ← Bert Haro
          </a>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999' }}>
            Daily AI Memo
          </span>
        </div>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <Blog />
      </main>

      <footer style={{
        borderTop: '1px solid #e5e5e5',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: '#bbb',
        letterSpacing: '0.04em',
      }}>
        © {new Date().getFullYear()} Bert Haro · <a href="/" style={{ color: '#999' }}>bertharo.com</a>
      </footer>
    </div>
  );
}

export default App;
