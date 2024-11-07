import { useState } from "react";
import { navigationItems } from "./config/nav-config";

const SideBar = () => {
  // Active States
  const [isActive, setIsActive] = useState(null);

  // Make it active
  const activateClass = (path: any) => {
    setIsActive(path);
  };

  return (
    <ul className="sidebar">
      {navigationItems.map((each) => (
        <li
          key={each.path}
          onClick={() => activateClass(each.path)}
          className={isActive === each.path ? "active" : ""}
        >
          <a href={each.path}>{each.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
