const ProjectsCard = ({ image, url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      // 記得要加上該屬性，安全性考量
      rel="noreferrer noopener"
      className="block rounded-lg shadow-md hover:scale-[1.03] hover:shadow-lg duration-300"
    >
      <img
        src={image}
        alt={title}
        className="h-[15rem] w-full object-cover object-center rounded-t-lg"
      />
      <h5 className="rounded-b-lg bg-white p-4 text-center capitalize tracking-wider font-palanquin font-semibold text-primary">
        {title}
      </h5>
    </a>
  );
};

export default ProjectsCard;
