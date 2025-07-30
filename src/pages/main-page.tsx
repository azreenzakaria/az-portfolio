import Navbar from "../shared/components/navbar/navbar";
import UseDeviceDetection from "../shared/hooks/use-device-type";
import { useRef } from "react";
import HomeSection from "./sections/home-sec";
import ExperienceSection from "./sections/exp-sec";
import SkillSection from "./sections/skill-sec";
import ProjectSection from "./sections/project-sec";

const MainPage = () => {
  // Need to debug this, why it printing twice
  console.log(1);
  const deviceType = UseDeviceDetection();
  const isMobile = deviceType === "Mobile";
  const sectionRef = {
    home: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    skill: useRef<HTMLDivElement | null>(null),
    project: useRef<HTMLDivElement | null>(null),
  };
  const navigationMenu =
    isMobile === true ? undefined : <Navbar sectionRef={sectionRef} />;

  return (
    <div className="main">
      {navigationMenu}

      <HomeSection sectionRef={sectionRef.home} />
      <ExperienceSection sectionRef={sectionRef.experience} />
      <SkillSection sectionRef={sectionRef.skill} />
      <ProjectSection sectionRef={sectionRef.project} />
    </div>
  );
};
export default MainPage;
