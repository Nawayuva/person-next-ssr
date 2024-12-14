import { AuthProvider } from './components/AuthProvider';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <AuthProvider>
          <NavBar />
          <div className="flex-grow">
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

