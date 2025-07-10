import Lottie from "lottie-react";
import IconCard from "../shared/components/card/icon-card";
import animationData from "../assets/animation/scroll-down.json";
import Tab from "../shared/components/tab/tab";

interface ProfileProps {
  isMobile: boolean;
  sectionRef: {
    profile: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
  };
}

const ProfilePage = ({ sectionRef, isMobile }: ProfileProps) => {
  // Need to debug this, why it printing twice
  console.log(isMobile);
  return (
    <div ref={sectionRef.profile} className="profile">
      <div className="content">
        <div className="greet">Hi!</div>
        <div className="name">I'm Azreen Zakaria</div>
        <div className="position">Full-Stack Web Developer</div>
        <IconCard></IconCard>
        <Lottie
          animationData={animationData}
          style={{
            width: "4rem",
            height: "4rem",
            position: "absolute",
            bottom: "1rem",
            left: "50%",
          }}
        />
      </div>
      <Tab sectionRef={sectionRef} isMobile={isMobile} />
    </div>
  );
};

export default ProfilePage;
