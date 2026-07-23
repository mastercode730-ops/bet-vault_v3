import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvault.in'),
  title: 'Bet Vault — India\'s Trusted Cricket Betting ID Provider',
  description: 'Get your instant online cricket betting ID in minutes. Fast setup, secure payments, 24/7 support. Join 3 million+ bettors across India.',
  keywords: 'cricket betting id, online betting india, ipl betting, cricket id provider, bet vault',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
