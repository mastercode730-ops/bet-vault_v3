'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const WA = 'https://wa.me/91918764465110';

const navLinks = [
  { label: 'Home',       href: '#hero'         },
  { label: 'About',      href: '#about'        },
  { label: 'Sports',     href: '#sports'       },
  { label: 'Blog',       href: '#blog'         },
  { label: 'FAQ',        href: '#faq'          },
  { label: 'Contact',    href: '#footer'       },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link { background:none; border:none; cursor:pointer; font-size:13px; font-weight:600;
          letter-spacing:0.06em; text-transform:uppercase; padding:6px 2px; position:relative;
          transition:color 0.2s; color:#9CA3AF; font-family:'Space Grotesk',sans-serif; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#3B82F6,#60A5FA); border-radius:2px;
          transform:scaleX(0); transition:transform 0.25s; }
        .nav-link:hover,.nav-link.active { color:#fff; }
        .nav-link:hover::after,.nav-link.active::after { transform:scaleX(1); }
        .mob-link { display:block; width:100%; text-align:left; background:none; border:none;
          cursor:pointer; color:#D1D5DB; padding:13px 20px; font-size:14px; font-weight:600;
          text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid rgba(59,130,246,0.08);
          transition:color 0.2s, background 0.2s; font-family:'Space Grotesk',sans-serif; }
        .mob-link:hover { color:#60A5FA; background:rgba(59,130,246,0.06); }
        @media(min-width:768px){ .show-md{display:flex!important} .hide-md{display:none!important} }
        @media(max-width:767px){ .show-md{display:none!important} .hamburger{display:flex!important} }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(8,12,22,0.98)' : 'rgba(10,14,26,0.80)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 1px 0 rgba(59,130,246,0.2), 0 4px 24px rgba(0,0,0,0.4)' : 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
      }}>
        {/* Top accent line */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg, #1E40AF, #3B82F6, #60A5FA, #3B82F6, #1E40AF)', opacity: 0.8 }} />

        <div className="container-v3">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '62px' }}>

            {/* ── Logo ── */}
            <button onClick={() => scrollTo('#hero')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(59,130,246,0.3)', flexShrink: 0 }}>
                <Image src="/logo.jpeg" alt="Bet Vault" fill sizes="44px" style={{ objectFit: 'contain' }} priority />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1 }}>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '17px', color: '#fff', letterSpacing: '-0.02em' }}>
                  BET <span className="blue-text">VAULT</span>
                </span>
                <span style={{ fontSize: '9px', color: '#3B82F6', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Trusted · Fast · Secure
                </span>
              </div>
            </button>

            {/* ── Desktop Nav Links ── */}
            <div className="show-md" style={{ alignItems: 'center', gap: '28px' }}>
              {navLinks.map(l => (
                <button key={l.label}
                  className={`nav-link${active === l.href ? ' active' : ''}`}
                  onClick={() => { scrollTo(l.href); setActive(l.href); }}>
                  {l.label}
                </button>
              ))}
            </div>

            {/* ── Right CTA + Hamburger ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Live indicator */}
              <div className="show-md" style={{ alignItems: 'center', gap: '6px', padding: '5px 10px', borderRadius: '999px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'block', boxShadow: '0 0 6px #10B981' }} />
                <span style={{ color: '#10B981', fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em' }}>LIVE</span>
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn"
                style={{ padding: '9px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '7px' }}>
                <WaIcon size={15} />
                <span>+91 87644 65110</span>
              </a>

              {/* Hamburger */}
              <button
                className="hamburger"
                onClick={() => setOpen(!open)}
                style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', cursor: 'pointer', color: '#60A5FA', flexShrink: 0 }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round">
                  {open
                    ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                    : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {open && (
          <div style={{ background: '#080C16', borderTop: '1px solid rgba(59,130,246,0.15)' }}>
            {navLinks.map(l => (
              <button key={l.label} className="mob-link"
                onClick={() => { scrollTo(l.href); setOpen(false); setActive(l.href); }}>
                <span style={{ color: '#3B82F6', marginRight: '8px' }}>›</span>{l.label}
              </button>
            ))}
            <div style={{ padding: '14px 20px' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '13px', borderRadius: '12px', fontSize: '14px', fontWeight: 700 }}>
                <WaIcon size={18} /> WhatsApp +91 87644 65110
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Floating WhatsApp Pill ── */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn pulse-blue"
        style={{ position: 'fixed', bottom: '24px', right: '18px', zIndex: 99, display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, boxShadow: '0 4px 24px rgba(37,211,102,0.45)' }}>
        <WaIcon size={18} />
        <span style={{ display: 'none' }} id="float-label">Get Your ID</span>
      </a>
      <style>{`@media(min-width:480px){#float-label{display:inline!important}}`}</style>
    </>
  );
}

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink: 0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
