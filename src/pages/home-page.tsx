import ExpCard from "../shared/components/card/exp-card";
import IconCard from "../shared/components/card/icon-card";
import ProjectCard from "../shared/components/card/project-card";
import SideBar from "../shared/components/sidebar/sidebar";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="box">
        <div className="profile-container">
          <div className="name">Your Name</div>
          <div className="position">FullStack Developer</div>
          <div className="intro">
            I built projects for fun, blending modern, minimalistic design with
            classic elegance.
          </div>
          <IconCard></IconCard>
        </div>
      </div>
      <div className="box">
        <SideBar></SideBar>
        <div className="content-container">
          {/* <ExpCard></ExpCard> */}
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
