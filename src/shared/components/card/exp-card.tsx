import Pill from "../pill/pill";
import { experiencesItem } from "./config/exp-config";

interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  url: string;
  description: string;
  skills: string[];
}

const CardProps = ({
  year,
  position,
  company,
  url,
  description,
  skills,
}: ExperienceItem) => {
  return (
    <div className="container">
      <div className="left">{year}</div>
      <div className="right">
        <div className="content">{position}</div>
        <div className="content">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        </div>
        <div className="content">{description}</div>
        <Pill items={skills} />
      </div>
    </div>
  );
};

const ExpCard = () => {
  return (
    <div className="exp-card">
      {experiencesItem.map((item, index) => (
        <CardProps
          key={index}
          year={item.year}
          position={item.position}
          company={item.company}
          url={item.url}
          description={item.description}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default ExpCard;
