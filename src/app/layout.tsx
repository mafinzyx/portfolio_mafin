import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zherzdiev - Full-Stack Developer Portfolio",
  description: "Personal portfolio of Zherzdiev, a passionate Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "full-stack", "web development"],
  authors: [{ name: "Zherzdiev" }],
  creator: "Zherzdiev",
  publisher: "Zherzdiev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zherzdiev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Zherzdiev - Full-Stack Developer Portfolio",
    description: "Personal portfolio of Zherzdiev, a passionate Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: 'https://zherzdiev.com',
    siteName: 'Zherzdiev Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zherzdiev Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zherzdiev - Full-Stack Developer Portfolio",
    description: "Personal portfolio of Zherzdiev, a passionate Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldBeDark = theme === 'dark' || (!theme && systemPrefersDark);
                  document.documentElement.classList.toggle('dark', shouldBeDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
