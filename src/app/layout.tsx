import { ottercoFonts } from "@/lib/fonts";
import "@/styles/globals.css";

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
