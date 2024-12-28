import IconCard from "../shared/components/card/icon-card";
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
          <div className="name">Nilesh Mistry</div>
          <div className="position">Full-Stack Web Developer</div>
          <IconCard></IconCard>
        </div>
      </div>
      <div className="box">{Sidebar}</div>
    </div>
  );
};

export default HomePage;
