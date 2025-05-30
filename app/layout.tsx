import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HackTrack - Live Hackathon Leaderboard',
  description: 'Track hackathon projects and their scores in real-time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#333] antialiased`}>
        {children}
      </body>
    </html>
  );
}
