import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: `${post.title} | Bet Vault Blog`, description: post.excerpt };
}

const WA = 'https://wa.me/918678756678';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter(p => p.slug !== slug).slice(0, 3);
  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <>
      <style>{`
        .blog-back-link:hover { color: #93C5FD !important; }
        .blog-more-card:hover { border-color: rgba(59,130,246,0.45) !important; transform: translateY(-2px); }
        .blog-more-card { transition: border-color 0.2s, transform 0.2s; }
        .footer-link:hover { color: #60A5FA !important; }
      `}</style>

      {/* Sticky header */}
      <header style={{ background: 'rgba(8,12,22,0.97)', borderBottom: '1px solid rgba(59,130,246,0.15)', padding: '14px 0', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div className="container-v3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '18px', color: '#fff' }}>BET VAULT</span>
            <span style={{ fontSize: '10px', color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Blog</span>
          </Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="amber-btn"
            style={{ padding: '9px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 700 }}>
            Get My Betting ID
          </a>
        </div>
      </header>

      <main style={{ background: '#0A0E1A', minHeight: '100vh', paddingBottom: '72px' }}>

        {/* Hero banner */}
        <div style={{ background: 'linear-gradient(135deg, #0F1E3D 0%, #111827 60%, #0A0E1A 100%)', borderBottom: '1px solid rgba(59,130,246,0.15)', padding: '48px 0 40px' }}>
          <div className="container-v3" style={{ maxWidth: '800px' }}>
            <Link href="/#blog" className="blog-back-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#60A5FA', fontSize: '13px', textDecoration: 'none', marginBottom: '20px' }}>
              ← Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="blog-tag">{post.tag}</span>
              <span style={{ color: '#4B5563', fontSize: '12px' }}>{post.date} · {post.readTime}</span>
            </div>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '16px', letterSpacing: '-0.02em' }}>
              {post.title}
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.75 }}>{post.excerpt}</p>
          </div>
        </div>

        {/* Article body */}
        <div className="container-v3" style={{ maxWidth: '800px', paddingTop: '48px' }}>
          <article>
            {paragraphs.map((para, i) => {
              if (para.startsWith('## ')) {
                return (
                  <h2 key={i} style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#60A5FA', marginTop: '36px', marginBottom: '14px', letterSpacing: '-0.01em' }}>
                    {para.replace('## ', '')}
                  </h2>
                );
              }
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <p key={i} style={{ color: '#F9FAFB', fontWeight: 700, fontSize: '15px', lineHeight: 1.75, marginBottom: '10px' }}>
                    {para.replace(/\*\*/g, '')}
                  </p>
                );
              }
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.85, marginBottom: '16px' }}>
                  {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} style={{ color: '#D1D5DB', fontWeight: 700 }}>{part.replace(/\*\*/g, '')}</strong>
                      : <span key={j}>{part}</span>
                  )}
                </p>
              );
            })}

            {/* In-article CTA */}
            <div style={{ background: 'linear-gradient(135deg, #0F1E3D 0%, #1E2A45 100%)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '16px', padding: '28px', textAlign: 'center', margin: '40px 0' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '10px' }}>
                Ready to Start Betting?
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                Get your Bet Vault cricket betting ID set up in minutes — just message us on WhatsApp.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="amber-btn"
                style={{ padding: '13px 28px', borderRadius: '999px', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <WaIcon /> Get My Betting ID Now
              </a>
            </div>
          </article>

          {/* More Articles */}
          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(59,130,246,0.15)' }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '20px' }}>
              More Articles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
              {others.map((other, i) => (
                <Link key={i} href={`/blog/${other.slug}`} className="blog-more-card"
                  style={{ display: 'block', textDecoration: 'none', background: '#111827', border: '1px solid rgba(59,130,246,0.15)', borderRadius: '14px', overflow: 'hidden' }}>
                  <div style={{ height: '3px', background: i % 2 === 0 ? 'linear-gradient(90deg,#3B82F6,#60A5FA)' : 'linear-gradient(90deg,#F59E0B,#FCD34D)' }} />
                  <div style={{ padding: '18px' }}>
                    <span className="blog-tag" style={{ marginBottom: '10px', display: 'inline-block' }}>{other.tag}</span>
                    <p style={{ color: '#D1D5DB', fontWeight: 600, fontSize: '14px', lineHeight: 1.4, margin: '0 0 10px', fontFamily: 'Space Grotesk, sans-serif' }}>{other.title}</p>
                    <span style={{ color: '#60A5FA', fontSize: '13px', fontWeight: 600 }}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn pulse-blue"
        style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 99, padding: '12px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 700 }}>
        <WaIcon /> Get Your ID
      </a>
    </>
  );
}

function WaIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink: 0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
