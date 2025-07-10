const SkillPage = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={sectionRef} className="skill">
      <div className="helloworld">Hello World</div>
    </div>
  );
};

export default SkillPage;
