import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Bot from './components/Bot';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Bot/>
        <Footer />
      </body>
    </html>
  );
}
