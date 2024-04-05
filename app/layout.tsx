import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { dosis, josefinSans } from "@/app/ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online shop",
  description: "Shop ships you a good stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="container header__container">
            <nav className={`header__nav ${josefinSans.className}`}>
              <Link className="logo" href="/">Shop</Link>
              <ul className="header__list">
                <li><Link href="/about">about</Link></li>
                <li><Link href="/business">business</Link></li>
                <li><Link href="/contacts">contacts</Link></li>
              </ul>
              {/* burger btn */}
              <div className="burger">
                <span className="burger__stick-one"></span>
                <span className="burger__stick-two"></span>
                <span className="burger__stick-three"></span>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <script src="burger.js"></script>
      </body>
    </html>
  );
}
