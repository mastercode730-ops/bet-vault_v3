'use client';
import { useState } from 'react';

const WA = 'https://wa.me/919306604159';

const faqs = [
  { q: 'Is it legal to get a cricket betting ID in India?', a: 'Betting laws in India vary from state to state, and the situation is genuinely complicated. Many platforms operate under international licences and serve millions of Indian users legally. That said, we always recommend checking the rules specific to your state and betting responsibly within your means.' },
  { q: 'How fast will I get my betting ID?', a: 'In most cases, your ID is created, verified, and delivered to your WhatsApp within 5 to 10 minutes of reaching out. We have built the entire process around speed — no waiting, no queues, no bureaucracy.' },
  { q: 'Can one Bet Vault ID work across multiple platforms?', a: 'Yes. Depending on your setup, your ID can give you access to multiple partner platforms — which means more markets, better odds, and more options without needing to manage multiple separate accounts.' },
  { q: 'Are my deposits and withdrawals actually safe?', a: 'Completely. We only work with platforms that use bank-level encryption and trusted payment gateways. Deposits hit your account almost instantly and withdrawals are processed properly — no games, no delays.' },
  { q: 'Which tournaments can I bet on?', a: 'Pretty much everything — IPL, T20 World Cup, ODI series, Test matches, Big Bash, The Ashes, county cricket. If there is a match happening somewhere on the planet, there is a good chance you can bet on it.' },
  { q: 'How do I actually create my account?', a: 'Just message us on WhatsApp. Share your name and a few basic details and we handle everything else. No lengthy sign-up form, no document uploads, no waiting around for approval.' },
  { q: 'What payment methods are supported?', a: 'UPI, Net Banking, Paytm, PhonePe, Google Pay, and most major Indian wallets. Deposits are instant. Withdrawals are processed quickly once your account is verified.' },
  { q: 'What if I forget my password or get locked out?', a: 'Message us on WhatsApp and we will sort it out. Account recovery usually takes just a few minutes — we verify your identity and get you back in fast.' },
  { q: 'Is Bet Vault itself safe to use?', a: 'Yes. We use encrypted connections, secure payment rails, and strict data practices. Your personal information is never shared with third parties, and every interaction with our team is confidential.' },
  { q: 'How do I reach your support team?', a: 'WhatsApp, 24 hours a day, 7 days a week. You will get a reply from a real person — not a bot — and they will actually help you resolve whatever the issue is.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: '#0A0E1A', padding: '72px 0' }}>
      <div className="container-v3" style={{ maxWidth: '820px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Got Questions?</span>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Straight Answers to the <span className="blue-text">Questions We Get Most</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            No corporate speak, no vague non-answers. Just clear, honest information.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card" style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ color: open === i ? '#60A5FA' : '#F9FAFB', fontWeight: 600, fontSize: '14px', lineHeight: 1.4, transition: 'color 0.2s', flex: 1 }}>
                  {faq.q}
                </span>
                <span style={{
                  flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%',
                  border: '1px solid rgba(59,130,246,0.4)', background: open === i ? 'rgba(59,130,246,0.15)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#60A5FA', transition: 'transform 0.3s, background 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 20px 18px' }}>
                  <div style={{ height: '1px', background: 'rgba(59,130,246,0.15)', marginBottom: '14px' }} />
                  <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px' }}>Still have a question? We are one WhatsApp message away.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="whatsapp-btn"
            style={{ padding: '13px 28px', borderRadius: '999px', fontSize: '14px', fontWeight: 700 }}>
            <WaIcon /> Ask Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="17" height="17" fill="currentColor" viewBox="0 0 448 512" style={{ flexShrink: 0 }}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );
}
