import { MdOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";

function App() {
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
      <div className="flex justify-center flex-col items-center">
        <a
          href="https://todo-crud-z.netlify.app/"
          target="_blank" // Add this attribute
          rel="noopener noreferrer"
        >
          <div className="bg-slate-200 border rounded-full py-20 px-10">
            <img
              src="/todo-crud.png"
              alt=""
              className="w-50 h-40"
            />
          </div>
        </a>
        <div className="project-links flex flex-row py-5 gap-5 text-2xl">
          <a
            href="https://github.dev/Zakiah07/todo-crud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://todo-crud-z.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOpenInNew />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
