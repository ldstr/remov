import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Remov - Playlist Track Removal Form',
  description: 'Automated playlist track removal form'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en-US'>
      <body className='text-gray-200'>{children}</body>
    </html>
  );
}
