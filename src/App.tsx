import { ToDoList } from "./component/ToDoList";
import Navbar from "./component/Navbar";
import SearchComponent from "./component/searchComponent";
import AddTask from "./component/addTask";

import { useState } from "react";
import { useToDo } from "./component/ToDoContext";
import { ToDoListProvider } from "./component/ToDoContext";

function App() {
  const {} = useToDo();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <ToDoListProvider searchTerms={searchTerm}>
        <div className="bg-mz_yellow max-w-screen h-screen ">
          <Navbar />

          <div>
            <div className="flex flex-auto justify-center">
              <SearchComponent onSearch={handleSearch} />
              <AddTask />
            </div>

            <div className="flex flex-auto flex-wrap justify-center">
              <ToDoList object="Habits" tag="Add a Habit" />
              <ToDoList object="Dailies" tag="Add a Daily" />
              <ToDoList object="To Dos" tag="Add a To Do" />
              <ToDoList object="Rewards" tag="Add a Rewards" />
            </div>
          </div>
        </div>
      </ToDoListProvider>
    </>
  );
}

export default App;
