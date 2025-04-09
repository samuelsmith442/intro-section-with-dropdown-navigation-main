import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Intro section with dropdown navigation',
  description: 'A solution to the Frontend Mentor intro section with dropdown navigation challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-epilogue min-h-screen">
        {children}
      </body>
    </html>
  );
}
