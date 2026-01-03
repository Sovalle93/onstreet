// app/layout.js
import localFont from 'next/font/local';
import Navbar from './components/navbar';

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
        <main className="lg:ml-96 pt-16 lg:pt-0 min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}