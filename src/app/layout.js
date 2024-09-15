import { Inter } from "next/font/google";
import Nav from "./Nav/page";
import Footer from "./Footer/page";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });
const meri = merienda({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const yesevaOne = yesevaone({ subsets: ["latin"] });

export const metadata = {
  title: "CFuen Therapy",
  description: "Cara Fuentes - Licensed Mental Health Counselor and Qualified Supervisor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9ZE6RF1G0E"
          strategy="afterInteractive"
          id="gtag"
        />
        <Script strategy="afterInteractive" id="gtag2">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-9ZE6RF1G0E");
          `}
        </Script>


        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Cara Fuentes - Licensed Mental Health Counselor and Qualified Supervisor"
        />
        <link rel="icon" href="/CFLogoNav.svg" />
      </head>
      <body>
        <Nav />  
        {children}  
        <Footer />
      </body>
    </html>
  );
}

