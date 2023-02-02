import { projectItems } from "./data/data";
import { Projects } from "./models/works";

export function createHtml(items:Projects[]) {
    const projects = document.querySelector("ul") as HTMLUListElement;
    for (let i = 0; i < items.length; i++) {
      let projectItems = document.createElement("li");
      projectItems.classList.add("clickable");
      projectItems.addEventListener("click", () => {
        handleClick(items[i].title, items[i].description, items[i].url);
      });
      projectItems.innerText = items[i].title;
      projects.appendChild(projectItems);
    }
  }

  const handleClick = (title:string, description:string, url:string) => {

    const midbox = document.querySelector(".my-midbox") as HTMLDivElement;
    midbox.innerHTML = "";
    let projectHeader = document.createElement("h2");
    let projectDesc = document.createElement("p");
    let projectUrl = document.createElement("a");
    projectUrl.setAttribute('href', url);
    projectUrl.innerText = `Check out ${title}`;
    projectHeader.innerHTML = title;
    projectDesc.innerHTML = description;
    midbox.appendChild(projectHeader);
    midbox.appendChild(projectDesc);
    midbox.appendChild(projectUrl);

  }

  createHtml(projectItems);