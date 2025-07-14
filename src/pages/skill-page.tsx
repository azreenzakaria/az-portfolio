import SkillCard from "../shared/components/card/skill-card";

const SkillPage = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={sectionRef} className="skill">
      <div className="content">
        <div className="page-title">Skills</div>
        <SkillCard />
      </div>
    </div>
  );
};

export default SkillPage;
