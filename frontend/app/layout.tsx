import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spare',
  description: 'Real-time surplus-to-need matching platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
