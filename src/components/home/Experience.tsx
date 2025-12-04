'use client';
import { useState } from 'react';
import { SiteModel, Experience as ExperienceType } from '@/data/types';

interface ExperienceProps {
  model: SiteModel;
}

export default function Experience({ model }: ExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Interleave jobs and education
  const maxLength = Math.max(model.jobs.length, model.education.length);
  const experiences: ExperienceType[] = [];
  for (let i = 0; i < maxLength; i++) {
    if (i < model.jobs.length) experiences.push(model.jobs[i]);
    if (i < model.education.length) experiences.push(model.education[i]);
  }

  return (
    <section className={`section experiences-section ${isOpen ? 'is-open' : ''}`}>
      <header className="h1 experiences__h1" data-aos="fade-up" data-aos-delay="50">
        <div><h2>{model.home.jobs}</h2></div>
        <div className="muted experiences__opener" onClick={() => setIsOpen(!isOpen)}>
          (tap to <span>{isOpen ? 'hide' : 'show'}</span> details)
        </div>
      </header>
      <header className="h1 experiences__h1" data-aos="fade-up" data-aos-delay="50">
        <div><h2>{model.home.education}</h2></div>
        <div className="muted experiences__opener" onClick={() => setIsOpen(!isOpen)}>
          (tap to <span>{isOpen ? 'hide' : 'show'}</span> details)
        </div>
      </header>
      {experiences.map((experience, index) => (
        <article key={`${experience.title}-${index}`} className="experience" data-aos="fade-up">
          <header className="experience__header">
            <div className="experience__position">
              <a
                title={experience.title}
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experience__title"
              >
                {experience.title}
              </a>
              <div className="muted experience__role">{experience.role}</div>
            </div>
            <div className="experience__dates">
              <div className="experience__dates-inner">
                <div className="experience__start-date">{experience.start}</div>
                <div className="experience__end-date">{experience.end}</div>
              </div>
            </div>
          </header>
          <div className="experience__description">
            <div
              className="experience__description-inner"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
