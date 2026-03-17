import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#E63946',
};

export const metadata: Metadata = {
  title: "Calendário Cultural POA | Vernissages em Porto Alegre",
  description: "Descubra as melhores exposições de arte e vernissages em Porto Alegre. Adicione eventos ao seu calendário e nunca perca uma exposição.",
  keywords: ["vernissage", "porto alegre", "exposição", "arte", "galeria", "cultura", "poa", "eventos culturais"],
  authors: [{ name: "Calendário Cultural POA" }],
  creator: "Calendário Cultural POA",
  publisher: "Calendário Cultural POA",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://calendarioculturalpoa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: "Calendário Cultural POA | Vernissages em Porto Alegre",
    description: "Descubra as melhores exposições de arte e vernissages em Porto Alegre. Adicione eventos ao seu calendário e nunca perca uma exposição.",
    siteName: "Calendário Cultural POA",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calendário Cultural POA - Vernissages em Porto Alegre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Calendário Cultural POA | Vernissages em Porto Alegre",
    description: "Descubra as melhores exposições de arte e vernissages em Porto Alegre.",
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
