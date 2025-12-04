import { SiteModel } from '@/data/types';

interface AboutHeroProps {
  model: SiteModel;
}

export default function AboutHero({ model }: AboutHeroProps) {
  return (
    <section className="section atf">
      <div>
        <header className="atf__header">
          <div className="page-title atf__h1">
            <div className="reveal-text">
              <div className="reveal-text__content">
                {model.about.title.line1}<span className="atf__number number--1">(1)</span> {model.about.title.line2}<span className="atf__number number--2">(2)</span>
              </div>
            </div>
          </div>
          <div className="muted atf__notes" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            (1) {model.about.notes.line1}<br />
            (2) {model.about.notes.line2}{' '}
            <a
              title="TVtime"
              href="https://www.tvtime.com/it/user/7624959/profile"
              className="link--decorate link--decorate-visible"
              target="_blank"
              rel="noopener noreferrer"
            >
              TVtime
            </a>
          </div>
        </header>
        <div
          className="atf__text"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="900"
          dangerouslySetInnerHTML={{ __html: model.about.description }}
        />
      </div>
    </section>
  );
}
