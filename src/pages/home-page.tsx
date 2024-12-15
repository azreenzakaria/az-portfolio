import IconCard from "../shared/components/card/icon-card";
import Tab from "../shared/components/tab/tab";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="box">
        <div className="profile-container">
          <div className="name">Azreen Zakaria</div>
          <div className="position">Full-Stack Web Developer</div>
          <div className="intro">
            I built projects for fun, blending modern, minimalistic design with
            classic elegance.
          </div>
          <IconCard></IconCard>
        </div>
      </div>
      <div className="box">
        <Tab />
      </div>
    </div>
  );
};

export default HomePage;
