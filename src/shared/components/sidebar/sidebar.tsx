import { navigationItems } from "./config/nav-config";

const SideBar = () => {
  return (
    <ul className="sidebar">
      {navigationItems.map((each) => (
        <li key={each.title}>{each.title}</li> // Add key for list rendering
      ))}
    </ul>
  );
};

export default SideBar;
