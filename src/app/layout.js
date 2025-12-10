import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar/Navbar.js";
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"],
});



export const metadata = {
  title: "INTTRVU",
  description: "Inttrvu's Data Science Certification Course",
  icons: {
    icon: "/inttrvu-logo-fav.png", 
    shortcut: "/inttrvu-logo-fav.png",
    apple: "/inttrvu-logo-fav.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
      
      </body>
    </html>
  );
}
