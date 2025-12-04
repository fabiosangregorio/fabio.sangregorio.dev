import { GetStaticPaths, GetStaticProps } from 'next';
import { modelsEn } from '@/data/models.en';
import { modelsIt } from '@/data/models.it';
import { SiteModel } from '@/data/types';
import { useAOS } from '@/hooks/useAOS';
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import MeSection from '@/components/about/MeSection';

interface AboutPageProps {
  model: SiteModel;
  locale: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { locale: 'en' } },
    { params: { locale: 'it' } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<AboutPageProps> = async ({ params }) => {
  const locale = params?.locale as string;
  const model = locale === 'it' ? modelsIt : modelsEn;
  return {
    props: {
      model,
      locale,
    },
  };
};

export default function AboutPage({ model, locale }: AboutPageProps) {
  useAOS();

  return (
    <Layout model={model} locale={locale} bodyClass="about" htmlTitle={model.header.about}>
      <AboutHero model={model} />
      <MeSection section={model.coding} />
      <MeSection section={model.photography} />
      <MeSection section={model.drawing} />
    </Layout>
  );
}
