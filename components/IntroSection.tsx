const WA = 'https://wa.me/919306604159';

export default function IntroSection() {
  return (
    <section id="intro" style={{ background: '#0A0E1A', padding: '72px 0' }}>
      <div className="container-v3" style={{ maxWidth: '820px' }}>
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">India&apos;s #1 Trusted Platform</span>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Get Your <span className="blue-text">Cricket Betting ID</span> — Set Up in Minutes, Not Days
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.75, marginBottom: '16px', maxWidth: '680px', margin: '0 auto 16px' }}>
            There are millions of cricket fans in India who want to bet, but most platforms make it so complicated you give up before you even start. Bet Vault exists to change that. We get your ID set up fast, handle everything on WhatsApp, and make sure your first experience is smooth — not stressful.
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: 1.75, marginBottom: '36px', maxWidth: '680px', margin: '0 auto 36px' }}>
            Whether you are chasing the next IPL match, an international T20, or just want to try your hand at live casino games, your <strong style={{ color: '#60A5FA' }}>Bet Vault ID</strong> gives you one login that opens it all — backed by a team that is genuinely there for you.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="amber-btn"
            style={{ padding: '15px 36px', borderRadius: '999px', fontSize: '15px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            <WaIcon /> Get My Betting ID Now
          </a>
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
