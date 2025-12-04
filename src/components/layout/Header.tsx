import { SiteModel } from '@/data/types';
import ThemedImage from '@/components/shared/ThemedImage';

interface HeaderProps {
  model: SiteModel;
  locale: string;
}

export default function Header({ model, locale }: HeaderProps) {
  const otherLocale = locale === 'en' ? 'it' : 'en';

  return (
    <header className="page-header">
      <a href={`/${locale}/`} className="logo" title="Fabio.">
        <ThemedImage
          src="/images/logo.svg"
          darkSrc="/images/logo--dark.svg"
          alt="Fabio."
        />
      </a>
      <div className="page-header__links">
        <a href={`/${locale}/about/`} title="About">{model.header.about}</a>
        <a href="mailto:fabio@sangregorio.dev" target="_blank" rel="noopener noreferrer" title="Contact">
          {model.header.contact}
        </a>
        <a href={`/${otherLocale}/`} title="Fabio.">{model.header.langlink}</a>
      </div>
    </header>
  );
}
