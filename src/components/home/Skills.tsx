import { SiteModel } from '@/data/types';

interface SkillsProps {
  model: SiteModel;
}

export default function Skills({ model }: SkillsProps) {
  return (
    <section className="section">
      <header className="skills__h1 h1" data-aos="fade-up" data-aos-delay="50">
        <h2>{model.home.skills}</h2>
      </header>
      <div className="skills" data-aos="fade-up">
        {model.skills.map((skill, index) => (
          <div key={index} className="skills__item">
            <div className="skills__iteminner">
              <div className="h2">{skill.title}</div>
              <div dangerouslySetInnerHTML={{ __html: skill.description }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
