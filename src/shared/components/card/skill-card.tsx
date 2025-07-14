import { ReactComponent as TypescriptIcon } from "../../../assets/icons/typescript.svg";
import { ReactComponent as NodeJSIcon } from "../../../assets/icons/nodejs.svg";

interface SkillItem {
  name?: string;
  path?: JSX.Element;
}

const item: SkillItem[] = [
  { name: "HTML", path: undefined },
  { name: "CSS", path: undefined },
  { name: "Javascript", path: undefined },
  { name: "Typescript", path: <TypescriptIcon /> },
  { name: "NodeJs", path: <NodeJSIcon /> },
  { name: "React", path: undefined },
  { name: "NestJs", path: undefined },
  { name: "MySQL", path: undefined },
  { name: "GraphQl", path: undefined },
];

const CardProps = ({ name, path }: SkillItem) => {
  return (
    <div className="skill-card-content">
      <div className="icon">{path}</div>
      <div className="icon-name">{name}</div>
    </div>
  );
};

const SkillCard = () => {
  return (
    <div className="skill-card">
      {item.map((item, index) => (
        <CardProps key={index} path={item.path} name={item.name} />
      ))}
    </div>
  );
};

export default SkillCard;
