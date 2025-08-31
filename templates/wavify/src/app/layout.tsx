'use client';
import data from '../data.json';
import './global.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dir = data.metadata.settings.dir || 'ltr';
  const defaultTheme = data.metadata.styles.defaultTheme || 'system';

  return (
    <html lang="en" dir={dir} suppressHydrationWarning>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <body className="body-font">
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme={defaultTheme}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
