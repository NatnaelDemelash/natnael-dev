import '@/app/_styles/globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { ThemeProvider } from './_components/ThemeProvider';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Natnael - %s',
    default: 'Natnael - FrontEnd Web Developer',
  },
  description:
    'Natnael Demelash, web developer. Creating intuitive, visually stunning and highly functional web applications.',
  icons: {
    icon: './favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
