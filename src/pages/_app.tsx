import type { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/sass/app.sass';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={workSans.className}>
        <Component {...pageProps} />
      </div>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </ThemeProvider>
  );
}
