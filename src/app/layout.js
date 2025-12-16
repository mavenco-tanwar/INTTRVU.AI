import { Poppins } from "next/font/google";
import Script from "next/script";
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
    apple: "/inttrvu-logo-fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5KR9N5VW');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body className={`${poppins.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KR9N5VW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        {children}
      </body>
    </html>
  );
}
