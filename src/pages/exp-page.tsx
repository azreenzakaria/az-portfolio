const ExperiencePage = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={sectionRef} className="experience">
      <div className="helloworld">Hello World</div>
    </div>
  );
};

export default ExperiencePage;
