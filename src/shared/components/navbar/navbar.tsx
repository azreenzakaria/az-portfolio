// Refer pill.tsx

interface INavbar {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({ sectionRef }: INavbar) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="nav-btn"
          onClick={() => {
            sectionRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {"<azreen/>"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
