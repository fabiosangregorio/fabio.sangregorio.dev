'use client';
import { useEffect, useRef } from 'react';
import { SiteModel } from '@/data/types';

interface AboveTheFoldProps {
  model: SiteModel;
}

export default function AboveTheFold({ model }: AboveTheFoldProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize reveal animation after component mounts
    if (revealRef.current) {
      const img = revealRef.current.querySelector('.reveal__content > *') as HTMLElement;
      if (img) {
        revealRef.current.style.height = `${img.scrollHeight}px`;
        revealRef.current.classList.add('loaded');
      }
    }
  }, []);

  return (
    <section className="section atf">
      <div className="atf__text">
        <div className="page-title">
          <div className="reveal-text">
            <div className="reveal-text__content">
              {model.home.title.line1}
              <a
                title="*waves*"
                href="https://codepen.io/fabiosangregorio/"
                target="_blank"
                rel="noopener noreferrer"
                className="atf__hand-container hand-container move"
              >
                <img src="/images/hand.png" className="atf__hand hand wave" alt="*waves*" title="*waves*" />
              </a>
              <br />
              <h1>{model.home.title.line2}</h1>
            </div>
          </div>
        </div>
        <div className="page-subtitle" data-aos="fade-up" data-aos-duration="700" data-aos-delay="800">
          <p dangerouslySetInnerHTML={{ __html: model.home.subtitle }} />
          <a
            title={model.email_alt}
            href="mailto:fabio@sangregorio.dev"
            className="atf__link link--decorate"
          >
            fabio@sangregorio.dev
          </a>
        </div>
      </div>
      <div className="atf__image">
        <div className="reveal" ref={revealRef}>
          <div className="reveal__content">
            <img src="/images/profile.jpg" alt="Profile picture" title="" />
          </div>
        </div>
      </div>
    </section>
  );
}
