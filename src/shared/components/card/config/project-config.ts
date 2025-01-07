import { url } from "inspector";
import checklistIcon from "../../../../assets/icons/checklist.png";
import recipeIcon from "../../../../assets/icons/recipe.png";

export const projectItems = [
  {
    name: "Todo Application API",
    url: "https://github.com/azreenzakaria/to-do-list",
    descrition:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    icon: checklistIcon,
    stack: ["NestJs", "Graphql"],
  },
  {
    name: "Recipe Application API",
    url: "https://github.com/azreenzakaria/recipe-system-backend",
    descrition:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    icon: recipeIcon,
    stack: ["Node", "Rest API"],
  },
];
