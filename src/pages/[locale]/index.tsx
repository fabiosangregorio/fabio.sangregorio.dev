import { GetStaticPaths, GetStaticProps } from 'next';
import { modelsEn } from '@/data/models.en';
import { modelsIt } from '@/data/models.it';
import { SiteModel } from '@/data/types';
import { useAOS } from '@/hooks/useAOS';
import Layout from '@/components/layout/Layout';
import AboveTheFold from '@/components/home/AboveTheFold';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Competitions from '@/components/home/Competitions';
import VisitAbout from '@/components/home/VisitAbout';

interface HomePageProps {
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

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ params }) => {
  const locale = params?.locale as string;
  const model = locale === 'it' ? modelsIt : modelsEn;
  return {
    props: {
      model,
      locale,
    },
  };
};

export default function HomePage({ model, locale }: HomePageProps) {
  useAOS();

  return (
    <Layout model={model} locale={locale} bodyClass="home">
      <AboveTheFold model={model} />
      <Experience model={model} />
      <Skills model={model} />
      <Competitions model={model} />
      <VisitAbout model={model} locale={locale} />
    </Layout>
  );
}
