import { SiteModel } from "@/data/types";
import ThemedImage from "@/components/shared/ThemedImage";

interface FooterProps {
  model: SiteModel;
  locale: string;
}

export default function Footer({ model, locale }: FooterProps) {
  return (
    <footer className="page-footer">
      <div className="footer__cta">
        <div className="page-title footer__title">{model.footer.title}</div>
        <a
          title={model.email_alt}
          href="mailto:fabio@sangregorio.dev"
          className="footer__cta-link link--decorate link--decorate-visible"
          target="_blank"
          rel="noopener noreferrer"
        >
          fabio@sangregorio.dev
        </a>
      </div>
      <div className="footer__bar">
        <a href={`/${locale}/`} className="footer__logo">
          <ThemedImage
            src="/images/logo.svg"
            darkSrc="/images/logo--dark.svg"
            alt="Fabio."
          />
        </a>
        <div className="footer__message">{model.footer.goodbye}</div>
        <div className="footer__links">
          <a
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fabiosangregorio"
          >
            github
          </a>
          <a
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/fabiosangregorio"
          >
            linkedin
          </a>
          <a
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/fabio.sang"
          >
            instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
