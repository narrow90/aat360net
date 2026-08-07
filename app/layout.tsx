import type { Metadata } from "next";
import { Exo_2, Geist_Mono } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://aat360networklab.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AAT 360 NetworkLab | Siti Web, E-commerce e Gestionali",
    template: "%s | AAT 360 NetworkLab",
  },

  description:
    "AAT 360 NetworkLab realizza siti vetrina, e-commerce e software gestionali su misura per aziende e professionisti.",

  applicationName: "AAT 360 NetworkLab",
  creator: "AAT 360 NetworkLab",
  publisher: "AAT 360 NetworkLab",
  category: "Tecnologia",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "AAT 360 NetworkLab",
    title: "AAT 360 NetworkLab | Siti Web, E-commerce e Gestionali",
    description:
      "Siti vetrina, e-commerce e software gestionali su misura per aziende e professionisti.",
    images: [
      {
        url: "/logo-aat360-header.png",
        alt: "AAT 360 NetworkLab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AAT 360 NetworkLab | Siti Web, E-commerce e Gestionali",
    description:
      "Siti vetrina, e-commerce e software gestionali su misura per aziende e professionisti.",
    images: ["/logo-aat360-header.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "AAT 360 NetworkLab",
  url: siteUrl,
  logo: `${siteUrl}/logo-aat360-header.png`,
  description:
    "AAT 360 NetworkLab realizza siti vetrina, e-commerce e software gestionali su misura per aziende e professionisti.",
  email: "info@aat360networklab.it",
  telephone: "+39 379 389 7635",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+39 379 389 7635",
    email: "info@aat360networklab.it",
    contactType: "customer service",
    availableLanguage: ["Italian"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "AAT 360 NetworkLab",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "it-IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${exo2.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
