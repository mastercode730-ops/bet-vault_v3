'use client';
import { useEffect, useRef } from 'react';

const WA = 'https://wa.me/91918764465110';

const tickers = [
  '🏏 Live Cricket Betting', '⚡ ID in 5 Minutes', '🔐 Bank-Level Security',
  '💸 Instant Withdrawals', '🎰 Live Casino', '⚽ Football', '🏀 Basketball',
  '🎾 Tennis', '🏆 IPL 2026', '📱 WhatsApp Support 24/7',
];

export default function HeroSection() {
  return (
    <section id="hero" style={{ paddingTop: '66px', background: '#0A0E1A' }}>

      {/* ── Main Hero Banner ── */}
      <div style={{
        position: 'relative',
        minHeight: 'clamp(300px, 55vw, 520px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050A14 0%, #0A0E1A 40%, #0D1A3A 70%, #091630 100%)',
      }}>

        {/* Animated grid lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        {/* Large glowing orb left */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: 'clamp(250px, 40vw, 500px)', height: 'clamp(250px, 40vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Smaller orb right */}
        <div style={{
          position: 'absolute', bottom: '-20%', right: '5%',
          width: 'clamp(200px, 30vw, 400px)', height: 'clamp(200px, 30vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Cricket bat/ball SVG decoration — right side */}
        <div style={{
          position: 'absolute', right: 'clamp(20px, 6vw, 80px)',
          top: '50%', transform: 'translateY(-50%)',
          opacity: 0.12, pointerEvents: 'none',
          fontSize: 'clamp(100px, 20vw, 220px)', lineHeight: 1,
          userSelect: 'none',
        }}>🏏</div>

        {/* Hexagon pattern right */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '45%', pointerEvents: 'none', overflow: 'hidden', opacity: 0.07,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpolygon points='40,2 78,22 78,62 40,82 2,62 2,22' fill='none' stroke='%233B82F6' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />

        {/* ── Main Content ── */}
        <div className="container-v3" style={{ position: 'relative', zIndex: 2, width: '100%', padding: 'clamp(32px, 5vw, 56px) 20px' }}>
          <div style={{ maxWidth: '680px' }}>

            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.08)', marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981', flexShrink: 0, animation: 'blink 1.5s infinite' }} />
              <span style={{ color: '#60A5FA', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                India&apos;s #1 Trusted Betting Platform
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 5.5vw, 3.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: '0 0 16px',
              color: '#fff',
            }}>
              Your Game.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Your Odds.</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 60%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Your Win.</span>
            </h1>

            {/* Sub-text */}
            <p style={{ color: '#9CA3AF', fontSize: 'clamp(14px, 2.5vw, 17px)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '520px' }}>
              Get your cricket betting ID set up in under 5 minutes — live markets, IPL action, and fast withdrawals, all managed on WhatsApp.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: 'clamp(12px,2vw,16px) clamp(20px,3vw,32px)',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                  color: '#000', fontWeight: 800,
                  fontSize: 'clamp(13px,2vw,15px)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(245,158,11,0.45)',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                <WaIcon /> Get My Betting ID
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: 'clamp(12px,2vw,16px) clamp(20px,3vw,28px)',
                  borderRadius: '999px',
                  border: '1px solid rgba(59,130,246,0.5)',
                  background: 'rgba(59,130,246,0.08)',
                  color: '#60A5FA', fontWeight: 700,
                  fontSize: 'clamp(13px,2vw,15px)',
                  textDecoration: 'none',
                }}>
                How It Works →
              </a>
            </div>

            {/* Trust chips */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
              {['✅ 3M+ Members', '⚡ 5 Min Setup', '🔐 100% Secure'].map((chip, i) => (
                <span key={i} style={{ color: '#6B7280', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>{chip}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, transparent, #0A0E1A)', pointerEvents: 'none' }} />
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>

      {/* ── Scrolling Ticker ── */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          {[...tickers, ...tickers].map((item, i) => (
            <span key={i} style={{ color: '#fff', fontWeight: 700, fontSize: '13px', letterSpacing: '0.02em', margin: '0 24px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {item}<span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '8px' }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div style={{ borderBottom: '1px solid rgba(59,130,246,0.12)', background: 'rgba(59,130,246,0.03)' }}>
        <div className="container-v3">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '16px 0' }}>
            {[
              { v: '3M+', l: 'Active Bettors' },
              { v: '< 5 min', l: 'ID Setup' },
              { v: '24/7', l: 'Live Support' },
              { v: '100%', l: 'Secure' },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '6px 4px',
                borderRight: i < 3 ? '1px solid rgba(59,130,246,0.1)' : 'none',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg,#3B82F6,#60A5FA)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  fontFamily: 'Space Grotesk,sans-serif', fontWeight: 900,
                  fontSize: 'clamp(0.95rem, 2.8vw, 1.4rem)', lineHeight: 1,
                }}>{s.v}</div>
                <div style={{ color: '#6B7280', fontSize: 'clamp(9px, 1.8vw, 12px)', marginTop: '4px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

function WaIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink: 0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
