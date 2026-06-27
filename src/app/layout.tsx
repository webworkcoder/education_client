import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/layout/topbar";
import { Navbar } from "@/layout/navbar";
import Footer from "@/layout/footer";
import PageLoader from "@/components/common/PageLoader";
import { Toaster } from "sonner";
import { BsWhatsapp } from "react-icons/bs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topsoneducation.com"),

  title: {
    default: "Topson Education | MBBS Abroad Consultancy for Indian Students",
    template: "%s | Topson Education",
  },

  description:
    "Topson Education provides expert guidance for MBBS abroad admissions in , Uzbekistan, China, Georgia, Kazakhstan, Kyrgyzstan, and other countries. Get complete support for university selection, admission, visa, documentation, and education loans.",

  keywords: [
    "Topson Education",
    "MBBS abroad",
    "Study MBBS abroad",

    "MBBS in Uzbekistan",
    "MBBS in China",
    "MBBS in Kazakhstan",
    "MBBS in Kyrgyzstan",
    "MBBS in Georgia",
    "Medical admission abroad",
    "MBBS consultancy India",
    "NMC approved universities",
    "Affordable MBBS abroad",
    "Medical universities abroad",
    "Indian students MBBS",
    "Education consultancy",
  ],

  authors: [{ name: "Topson Education" }],
  creator: "Topson Education",
  publisher: "Topson Education",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "https://www.topsoneducation.com",
  },

  openGraph: {
    title: "Topson Education | MBBS Abroad Consultancy",
    description:
      "Get complete guidance for MBBS abroad admissions, visa processing, university selection, and education loans with Topson Education.",
    url: "https://www.topsoneducation.com",
    siteName: "Topson Education",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Topson Education - MBBS Abroad",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Topson Education | MBBS Abroad Consultancy",
    description:
      "Expert guidance for MBBS abroad admissions for Indian students.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Education",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <PageLoader />
        <Topbar />
        <Navbar />

        <main className="flex-1">
          {children}
          <Toaster position="top-right" richColors />
        </main>

        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919122029154"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed right-5 bottom-0 -translate-y-1/2 z-50 flex items-center gap-2 bg-green-700 p-4 rounded-full"
        >
         <BsWhatsapp className="w-5 h-5 text-white"/>
         
        </a>
      </body>
    </html>
  );
}
