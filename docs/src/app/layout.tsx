import '@yike-design/react/style';
import type { Metadata } from 'next';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Yike Design React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn">
      <body>{children}</body>
    </html>
  );
}
