import { useState } from 'react';
import './App.css';
import { TaskType, TodoList } from './TodoList';


function App() {

  let initTasks: Array<TaskType> = [
    {id: 1, title: "Html&Css", isDone: true},
    {id: 2, title: "JavaScript", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},

  ]

  let arr = useState(initTasks)
  let tasks = arr[0]
  let setTasks = arr[1]

  function removeTasks(id: number){
    let filteredTasks = tasks.filter( (t) => t.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
        <TodoList 
            title="What to Learn" 
            tasks={tasks}
            removetask={removeTasks}  
          />
    </div>
  );
}

export default App;
