import { ToDoList } from "./component/ToDoList";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="bg-emerald-950 max-w-screen h-screen ">
        <Navbar />
        <div className="flex flex-auto flex-wrap">
          <ToDoList object="Habits" object2="Add a Habit" />
          <ToDoList object="Dailies" object2="Add a Daily" />
          <ToDoList object="To Dos" object2="Add a To Do" />
          <ToDoList object="Rewards" object2="Add a Rewards" />
        </div>
      </div>
    </>
  );
}

export default App;
