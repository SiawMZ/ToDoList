import { ToDoList } from "./component/ToDoList";
import Navbar from "./component/Navbar";
import SearchComponent from "./component/searchComponent";
import AddTask from "./component/addTask";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <div className="bg-mz_yellow max-w-screen h-screen ">
        <Navbar />

        <div>
          <div className="flex flex-auto justify-center">
            <SearchComponent onSearch={handleSearch} />
            <AddTask />
          </div>

          <div className="flex flex-auto flex-wrap justify-center">
            <ToDoList
              object="Habits"
              object2="Add a Habit"
              searchTerm={searchTerm}
            />
            <ToDoList
              object="Dailies"
              object2="Add a Daily"
              searchTerm={searchTerm}
            />
            <ToDoList
              object="To Dos"
              object2="Add a To Do"
              searchTerm={searchTerm}
            />
            <ToDoList
              object="Rewards"
              object2="Add a Rewards"
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
