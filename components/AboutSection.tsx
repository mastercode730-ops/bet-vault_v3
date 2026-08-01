import Image from 'next/image';

const WA = 'https://wa.me/91918764465110';

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#0A0E1A', padding: '72px 0' }}>
      <div className="container-v3">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start' }} id="about-grid">
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0' }}>
            <span className="section-tag">About Bet Vault</span>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '18px', letterSpacing: '-0.02em', marginTop: '4px' }}>
              We Started Because <span className="blue-text">We Were Frustrated Too</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.8, marginBottom: '14px', maxWidth: '540px' }}>
              Unreliable platforms, customer support that never actually helps, withdrawal requests that sit for days — we lived through all of it before building Bet Vault. We knew there had to be a better way.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.8, marginBottom: '14px', maxWidth: '540px' }}>
              So we built something we ourselves would want to use. A platform run by people who actually love cricket, understand Indian bettors, and are genuinely committed to making every part of the experience feel effortless.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px', maxWidth: '540px' }}>
              Today, over 3 million people across India trust us with their IDs and their money. That trust is not something we take lightly — and we earn it back every single day.
            </p>

            {/* Mini grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', width: '100%', maxWidth: '540px', marginBottom: '28px' }}>
              {[
                { icon: '🔐', t: 'Bank-Grade Security', d: 'Every transaction encrypted' },
                { icon: '⚡', t: 'Ultra Fast Setup',    d: 'ID delivered in minutes'   },
                { icon: '🤝', t: 'No Hidden Charges',   d: 'Transparent every step'    },
                { icon: '🇮🇳', t: 'Pan-India Service',  d: 'Available in every state'  },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '14px', borderRadius: '12px', background: '#111827', border: '1px solid rgba(59,130,246,0.15)' }}>
                  <span style={{ fontSize: '1.3rem', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: '13px' }}>{item.t}</div>
                    <div style={{ color: '#6B7280', fontSize: '12px', marginTop: '2px' }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" className="primary-btn"
              style={{ padding: '13px 30px', borderRadius: '999px', fontSize: '14px', fontWeight: 700 }}>
              Get Started Today →
            </a>
          </div>

          {/* Stats Panel */}
          <div style={{ background: '#111827', borderRadius: '20px', border: '1px solid rgba(59,130,246,0.2)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { v: '2023',    l: 'Founded'         },
                { v: '3M+',     l: 'Active Users'    },
                { v: '< 5 min', l: 'Avg. ID Setup'   },
                { v: '24/7',    l: 'Support Hours'   },
                { v: '10+',     l: 'Payment Methods' },
                { v: '50+',     l: 'Sport Markets'   },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '18px 10px', borderRadius: '12px', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.12)' }}>
                  <div className="blue-text" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ color: '#6B7280', fontSize: '11px', marginTop: '5px', letterSpacing: '0.04em' }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Live status */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px', borderRadius: '12px', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
                <span style={{ color: '#10B981', fontWeight: 700, fontSize: '13px' }}>Platform Status: Live</span>
              </div>
              <span style={{ color: '#6B7280', fontSize: '12px' }}>All systems running. Ready to take your first bet.</span>
            </div>
          </div>
        </div>

        <style>{`@media(min-width:900px){ #about-grid{ grid-template-columns: 1fr 400px !important; } }`}</style>
      </div>
    </section>
  );
}
