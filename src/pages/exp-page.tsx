import ExpCard from "../shared/components/card/exp-card";

const ExperiencePage = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={sectionRef} className="experience">
      <div className="content">
        <div className="page-title">Experiences</div>
        <ExpCard />
      </div>
    </div>
  );
};

export default ExperiencePage;
