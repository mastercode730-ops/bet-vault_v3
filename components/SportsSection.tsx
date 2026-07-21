const WA = 'https://wa.me/918678756678';

const sports = [
  { icon: '🏏', name: 'Cricket',     hot: true  },
  { icon: '⚽', name: 'Football',    hot: false },
  { icon: '🏀', name: 'Basketball',  hot: false },
  { icon: '🎾', name: 'Tennis',      hot: false },
  { icon: '🏒', name: 'Hockey',      hot: false },
  { icon: '🎰', name: 'Live Casino', hot: true  },
  { icon: '🃏', name: 'Teen Patti',  hot: false },
  { icon: '🎲', name: 'Roulette',    hot: false },
];

export default function SportsSection() {
  return (
    <section id="sports" style={{ background: '#111827', padding: '72px 0' }}>
      <div className="container-v3">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-tag">All Markets. One ID.</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Bet on Every Sport <span className="amber-text">That Gets You Going</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Cricket is where it all started for us, but your Bet Vault ID opens up a whole lot more — live casino, card games, and sports from across the world.
          </p>
        </div>

        {/* Sports Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '48px' }} id="sports-grid">
          {sports.map((s, i) => (
            <a key={i} href={WA} target="_blank" rel="noopener noreferrer" className="card-v3"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', padding: '24px 16px', borderRadius: '14px', gap: '10px', minHeight: '100px', position: 'relative' }}>
              {s.hot && (
                <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#EF4444', color: '#fff', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderRadius: '999px', letterSpacing: '0.06em' }}>HOT</span>
              )}
              <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>{s.icon}</span>
              <span style={{ color: '#D1D5DB', fontWeight: 600, fontSize: '13px', textAlign: 'center' }}>{s.name}</span>
            </a>
          ))}
        </div>
        <style>{`@media(min-width:500px){ #sports-grid{ grid-template-columns: repeat(4,1fr)!important; } }`}</style>

        {/* CTA Banner */}
        <div style={{ borderRadius: '20px', border: '1px solid rgba(59,130,246,0.3)', background: 'linear-gradient(135deg, #0F1E3D 0%, #1E2A45 50%, #0F1E3D 100%)', padding: 'clamp(28px, 5vw, 56px) clamp(20px, 4vw, 48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(245,158,11,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Your First Bet is One Message Away
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '460px', margin: '0 auto 24px', lineHeight: 1.7 }}>
              More than 3 million Indians have already made the switch. Getting started really is as simple as sending a WhatsApp message.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="amber-btn"
              style={{ padding: '14px 32px', borderRadius: '999px', fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <WaIcon /> Claim My Betting ID
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink: 0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
