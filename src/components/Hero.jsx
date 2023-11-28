import heroIMG from "../assets/heroIMG.svg";
import { websites } from "../data";

const Hero = () => {
  return (
    <section className="py-24 bg-japan-green">
      <div className="align-element grid items-center md:grid-cols-[2fr,1fr] md:gap-2 lg:grid-cols-2 lg:gap-0 ">
        {/* info */}
        <article className="md:text-center">
          <h2 className="font-palanquin text-6xl font-bold tracking-wide">
            Andrew Chen
          </h2>
          <p className="mt-10 text-3xl tracking-wide">Front-End Developer</p>
          <p className="mt-2 font-montserrat text-gray-700 text-lg text-slate-gray tracking-wide capitalize">
            turning ideas into interactive reality
          </p>
          <div className="mt-4 flex gap-x-4 md:justify-center">
            {websites.map((web) => {
              const { id, URL, icon } = web;
              return (
                <a
                  key={id}
                  href={URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {icon}
                </a>
              );
            })}
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
