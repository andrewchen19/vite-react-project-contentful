import SectionTitle from "./SectionTitle";
import aboutIMG from "../assets/aboutIMG.svg";

const About = () => {
  return (
    <section className="bg-japandi-nude py-20" id="about">
      <div className="align-element grid gap-12 items-center md:grid-cols-2">
        {/* img */}
        <img src={aboutIMG} alt="code image" className="w-full h-64" />
        {/* article */}
        <article>
          <SectionTitle text="about me" />
          <p className="text-gray-700 mt-8 tracking-wide leading-7">
            Welcome to my portfolio website 🖐🏽
            <br />
            Explore a collection of my projects and discover my skills in web
            development and design. Get a glimpse of my creative journey and
            passion for creating impactful digital experiences. Join me to
            explore the world of technology and creativity !!!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
