import heroIMG from "../assets/heroIMG.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-24 bg-japandi-green-light">
      <div className="align-element grid items-center md:grid-cols-[2fr,1fr] md:gap-2 lg:grid-cols-2 lg:gap-0 ">
        {/* info */}
        <article className="md:text-center">
          <h2 className="text-6xl font-bold tracking-wider lg:tracking-widest">
            I'm Andrew
          </h2>
          <p className="mt-4 text-3xl text-slate-700 tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide capitalize">
            turning ideas into interactive reality
          </p>
          <div className="mt-4 flex gap-x-4 md:justify-center">
            <a
              href="https://github.com/andrewchen19"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithubSquare className="h-6 w-6 lg:h-8 lg:w-8 text-gray-600 hover:text-purple duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewchen1119/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="h-6 w-6 lg:h-8 lg:w-8 text-gray-600 hover:text-purple duration-300" />
            </a>
          </div>
        </article>

        {/* image */}
        <article className="hidden md:block md:max-w-sm lg:ml-24">
          <img src={heroIMG} alt="remote working" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
