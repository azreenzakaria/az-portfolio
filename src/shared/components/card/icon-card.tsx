import { ReactComponent as GitLogo } from "../../../assets/icons/github-logo.svg";
import { ReactComponent as LinkedInLogo } from "../../../assets/icons/linkedin-logo.svg";

const IconCard = () => {
  return (
    <div className="icon-card">
      <a href="#" className="social-container first-icon">
        <LinkedInLogo></LinkedInLogo>
      </a>
      <a href="#" className="social-container second-icon">
        <GitLogo></GitLogo>
      </a>
    </div>
  );
};

export default IconCard;
