import { FC } from "react";

interface ITab {
  isMobile: boolean;
  sectionRef: {
    home: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
  };
}

const Tab: FC<ITab> = ({ isMobile, sectionRef }) => {
  if (!isMobile) {
    return (
      <div className="tab">
        <button
          onClick={() => {
            sectionRef.experience.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Experiences
        </button>
        <button
          onClick={() => {
            sectionRef.skill.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Skills
        </button>
      </div>
    );
  }

  return null;
};

export default Tab;
