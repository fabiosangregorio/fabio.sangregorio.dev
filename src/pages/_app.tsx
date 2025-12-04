import type { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/sass/app.sass';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={workSans.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
