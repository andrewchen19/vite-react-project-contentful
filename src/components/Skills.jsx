import { skills } from "../data";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="align-element">
        <SectionTitle text="tech stack" />
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const { id, icon, title, text } = skill;
            return (
              <article key={id}>
                <span className="text-primary-300">{icon}</span>
                <h4 className="mt-4 tracking-wider font-bold">{title}</h4>
                <p className="mt-2 leading-7 text-gray-500">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
