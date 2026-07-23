"use client";
import Link from 'next/link';
import Image from 'next/image';

const WA = 'https://wa.me/918678756678';

const quickLinks = [
  { label: 'Home',         href: '#hero'         },
  { label: 'About Us',     href: '#about'        },
  { label: 'Sports',       href: '#sports'       },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Blog',         href: '#blog'         },
  { label: 'FAQ',          href: '#faq'          },
];

const blogLinks = [
  { label: 'IPL Betting Guide 2026',     href: '/blog/ipl-betting-guide-2026'               },
  { label: 'Choosing a Safe Platform',   href: '/blog/how-to-choose-safe-betting-platform'   },
  { label: 'Top Betting Strategies',     href: '/blog/cricket-betting-strategies-that-work'  },
  { label: 'Understanding Betting Odds', href: '/blog/understanding-betting-odds'            },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" style={{ background: '#080C16', borderTop: '1px solid rgba(59,130,246,0.15)', paddingTop: '56px', paddingBottom: '24px' }}>
      <style>{`
        .ft-link { color: #9CA3AF; font-size: 14px; cursor: pointer; background: none; border: none; padding: 0; display: flex; align-items: center; gap: 6px; text-decoration: none; transition: color 0.2s; }
        .ft-link:hover { color: #60A5FA !important; }
        .ft-legal-link { color: #4B5563; font-size: 12px; text-decoration: none; transition: color 0.2s; }
        .ft-legal-link:hover { color: #60A5FA; }
      `}</style>

      <div className="container-v3">
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '36px', marginBottom: '48px' }} id="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image src="/logo.jpeg" alt="Bet Vault" width={50} height={50} style={{ borderRadius: '10px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '18px', color: '#fff' }}>BET VAULT</div>
                <div style={{ fontSize: '10px', color: '#3B82F6', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Trusted · Fast · Secure</div>
              </div>
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.75, maxWidth: '340px', marginBottom: '20px' }}>
              India&apos;s go-to platform for getting a cricket betting ID quickly and safely. Fast setup, real support, and a team that genuinely cares.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn"
              style={{ padding: '11px 22px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, display: 'inline-flex' }}>
              <WaIcon /> &nbsp;WhatsApp: +91 86787 56678
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#60A5FA', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li></li>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <button className="ft-link" onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}>
                    <span style={{ color: '#3B82F6', fontWeight: 700 }}>›</span> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 style={{ color: '#60A5FA', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Latest Articles</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {blogLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="ft-link">
                    <span style={{ color: '#3B82F6', fontWeight: 700 }}>›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#60A5FA', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <WaIcon color="#25D366" />
                </div>
                <div>
                  <div style={{ color: '#F9FAFB', fontSize: '13px', fontWeight: 600 }}>WhatsApp</div>
                  <div style={{ color: '#6B7280', fontSize: '12px' }}>+91 86787 56678</div>
                </div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" fill="none" stroke="#60A5FA" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <div style={{ color: '#F9FAFB', fontSize: '13px', fontWeight: 600 }}>Support Hours</div>
                  <div style={{ color: '#6B7280', fontSize: '12px' }}>24 / 7 / 365</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" fill="none" stroke="#60A5FA" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div style={{ color: '#F9FAFB', fontSize: '13px', fontWeight: 600 }}>Location</div>
                  <div style={{ color: '#6B7280', fontSize: '12px' }}>Pan-India · All States</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <style>{`@media(min-width:640px){ #footer-grid{ grid-template-columns: 1fr 1fr!important; } } @media(min-width:1024px){ #footer-grid{ grid-template-columns: 2fr 1fr 1fr 1fr!important; } }`}</style>

        {/* Disclaimer */}
        <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px', textAlign: 'center' }}>
          <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#F59E0B' }}>Responsible Gambling: </strong>
            Betting is for entertainment only. Gamble within your means. You must be 18+ to use this platform. Please check local laws before participating.
          </p>
        </div>

        {/* Sports icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
          {['🏏','⚽','🏀','🎾','🎰'].map((ic, i) => <span key={i} style={{ fontSize: '20px', opacity: 0.5 }}>{ic}</span>)}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(59,130,246,0.1)', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#4B5563', fontSize: '12px', margin: '0 0 8px' }}>© {year} Bet Vault. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="ft-legal-link">Sitemap</a>
            <span style={{ color: '#374151' }}>·</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="ft-legal-link">Robots.txt</a>
            <span style={{ color: '#374151' }}>·</span>
            {['Privacy Policy', 'Terms & Conditions', 'Responsible Gaming'].map(l => (
              <a key={l} href={WA} target="_blank" rel="noopener noreferrer" className="ft-legal-link">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

function WaIcon({ color = '#fff' }: { color?: string }) {
  return (
    <svg width="16" height="16" fill={color} viewBox="0 0 448 512" style={{ flexShrink: 0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
