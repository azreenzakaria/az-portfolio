import { useState } from "react";
import { TabRoutes } from "./config/tab-config";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("/");

  // Find the active route element
  const activeRoute = TabRoutes.find((route) => route.path === activeTab);
  return (
    <div className="tab">
      {/* Tab */}
      <ul className="tab-container">
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
        ;
      </ul>

      {/* Content */}
      <div className="tab-content">
        {activeRoute?.element || <div>No content available</div>}
      </div>
    </div>
  );
};

export default Tab;
