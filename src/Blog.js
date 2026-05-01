import React, { useState } from 'react';
import memos from './data/aiMemos.json';
import News from './News';

const sorted = [...memos].sort((a, b) => b.date.localeCompare(a.date));

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const Blog = () => {
  const [index, setIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const memo = sorted[index];
  const isLatest = index === 0;
  const isOldest = index === sorted.length - 1;

  const goNewer = () => { setIndex(i => i - 1); setCheckedItems({}); };
  const goOlder = () => { setIndex(i => i + 1); setCheckedItems({}); };

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="ai-memo" style={{ marginBottom: '3rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '400',
          color: '#111',
          marginBottom: '0.25rem'
        }}>
          AI Daily Memo
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>
            Published {formatDate(memo.date)} · Stay current, stay sharp.
            {!isLatest && <span style={{ marginLeft: '0.5rem', color: '#bbb' }}>(archive)</span>}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={goNewer}
              disabled={isLatest}
              style={{
                background: 'none',
                border: '1px solid #ddd',
                borderRadius: '2px',
                padding: '0.2rem 0.6rem',
                fontSize: '0.8rem',
                color: isLatest ? '#ccc' : '#555',
                cursor: isLatest ? 'default' : 'pointer',
              }}
            >
              ← Newer
            </button>
            <span style={{ fontSize: '0.8rem', color: '#bbb' }}>
              {index + 1} / {sorted.length}
            </span>
            <button
              onClick={goOlder}
              disabled={isOldest}
              style={{
                background: 'none',
                border: '1px solid #ddd',
                borderRadius: '2px',
                padding: '0.2rem 0.6rem',
                fontSize: '0.8rem',
                color: isOldest ? '#ccc' : '#555',
                cursor: isOldest ? 'default' : 'pointer',
              }}
            >
              Older →
            </button>
          </div>
        </div>
      </div>

      {/* Memo Card */}
      <div style={{
        border: '1px solid #e5e5e5',
        borderRadius: '2px',
        padding: '1.75rem',
        background: '#fff',
        marginBottom: '2rem'
      }}>
        {/* Title + Summary */}
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#111',
          marginBottom: '0.75rem',
          lineHeight: '1.4'
        }}>
          {memo.title}
        </h3>
        <p style={{
          color: '#444',
          lineHeight: '1.7',
          marginBottom: '1.75rem',
          fontSize: '0.98rem'
        }}>
          {memo.summary}
        </p>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '1.5rem 0' }} />

        {/* Trends */}
        <h4 style={{
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: '1rem'
        }}>
          What's Happening
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
          {memo.trends.map((trend, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#111',
                marginTop: '0.55rem',
                flexShrink: 0
              }} />
              <div>
                <span style={{ fontWeight: '500', color: '#111', fontSize: '0.97rem' }}>
                  {trend.headline}.{' '}
                </span>
                <span style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {trend.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '1.5rem 0' }} />

        {/* Action Items */}
        <h4 style={{
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: '1rem'
        }}>
          Today's Action Items
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {memo.actionItems.map((item, i) => (
            <div
              key={i}
              onClick={() => toggleCheck(i)}
              style={{
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'flex-start',
                cursor: 'pointer',
                opacity: checkedItems[i] ? 0.45 : 1,
                transition: 'opacity 0.2s'
              }}
            >
              {/* Checkbox */}
              <div style={{
                width: '18px',
                height: '18px',
                border: '1.5px solid #bbb',
                borderRadius: '3px',
                marginTop: '2px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: checkedItems[i] ? '#111' : '#fff',
                borderColor: checkedItems[i] ? '#111' : '#bbb',
                transition: 'all 0.15s'
              }}>
                {checkedItems[i] && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div>
                <div style={{
                  fontWeight: '500',
                  color: '#111',
                  fontSize: '0.97rem',
                  textDecoration: checkedItems[i] ? 'line-through' : 'none',
                  marginBottom: '0.2rem'
                }}>
                  {item.label}
                </div>
                <div style={{ color: '#666', fontSize: '0.92rem', lineHeight: '1.55' }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live AI News Feed */}
      <div>
        <h4 style={{
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: '1rem'
        }}>
          Live AI Headlines
        </h4>
        <News />
      </div>
    </section>
  );
};

export default Blog;
