import { projectItems } from "./config/project-config";

interface IProject {
  name: string;
  description: string;
}

const Props = ({ name, description }: IProject) => {
  return (
    <div className="project-card">
      <div className="container">
        <div className="img-container">IMAGE</div>

        <div className="desc-container">
          <div className="detail">{name}</div>
          <div className="detail">{description}</div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div>
      {projectItems.map((item, index) => (
        <Props key={index} name={item.name} description={item.descrition} />
      ))}
    </div>
  );
};

export default ProjectCard;
