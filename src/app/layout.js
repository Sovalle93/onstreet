// app/layout.js
import './globals.css';
import localFont from 'next/font/local';
import Navbar from './components/navbar';
import Footer from './components/Footer';

const norden = localFont({
  src: [
    {
      path: '../../public/fonts/Norden.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-norden',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}