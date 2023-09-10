import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";

import { useFetchProjects } from "../fetchProducts";

const Projects = () => {
  // use custom Hook
  const { isLoading, data } = useFetchProjects();
  // console.log(data);

  if (isLoading) {
    return (
      <section className="py-20" id="projects">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="projects">
      <div className="align-element">
        <SectionTitle text="web creations" />

        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => {
            return <ProjectsCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
