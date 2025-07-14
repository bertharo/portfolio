import React, { useEffect, useState } from 'react';

const RSS_URL = 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US:en';
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

function getFavicon(url) {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}`;
  } catch {
    return '';
  }
}

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          setArticles(data.items.slice(0, 5)); // Show top 5
        } else {
          setError('Failed to load news.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load news.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {articles.map(article => (
        <div key={article.guid} style={{ 
          marginBottom: '1.5rem', 
          textAlign: 'left', 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '0.7rem',
          padding: '0.5rem 0'
        }}>
          <img src={getFavicon(article.link)} alt="source icon" style={{ 
            width: 20, 
            height: 20, 
            marginTop: 2, 
            flexShrink: 0, 
            borderRadius: 4, 
            background: '#eee',
            minWidth: '20px'
          }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ 
              fontWeight: 'bold', 
              color: '#111', 
              textDecoration: 'underline', 
              fontSize: '1.05rem',
              padding: '0.25rem 0',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              wordBreak: 'break-word'
            }}>
              {article.title}
            </a>
            <div style={{ 
              color: '#888', 
              fontSize: '0.92rem', 
              marginTop: '0.2rem',
              padding: '0.25rem 0'
            }}>
              {article.pubDate ? new Date(article.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
            </div>
            <div style={{ 
              color: '#444', 
              fontSize: '0.98rem', 
              marginTop: '0.3rem',
              lineHeight: '1.4',
              wordBreak: 'break-word'
            }}>
              {article.description.replace(/<[^>]+>/g, '').slice(0, 140)}{article.description.length > 140 ? '...' : ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News; 