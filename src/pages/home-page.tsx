import IconCard from "../shared/components/card/icon-card";
import Tab from "../shared/components/tab/tab";
import UseDeviceDetection from "../shared/hooks/use-device-type";
import Lottie from "lottie-react";
import animationData from "../assets/animation/scroll-down.json";

const HomePage = () => {
  const deviceType = UseDeviceDetection();
  const showTab = deviceType === "Desktop";
  const scrollDown =
    deviceType === "Mobile" ? (
      <Lottie
        animationData={animationData}
        style={{
          width: "4rem",
          height: "4rem",
          position: "absolute",
          bottom: "1rem",
        }}
      />
    ) : null;
  return (
    <div className="home-page">
      <div className="box">
        <div className="profile-container">
          <div className="greet">Hi!</div>
          <div className="name">I'm Azreen Zakaria</div>
          <div className="position">Full-Stack Web Developer</div>
          <IconCard></IconCard>
          {scrollDown}
        </div>
      </div>
      <div className="box">
        <Tab showTab={showTab} />
      </div>
    </div>
  );
};

export default HomePage;
