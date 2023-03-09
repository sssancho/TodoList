import { FilterValuesType } from "./App";

export type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
}

type PropsType = {
  title: string,
  tasks: Array<TaskType>,
  removetask: (id: string) => void,
  changeFilter: (value: FilterValuesType) => void
}

export function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="inputHandler">
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map( (t) => {
            return  <li key={t.id}><input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => {props.removetask(t.id)}}>X</button>
                </li>
          })
        }
      </ul>
      <div>
          <button onClick={() => {props.changeFilter("all")}}>All</button>
          <button onClick={() => {props.changeFilter("active")}}>Active</button>
          <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
      </div>
    </div>
  );
}
