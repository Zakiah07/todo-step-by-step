import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";

function App() {
  const [projects, setProjects] = useState([
    {
      image: "todo-crud.png",
      githubLink: "https://github.dev/Zakiah07/todo-crud",
      webLink: "https://todo-1st.netlify.app/",
      statement1:
        "First version: A basic Create, Read, Update and Delete (CRUD)",
      statement2:
        "functionality Todo List in which i utilized React, JavaScript and",
      statement3: "other libraries called React Icons and React Hot Toast.",
    },
    {
      image: "todo-crud.png",
      githubLink: "https://github.dev/Zakiah07/todo-json",
      webLink: "https://todo-version2.netlify.app/",
      statement1: "Second version: An upgraded version from the first one",
      statement2: "but this time the data are connected to JSON server",
      statement3: "and being fetched using REST API.",
    },
    {
      image: "todo-crud.png",
      githubLink: "https://github.com/Zakiah07/todo-json-ts",
      webLink: "https://todo-version3.netlify.app/",
      statement1: "Third version: A small upgrade from the second ",
      statement2: "version where TypeScript is implemented, replacing ",
      statement3: "JavaScript. This is to enhanced the type safety.",
    },
    {
      image: "todo-4thv.png",
      githubLink: "https://github.com/Zakiah07/todo-json-ts-zs-tw",
      webLink: "https://todo-version4.netlify.app/",
      statement1: "Fourth version: To manage all the state changes, a ",
      statement2: "state management library, Zustand is utilized. It ",
      statement3: "simplifies the state management. Other than that,",
      statement4: "TailwindCSS is implemented for UI styling.",
    },
    {
      image: "todo-5thv.png",
      githubLink: "https://github.dev/Zakiah07/todo-tstwrq-refac",
      webLink: "https://todo-version5.netlify.app/",
      statement1: "Fifth version: A better version where React Query is",
      statement2: "integrated for streamlined data fetching",
      statement3: "and real time updates. Components from DaisyUI,",
      statement4: "an extension from TailwindCSS is incorporated too.",
    },
  ]);

  return (
    <div className="text-center justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold py-10">Todo-List Step</h1>
      <div className="text-lg pb-14">
        <p className="text-xl font-semibold">Hello there!</p>
        Welcome to my project, where we will embark on a journey to build
        <br />
        a Todo List application right from scratch and
        <br />
        how you can improve and make your code even better using handy
        libraries.
        <p className="font-semibold py-2">Let's get started!</p>
      </div>
      {projects.map((item) => (
        <div className="flex flex-row items-center pb-20">
          <div className="flex justify-center flex-col items-center">
            <div className="bg-slate-200 border rounded-full py-20 px-10 hover:border-4">
              <img
                src={item.image}
                alt=""
                className="w-50 h-40"
              />
            </div>
            <div className="project-links flex flex-row py-5 gap-5 text-2xl">
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 hover:scale-125"
              >
                <SiGithub />
              </a>
              <a
                href={item.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 hover:scale-125"
              >
                <MdOpenInNew />
              </a>
            </div>
          </div>
          <div className="p-10">
            <p>{item.statement1}</p>
            <p>{item.statement2}</p>
            <p>{item.statement3}</p>
            <p>{item.statement4}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
