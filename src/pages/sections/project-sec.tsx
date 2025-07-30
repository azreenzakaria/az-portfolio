import ProjectCard from "../../shared/components/card/project-card";

const ProjectSection = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={sectionRef} className="project">
      <div className="content">
        <div className="page-title">Projects</div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
