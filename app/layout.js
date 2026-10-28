import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "RevenueStack — Backend Growth Partner",
  description:
    "RevenueStack installs the backend for 7 and 8 figure info and agency businesses that already cracked the front end. Keep clients, monetize them, and scale without the founder in fulfillment.",
  applicationName: "RevenueStack",
};

export const viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
