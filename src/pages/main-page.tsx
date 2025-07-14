import Navbar from "../shared/components/navbar/navbar";
import UseDeviceDetection from "../shared/hooks/use-device-type";
import HomeSection from "./sections/home-sec";
import ExperienceSection from "./sections/exp-sec";
import SkillSection from "./sections/skill-sec";
import { useRef } from "react";

const MainPage = () => {
  const deviceType = UseDeviceDetection();
  const isMobile = deviceType === "Mobile";
  const sectionRef = {
    home: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    skill: useRef<HTMLDivElement | null>(null),
  };

  return (
    <div className="main">
      <Navbar sectionRef={sectionRef.home} />
      <HomeSection sectionRef={sectionRef} isMobile={isMobile} />
      <ExperienceSection sectionRef={sectionRef.experience} />
      <SkillSection sectionRef={sectionRef.skill} />
    </div>
  );
};
export default MainPage;
