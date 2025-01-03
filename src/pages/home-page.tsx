import ExpCard from "../shared/components/card/exp-card";
import IconCard from "../shared/components/card/icon-card";
import ProjectCard from "../shared/components/card/project-card";
import Tab from "../shared/components/tab/tab";
import UseDeviceDetection from "../shared/hooks/use-device-type";

const HomePage = () => {
  const deviceType = UseDeviceDetection();

  // Handle the sidebar
  const Sidebar = deviceType === "Desktop" ? <Tab /> : null;

  return (
    <div className="home-page">
      <div className="box">
        <div className="profile-container">
          <div className="greet">Hi!</div>
          <div className="name">I'm Azreen Zakaria</div>
          <div className="position">Full-Stack Web Developer</div>
          <IconCard></IconCard>
        </div>
      </div>
      <div className="box">
        {/* {Sidebar} */}
        <div className="exp-title">Experiences</div>
        <ExpCard />
        <div className="project-title">Projects</div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default HomePage;
