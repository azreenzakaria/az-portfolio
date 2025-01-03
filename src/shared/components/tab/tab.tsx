import { FC, useState } from "react";
import { TabRoutes } from "./config/tab-config";
import ExpCard from "../card/exp-card";
import ProjectCard from "../card/project-card";

interface ITab {
  showTab: boolean;
}
const Tab: FC<ITab> = ({ showTab }): JSX.Element => {
  // const Tab = (showTab: ITab) => {
  const [activeTab, setActiveTab] = useState("/");

  // Find the active route element
  const activeRoute = TabRoutes.find((route) => route.path === activeTab);

  if (!showTab) {
    return (
      <div className="pale-bana">
        <div className="exp-title">Experiences</div>
        <ExpCard />
        <div className="project-title">Projects</div>
        <ProjectCard />
      </div>
    );
  } else {
    return (
      <div className="tab">
        {/* Tab */}
        <ul>
          {TabRoutes.map((each) => (
            <li>
              <button
                key={each.path}
                onClick={() => setActiveTab(each.path)}
                className={activeTab === each.path ? "active" : ""}
              >
                {each.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="tab-content">
          {activeRoute?.element || <div>No content available</div>}
        </div>
      </div>
    );
  }
};

export default Tab;
