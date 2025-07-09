import { projectItems } from "./config/project-config";
import checklistIcon from "../../../assets/icons/checklist.png";
import Pill from "../pill/pill";

interface IProject {
  name: string;
  url: string;
  description: string;
  icon: string;
  stacks: string[];
}

const Props = ({ name, url, description, icon, stacks }: IProject) => {
  const linkWebsite = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="container">
      <div className="left" onClick={linkWebsite}>
        <img src={icon} alt="Checklist icon" />
      </div>
      <div className="right">
        <div className="detail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </div>
        <div className="detail">{description}</div>
        <Pill items={stacks} />
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="project-card">
      {projectItems.map((item, index) => (
        <Props
          key={index}
          name={item.name}
          url={item.url}
          description={item.descrition}
          icon={item.icon}
          stacks={item.stack}
        />
      ))}
    </div>
  );
};

export default ProjectCard;
