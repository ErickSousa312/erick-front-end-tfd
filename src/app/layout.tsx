import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import GetRoute from '@/app/components/providerLayout/defaultLayout';
import React, { ReactNode } from 'react';
import { type } from 'os';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <GetRoute>{children}</GetRoute>
      </body>
    </html>
  );
}