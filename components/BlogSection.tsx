'use client';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';

export { blogPosts };

const WA = 'https://wa.me/91918764465110';

export default function BlogSection() {
  return (
    <section id="blog" style={{ background: '#0A0E1A', padding: '72px 0' }}>
      <div className="container-v3">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-tag">Betting Knowledge Hub</span>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff',
            lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-0.02em',
          }}>
            Learn Before You <span className="amber-text">Bet Big</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Practical guides, strategies, and insights written for Indian bettors — no jargon, no fluff, just genuinely useful stuff.
          </p>
        </div>

        {/* 4 Blog Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '20px' }}>
          {blogPosts.map((post, i) => (
            <article key={i} className="card-v3" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Coloured stripe */}
              <div style={{ height: '4px', background: i % 2 === 0 ? 'linear-gradient(90deg,#3B82F6,#60A5FA)' : 'linear-gradient(90deg,#F59E0B,#FCD34D)', flexShrink: 0 }} />

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {/* Meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="blog-tag">{post.tag}</span>
                  <span style={{ color: '#4B5563', fontSize: '11px' }}>{post.date} · {post.readTime}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  color: '#F9FAFB', fontWeight: 700, fontSize: '15px',
                  lineHeight: 1.4, margin: 0, fontFamily: 'Space Grotesk, sans-serif',
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {post.excerpt}
                </p>

                {/* Read More — opens in new tab */}
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: '#60A5FA', fontSize: '13px', fontWeight: 700,
                    textDecoration: 'none', marginTop: 'auto', paddingTop: '12px',
                    borderTop: '1px solid rgba(59,130,246,0.12)',
                  }}
                  className="blog-read-more"
                >
                  Read Full Article
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <style>{`.blog-read-more:hover { color: #93C5FD !important; gap: 10px !important; }`}</style>
      </div>
    </section>
  );
}
