import { url } from "inspector";
import checklistIcon from "../../../../assets/icons/checklist.png";
import recipeIcon from "../../../../assets/icons/recipe.png";

export const projectItems = [
  {
    name: "Todo Application API",
    url: "https://github.com/azreenzakaria/to-do-list",
    descrition:
      "This To-Do List project, crafted with TypeScript, NestJS, GraphQL, and MySQL, highlights the essential principles of CRUD operations and demonstrates the implementation of a one-to-many relationship.",
    icon: checklistIcon,
    stack: ["Typescript", "NestJs", "GraphQL"],
  },
  {
    name: "Recipe Application API",
    url: "https://github.com/azreenzakaria/recipe-system-backend",
    descrition:
      "This recipe system project, built with TypeScript, NestJS, and MongoDB, showcases the core principles of CRUD operations and effectively implements a one-to-many relationship.",
    icon: recipeIcon,
    stack: ["Typescript", "NestJs", "MongoDb"],
  },
];
