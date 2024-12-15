import { ReactNode } from "react";
import ProjectCard from "../../card/project-card";
import ExpCard from "../../card/exp-card";

interface IRoute {
  element: ReactNode;
  title: string;
  path: string;
}

export const TabRoutes: IRoute[] = [
  {
    element: <div>About Component</div>,
    title: "ABOUT",
    path: "/",
  },
  {
    element: <ExpCard />,
    title: "EXPERIENCES",
    path: "/experiences",
  },
  {
    element: <ProjectCard />,
    title: "PROJECTS",
    path: "/projects",
  },
];
