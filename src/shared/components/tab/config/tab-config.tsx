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
    element: (
      <div>
        Hi, I’m [Your Name], a Software Engineer with nearly two years of
        experience building and optimizing digital solutions. I’m a
        detail-oriented problem solver who loves diving into the fine points to
        deliver clean, efficient, and impactful code. When I’m not coding, I
        enjoy having fun and taking time to chill, finding balance between work
        and life. Whether it's collaborating on a team project or refining a
        solo task, I always aim to bring enthusiasm and precision to everything
        I do
      </div>
    ),
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
