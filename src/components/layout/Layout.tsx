import Head from 'next/head';
import { ReactNode } from 'react';
import { SiteModel } from '@/data/types';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from '@/components/shared/ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  model: SiteModel;
  locale: string;
  bodyClass?: string;
  htmlTitle?: string;
}

export default function Layout({ children, model, locale, bodyClass, htmlTitle }: LayoutProps) {
  const fullTitle = `Fabio. - ${htmlTitle || model.meta.title}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={fullTitle} />
        <meta property="twitter:title" content={fullTitle} />
        <meta name="description" content={model.meta.description} />
        <meta property="og:description" content={model.meta.description} />
        <meta property="twitter:description" content={model.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fabio.sangregorio.dev/images/logo.svg" />
        <meta property="twitter:image" content="https://fabio.sangregorio.dev/images/logo.svg" />
        <meta property="og:site_name" content="Fabio." />
        <meta property="og:url" content="https://fabio.sangregorio.dev/" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className={bodyClass}>
        <Header model={model} locale={locale} />
        <main className="page-main">
          {children}
        </main>
        <Footer model={model} locale={locale} />
        <ThemeToggle />
      </div>
    </>
  );
}
