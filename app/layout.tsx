'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import LandingPage from '@/components/LandingPage';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [showLanding, setShowLanding] = useState(true);
  const router = useRouter();

  const handleLandingFinish = () => {
    // 1) Hide landing
    setShowLanding(false);
    // 2) Navigate into the main "/" page
    router.push('/');
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {showLanding ? (
          // Full‐screen landing
          <LandingPage onFinish={handleLandingFinish} />
        ) : (
          // Main app layout
          <>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Header
                onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                totalEarnings={totalEarnings}
              />
              <div className="flex flex-1">
                <Sidebar open={sidebarOpen} />
                <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
                  {children}
                </main>
              </div>
            </div>
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
