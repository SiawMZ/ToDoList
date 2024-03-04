import { ToDoList } from "./component/ToDoList";

function App() {
  return (
    <>
      <div className="bg-gray-950 w-screen h-screen">
        <ToDoList object="Habits" />
        <ToDoList object="Dailies" />
        <ToDoList object="To Dos" />
      </div>
    </>
  );
}

export default App;
