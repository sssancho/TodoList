import { useState } from 'react';
import { v1 }  from 'uuid';
import './App.css';
import { TaskType, TodoList } from './TodoList';


export type FilterValuesType = "all" | "active" | "completed"


function App() {
  let [tasks, setTasks] = useState<Array<TaskType> >([
    {id: v1(), title: "Html&Css", isDone: true},
    {id: v1(), title: "JavaScript", isDone: true},
    {id: v1(), title:"React", isDone: false},
    {id: v1(), title: "Redux", isDone: false},

  ])

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function addTask(title: string){
    let newTask = {
      id: v1(), 
      title: title, 
      isDone: false}
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  function removeTasks(id: string){
    let filteredTasks = tasks.filter( (t) => t.id !== id)
    setTasks(filteredTasks)
  }

  function changeFilter(value: FilterValuesType){
    setFilter(value)
  }

  
  let tasksForToDoList = tasks;
  if(filter === "completed"){
    tasksForToDoList = tasks.filter( t => t.isDone === true)
  }
  if(filter === "active"){
    tasksForToDoList = tasks.filter( t => t.isDone === false)
  }

  return (
    <div className="App">
        <TodoList 
            title="What to Learn" 
            tasks={tasksForToDoList}
            removetask={removeTasks} 
            changeFilter={changeFilter} 
            addTask={addTask}
          />
    </div>
  );
}

export default App;
