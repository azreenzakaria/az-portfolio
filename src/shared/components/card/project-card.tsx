interface ProjectItem {
  name: string;
  description?: string;
  url?: string;
}

const item: ProjectItem[] = [
  { name: "Coming Soon!", description: undefined, url: undefined },
];

const Props = ({ name, description, url }: ProjectItem) => {
  return (
    <div className="project-card-content">
      <div className="card">{name}</div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="project-card">
      {item.map((item, index) => (
        <Props
          key={index}
          name={item.name}
          url={item.url}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ProjectCard;
