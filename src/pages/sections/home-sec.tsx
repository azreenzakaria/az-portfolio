import Lottie from "lottie-react";
import IconCard from "../../shared/components/card/icon-card";
import animationData from "../../assets/animation/scroll-down.json";

interface HomeProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const HomeSection = ({ sectionRef }: HomeProps) => {
  return (
    <div ref={sectionRef} className="home">
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
    </div>
  );
};

export default HomeSection;
