import { SiteModel } from '@/data/types';

interface CompetitionsProps {
  model: SiteModel;
}

export default function Competitions({ model }: CompetitionsProps) {
  return (
    <section className="section">
      <header className="competitions__h1 h1" data-aos="fade-up" data-aos-delay="50">
        <h2>{model.home.competitions}</h2>
      </header>
      <div className="competitions" data-aos="fade-up">
        {model.competitions.map((competition, index) => (
          <div key={index} className="competition">
            <div className="competition__year">{competition.year}</div>
            <div className="h2">{competition.title}</div>
            <div dangerouslySetInnerHTML={{ __html: competition.description }} />
          </div>
        ))}
      </div>
    </section>
  );
}
