import { ReactComponent as GitLogo } from "../../../assets/icons/github-logo.svg";
import { ReactComponent as LinkedInLogo } from "../../../assets/icons/linkedin-logo.svg";

const IconCard = () => {
  return (
    <div className="icon-card">
      <a
        href="https://www.linkedin.com/in/azreen-zakaria/"
        className="social-container first-icon"
      >
        <LinkedInLogo></LinkedInLogo>
      </a>
      <a
        href="https://github.com/azreenzakaria"
        className="social-container second-icon"
      >
        <GitLogo></GitLogo>
      </a>
    </div>
  );
};

export default IconCard;
