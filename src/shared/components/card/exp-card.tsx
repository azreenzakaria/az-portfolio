import Pill from "../pill/pill";
interface IExperience {
  year: string;
  position: string;
  company: string;
  url: string;
  description: string;
  skills: string[];
}

const item: IExperience[] = [
  {
    year: "2022 - 2024",
    position: "Backend Developer",
    company: "Regov Technologies Sdn. Bhd",
    url: "https://www.regovtech.com/",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    skills: ["Typescript", "NodeJs", "Graphql"],
  },
  {
    year: "2022 - 2022",
    position: "Technical Analyst Intern",
    company: "Setel Venture Sdn. Bhd",
    url: "https://www.setel.com/",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    skills: ["MongoDb", "Swagger"],
  },
];

const CardProps = ({
  year,
  position,
  company,
  url,
  description,
  skills,
}: IExperience) => {
  return (
    <div className="container">
      <div className="left">
        <div className="position">{position}</div>
        <div className="company">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        </div>
        <div className="description">{description}</div>
        <Pill items={skills} />
      </div>

      <div className="right">
        <div className="year">{year}</div>
      </div>
    </div>
  );
};

const ExpCard = () => {
  return (
    <div className="exp-card">
      {item.map((item, index) => (
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
