'use client';
import { AboutSection } from '@/data/types';
import Slider from '@/components/shared/Slider';

interface MeSectionProps {
  section: AboutSection;
}

// Helper to format index as 2 digits
const formatIndex = (index: number, total: number): string => {
  return ('0' + (index + 1)).slice(-2);
};

export default function MeSection({ section }: MeSectionProps) {
  const totalItems = ('0' + section.items.length).slice(-2);

  return (
    <section className="section me">
      <header className="me__header" data-aos="fade-up" data-aos-delay="50">
        <div className="h1 me__h1">{section.title}</div>
        <div
          className="me__text"
          dangerouslySetInnerHTML={{ __html: section.description }}
        />
      </header>
      <Slider className="me__items mobile-slider" mobileOnly>
        {section.items.map((item, index) => (
          <div key={index} className="me__item" data-aos="fade-up" data-aos-delay="50">
            {item.title && (
              <div className="h2 me__item-h2">
                <a
                  title={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link?.url}
                >
                  {item.title}
                </a>
              </div>
            )}
            {item.description ? (
              <div className="me__item-text">
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                {item.link && (
                  <div className="me__item-link">
                    <div className="slider__counter">
                      -
                      <span className="current-slide">
                        {formatIndex(index, section.items.length)}
                      </span>
                      <span className="total-slides">{totalItems}</span>
                    </div>
                    <a
                      title={item.link.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link.url}
                      className="link--decorate"
                    >
                      {item.link.title}
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <>
                {item.image && !item.link && (
                  <img
                    src={item.image.path}
                    alt={item.image.alt}
                    title={item.image.description}
                  />
                )}
                {item.link ? (
                  <>
                    {item.image && (
                      <a
                        title={item.link.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link.url}
                      >
                        <img
                          src={item.image.path}
                          alt={item.image.alt}
                          title={item.image.description}
                        />
                      </a>
                    )}
                    <div className="me__item-link">
                      <div className="slider__counter">
                        -
                        <span className="current-slide">
                          {formatIndex(index, section.items.length)}
                        </span>
                        <span className="total-slides">{totalItems}</span>
                      </div>
                      <a
                        title={item.link.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link.url}
                        className="link--decorate"
                      >
                        {item.link.title}
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="slider__counter">
                    -
                    <span className="current-slide">
                      {formatIndex(index, section.items.length)}
                    </span>
                    <span className="total-slides">{totalItems}</span>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
}
