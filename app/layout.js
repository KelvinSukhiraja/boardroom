import { Footer, Navbar } from "../components";
import "./globals.css";

export const metadata = {
  title: "The Boardroom Partnership Think Tank",
  description: "~~~",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth antialiased font-poppins">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
