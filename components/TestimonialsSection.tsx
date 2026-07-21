const WA = 'https://wa.me/918678756678';

const testimonials = [
  { name: 'Rahul S.',  city: 'Mumbai',    stars: 5, sport: '🏏 IPL',       text: 'I have tried three other platforms before this one. Bet Vault is genuinely different — the ID was set up in about 8 minutes and my first withdrawal came through the same evening. That never happened with the others.' },
  { name: 'Deepa M.', city: 'Bangalore',  stars: 5, sport: '⚽ Football',  text: 'I was nervous about putting money into a betting platform for the first time. The team walked me through everything on WhatsApp patiently. No pressure, no confusing terms. I felt safe from the start.' },
  { name: 'Aryan T.', city: 'Hyderabad',  stars: 5, sport: '🏏 T20',       text: 'Fast deposits, fast withdrawals, and the support team actually knows what they are talking about. I asked a question at 1 AM and got a proper answer within minutes. That is rare.' },
  { name: 'Sneha P.', city: 'Chennai',    stars: 5, sport: '🎰 Casino',    text: 'Six months in and I have zero complaints. The platform is smooth, the bonuses are real, and getting money in and out is simple. Exactly what I was looking for.' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: '#111827', padding: '72px 0' }}>
      <div className="container-v3">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-tag">Member Stories</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Real People, <span className="blue-text">Real Experiences</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Over 3 million members across India. Here is what some of them have to say.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '16px' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card-v3" style={{ borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color: '#F59E0B', fontSize: '16px', lineHeight: 1 }}>★</span>
                ))}
              </div>
              {/* Quote */}
              <p style={{ color: '#D1D5DB', fontSize: '14px', lineHeight: 1.75, margin: 0, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(59,130,246,0.1)', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                  <div style={{ color: '#6B7280', fontSize: '12px' }}>{t.city}</div>
                </div>
                <span style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#FCD34D', fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                  {t.sport}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
