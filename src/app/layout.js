import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} + ${", bg-[#12141D]"}`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
