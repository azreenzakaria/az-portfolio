interface IProject {
  name: string;
  description?: string;
  url?: string;
}

const item: IProject[] = [
  { name: "Coming Soon!", description: undefined, url: undefined },
];

const Props = ({ name, description, url }: IProject) => {
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
