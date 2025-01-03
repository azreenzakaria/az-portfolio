import { projectItems } from "./config/project-config";
import checklistIcon from "../../../assets/icons/checklist.png";
import Pill from "../pill/pill";

interface IProject {
  name: string;
  description: string;
  icon: string;
  stacks: string[];
}

const Props = ({ name, description, icon, stacks }: IProject) => {
  return (
    <div className="container">
      <div className="left">
        <img src={icon} alt="Checklist icon" />
      </div>
      <div className="right">
        <div className="detail">{name}</div>
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
          description={item.descrition}
          icon={item.icon}
          stacks={item.stack}
        />
      ))}
    </div>
  );
};

export default ProjectCard;
