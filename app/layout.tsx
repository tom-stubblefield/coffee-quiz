import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What's Your Coffee Personality? | Basecamp Coffee",
  description: "Discover your coffee personality and get a personalized drink recommendation from Basecamp Coffee! Take our fun quiz and find your perfect brew.",
  keywords: ["coffee personality quiz", "coffee quiz", "basecamp coffee", "coffee personality test", "coffee recommendation", "coffee types", "find your coffee"],
  authors: [{ name: "Basecamp Coffee" }],
  creator: "Basecamp Coffee",
  publisher: "Basecamp Coffee",
  metadataBase: new URL('https://coffee-quiz-chi.vercel.app'),
  openGraph: {
    title: "What's Your Coffee Personality?",
    description: "Take our fun quiz to discover your coffee personality and get a personalized drink recommendation!",
    url: 'https://coffee-quiz-chi.vercel.app',
    siteName: 'Basecamp Coffee Quiz',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Coffee Personality Quiz - Basecamp Coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's Your Coffee Personality?",
    description: "Discover your coffee personality and get a personalized drink recommendation!",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: "What's Your Coffee Personality?",
    description: 'Discover your coffee personality and get a personalized drink recommendation from Basecamp Coffee!',
    about: {
      '@type': 'Thing',
      name: 'Coffee Personality Types',
    },
    provider: {
      '@type': 'Organization',
      name: 'Basecamp Coffee',
      url: 'https://coffee-quiz-chi.vercel.app',
    },
    hasPart: [
      {
        '@type': 'Question',
        name: 'Pick your ideal weekend activity',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multiple personality-based answers',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
