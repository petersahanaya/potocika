import { ottercoFonts } from "@/lib/fonts";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Potocika's Underwater Photography | Ambon City, Maluku, Indonesia",
  description: "Explore Potocika's stunning underwater photography from Ambon City, Maluku, Indonesia. Experience the beauty of marine life and ocean landscapes through expertly captured images that showcase the wonders of the deep.",
  keywords: ["underwater photography", "marine life", "ocean photography", "Ambon City", "Maluku", "Indonesia", "Potocika"],
  authors: { name: "Potocika", url: "https://potocika-photography.com" },
  openGraph: {
    type: "website",
    url: "https://potocika-photography.com",
    title: "Potocika's Underwater Photography",
    description: "Discover the captivating underwater photography of Potocika from Ambon City, Maluku, Indonesia. Dive into a visual journey of vibrant marine life and stunning ocean vistas.",
    images: [
      {
        url: "https://potocika-photography.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Potocika's Underwater Photography"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@PotocikaPhoto",
    creator: "@PotocikaPhoto",
    title: "Potocika's Underwater Photography",
    description: "Explore the mesmerizing underwater photography of Potocika from Ambon City, Maluku, Indonesia. Immerse yourself in the beauty of marine life and ocean landscapes.",
    images: "https://potocika-photography.com/twitter-image.jpg"
  },
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1
  },
  manifest: "https://potocika-photography.com/manifest.json",
  icons: [
    { rel: "icon", url: "https://potocika-photography.com/favicon.ico" },
    { rel: "apple-touch-icon", url: "https://potocika-photography.com/apple-icon.png" }
  ],
  verification: {
    google: "google-verification-token",
    yandex: "yandex-verification-token"
  },
  colorScheme: "light"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ottercoFonts.className}>{children}</body>
    </html>
  );
}
