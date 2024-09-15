import { Inter } from "next/font/google";
import Nav from "./Nav/page";
import Footer from "./Footer/page";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CFuen Therapy",
  description: "Cara Fuentes - Licensed Mental Health Counselor and Qualified Supervisor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />  
        {children}  
        <Footer />
      </body>
    </html>
  );
}
