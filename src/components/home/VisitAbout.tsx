import { SiteModel } from '@/data/types';

interface VisitAboutProps {
  model: SiteModel;
  locale: string;
}

export default function VisitAbout({ model, locale }: VisitAboutProps) {
  return (
    <section className="section visit" data-aos="fade-up">
      <div className="visit__text">
        <header className="h1 visit__h1">{model.home.about.title}</header>
        <a
          title="About"
          href={`/${locale}/about/`}
          className="visit__link link--decorate link--arrow"
        >
          {model.home.about.link}
        </a>
      </div>
      <div>
        <img src="/images/guitar.jpg" alt="Custom guitar." title="" />
      </div>
    </section>
  );
}
