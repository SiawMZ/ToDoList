import { ToDoList } from "./component/ToDoList";
import Navbar from "./component/Navbar";
import SearchComponent from "./component/searchComponent";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <div className="bg-emerald-950 max-w-screen h-screen ">
        <Navbar />

        <div>
          <SearchComponent onSearch={handleSearch} />

          <div className="flex flex-auto flex-wrap px-6">
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
