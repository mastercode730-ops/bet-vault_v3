import Image from 'next/image';

const WA = 'https://wa.me/919306604159';

const features = [
  { img: '/trusted_platform.png', title: '100% Trusted', desc: 'Every account, every transaction goes through tight security checks. You bet — we handle the safety.' },
  { img: '/users_milestone.png',  title: '3M+ Users',    desc: 'Over 3 million Indian bettors call Bet Vault home. There is a reason the number keeps climbing.' },
  { img: '/instant_id.png',      title: 'ID in Minutes', desc: 'No waiting, no paperwork. Your ID is created, verified and delivered on WhatsApp in minutes.' },
  { img: '/support_247.png',     title: '24/7 Support',  desc: 'Our team is live around the clock. Message us at midnight — someone real will reply fast.' },
  { img: '/secure_payments.png', title: 'Safe Payments', desc: 'UPI, Net Banking, all wallets — every rupee moves through encrypted, bank-grade payment rails.' },
  { img: '/bonus_offers.png',    title: 'Bonus Offers',  desc: 'Kick off with exclusive welcome bonuses. A little extra to start your betting journey right.' },
];

const stats = [
  { value: '3M+',    label: 'Active Members' },
  { value: '< 5min', label: 'ID Activation'  },
  { value: '24/7',   label: 'Live Support'   },
  { value: '100%',   label: 'Secure Platform' },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ background: '#111827', padding: '72px 0' }}>
      <div className="container-v3">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="section-tag">Why Bettors Choose Us</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Built Around What <span className="amber-text">Bettors Actually Need</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Not flashy promises — real features that make your betting life easier from day one.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          {features.map((f, i) => (
            <a key={i} href={WA} target="_blank" rel="noopener noreferrer" className="card-v3"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 22px', borderRadius: '16px', textDecoration: 'none', gap: '14px' }}>
              <div style={{ width: '68px', height: '68px', position: 'relative', flexShrink: 0, background: 'rgba(59,130,246,0.08)', borderRadius: '14px', padding: '6px' }}>
                <Image src={f.img} alt={f.title} fill sizes="68px" style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ color: '#60A5FA', fontWeight: 700, fontSize: '16px', margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{f.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} id="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '22px 12px', borderRadius: '14px', background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="blue-text" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '6px', letterSpacing: '0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(min-width:640px){ #stats-grid{ grid-template-columns: repeat(4,1fr)!important; } }`}</style>

      </div>
    </section>
  );
}
