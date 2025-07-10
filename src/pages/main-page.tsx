import Navbar from "../shared/components/navbar/navbar";
import UseDeviceDetection from "../shared/hooks/use-device-type";
import ExperiencePage from "./exp-page";
import ProfilePage from "./profile-page";
import SkillPage from "./skill-page";
import { useRef } from "react";

const MainPage = () => {
  const deviceType = UseDeviceDetection();
  const isMobile = deviceType === "Mobile";
  const sectionRef = {
    profile: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    skill: useRef<HTMLDivElement | null>(null),
  };

  return (
    <div className="main">
      <Navbar sectionRef={sectionRef.profile} />
      <ProfilePage sectionRef={sectionRef} isMobile={isMobile} />
      <ExperiencePage sectionRef={sectionRef.experience} />
      <SkillPage sectionRef={sectionRef.skill} />
    </div>
  );
};
export default MainPage;
