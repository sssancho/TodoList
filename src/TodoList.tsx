
export type TaskType = {
  id: number,
  title: string,
  isDone: boolean,
}

type PropsType = {
  title: string,
  tasks: Array<TaskType>,
  removetask: Function
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
            return  <li><input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => {props.removetask(t.id)}}>X</button>
                </li>
          })
        }
      </ul>
      <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
      </div>
    </div>
  );
}
