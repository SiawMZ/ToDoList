import { createContext, useState, useContext, ReactNode } from "react";

type objectProps = {
  searchTerms: string;
  children: ReactNode;
};

type Task = {
  title: string;
  remarks: string;

  // Assuming date is represented as a string
};

type ToDoContext = {
  handleAddTask: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task[];
  taskTitle: string;
  taskRemarks: string;
  handleTaskTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteTask: (index: number) => void;
  filteredTasks: Task[];
  handleMoveTaskUp: (index: number) => void;
  handleMoveTaskDown: (index: number) => void;
  handleTaskRemarks: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ToDoContext = createContext({} as ToDoContext);

export function useToDo() {
  return useContext(ToDoContext);
}

export function ToDoListProvider({ searchTerms, children }: objectProps) {
  const [task, setTask] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskRemarks, setTaskRemarks] = useState("");
  //const [newTask, setNewTask] = useState("");

  const handleTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const filteredTasks = task.filter((task) =>
    task.title.toLowerCase().includes(searchTerms.toLowerCase())
  );

  const handleTaskRemarks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskRemarks(event.target.value);
  };

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      return; // Don't add task if title or remarks are empty
    }

    const newTask: Task = {
      title: taskTitle,
      remarks: taskRemarks,
    };

    setTask((prevTask) => [...prevTask, newTask]);
    setTaskTitle("");
    setTaskRemarks("");
  };

  const handleDeleteTask = (index: number) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const handleMoveTaskUp = (index: number) => {
    if (index > 0) {
      const updatedIndex = [...task];
      [updatedIndex[index], updatedIndex[index - 1]] = [
        updatedIndex[index - 1],
        updatedIndex[index],
      ];
      setTask(updatedIndex);
    }
  };

  const handleMoveTaskDown = (index: number) => {
    if (index < task.length - 1) {
      const updatedIndex = [...task];
      [updatedIndex[index], updatedIndex[index + 1]] = [
        updatedIndex[index + 1],
        updatedIndex[index],
      ];
      setTask(updatedIndex);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTask();
  };

  return (
    <ToDoContext.Provider
      value={{
        handleAddTask,
        handleSubmit,
        handleTaskTitle,
        handleDeleteTask,
        handleMoveTaskUp,
        handleMoveTaskDown,
        handleTaskRemarks,
        filteredTasks,
        task,
        taskTitle,
        taskRemarks,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
