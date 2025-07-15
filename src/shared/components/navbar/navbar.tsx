// Refer pill.tsx

interface INavbar {
  sectionRef: {
    home: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
    project: React.RefObject<HTMLDivElement>;
  };
}

const Navbar = ({ sectionRef }: INavbar) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="nav-btn"
          onClick={() => {
            sectionRef.home.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {"<azreen/>"}
        </button>
      </div>
      <div className="navbar-right">
        <button
          className="nav-btn"
          onClick={() => {
            sectionRef.experience.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Experience
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            sectionRef.skill.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Skill
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            sectionRef.project.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
