import IconCard from "../shared/components/card/icon-card";
import Tab from "../shared/components/tab/tab";
import UseDeviceDetection from "../shared/hooks/use-device-type";

const HomePage = () => {
  const deviceType = UseDeviceDetection();
  const desktop = deviceType === "Desktop";
  console.log("desktop");

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
        <Tab showTab={desktop} />
      </div>
    </div>
  );
};

export default HomePage;
