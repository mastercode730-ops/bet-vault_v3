const WA = 'https://wa.me/91918764465110';

const steps = [
  { n: '01', icon: '💬', title: 'Message Us on WhatsApp', desc: 'Send us a quick hello on WhatsApp. No forms, no queues — just a direct message and our team picks it up almost instantly.' },
  { n: '02', icon: '📋', title: 'Share Basic Info',       desc: 'We need just a few details — your name, the platform you prefer, and how much you want to deposit. That is it.' },
  { n: '03', icon: '✅', title: 'ID Created & Delivered', desc: 'We set up and verify your account. Your login credentials come straight to your WhatsApp — clean and ready to go.' },
  { n: '04', icon: '🏏', title: 'Bet & Start Winning',   desc: 'Fund your account with UPI, grab your welcome bonus, and place your first bet. The action starts from here.' },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ background: '#0A0E1A', padding: '72px 0' }}>
      <div className="container-v3">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-tag">Four Easy Steps</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-0.02em' }}>
            From Zero to <span className="blue-text">Betting in Under 5 Minutes</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            We stripped out everything complicated. Here is the entire process, end to end.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px', marginBottom: '44px' }}>
          {steps.map((s, i) => (
            <div key={i} className="card-v3" style={{ borderRadius: '16px', padding: '30px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', position: 'relative' }}>
              {/* Step number badge */}
              <div style={{ position: 'absolute', top: '14px', right: '16px', fontSize: '11px', fontWeight: 700, color: '#374151', letterSpacing: '0.05em' }}>{s.n}</div>
              <div style={{ fontSize: '2.8rem', lineHeight: 1 }}>{s.icon}</div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', margin: 0, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn"
            style={{ padding: '15px 36px', borderRadius: '999px', fontSize: '15px', fontWeight: 700 }}>
            <WaIcon /> Start Now — It Takes 5 Minutes
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
