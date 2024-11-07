import { experiencesItem } from "./config/exp-config";

interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  description: string;
}

const CardProps = ({
  year,
  position,
  company,
  description,
}: ExperienceItem) => {
  return (
    <div className="card">
      <div className="container">
        <div className="left">{year}</div>
        <div className="right">
          <div className="content">
            {position} - {company}
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div>
      {experiencesItem.map((item, index) => (
        <CardProps
          key={index}
          year={item.year}
          position={item.position}
          company={item.company}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Card;
