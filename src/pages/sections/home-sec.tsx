import Lottie from "lottie-react";
import IconCard from "../../shared/components/card/icon-card";
import animationData from "../../assets/animation/scroll-down.json";
import Tab from "../../shared/components/tab/tab";

interface HomeProps {
  isMobile: boolean;
  sectionRef: {
    home: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    skill: React.RefObject<HTMLDivElement>;
  };
}

const HomeSection = ({ sectionRef, isMobile }: HomeProps) => {
  // Need to debug this, why it printing twice
  console.log(isMobile);
  return (
    <div ref={sectionRef.home} className="home">
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

export default HomeSection;
