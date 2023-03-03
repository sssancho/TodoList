import './App.css';
import { TaskType, TodoList } from './TodoList';

function App() {

  let task1: Array<TaskType> = [
    {id: 1, title: "Css", isDone: true},
    {id: 2, title: "React", isDone: true},
    {id: 3, title: "Redux", isDone: false},

  ]

  let task2: Array<TaskType> = [
    {id: 1, title: "Doctor Strange", isDone: false},
    {id: 2, title: "Fast Furios", isDone: true},
    {id: 3, title: "Sherlock", isDone: true},

  ]


  return (
    <div className="App">
        <TodoList title="What to Learn" tasks={task1}/>
        <TodoList title="Movies" tasks={task2}/>
    </div>
  );
}

export default App;
