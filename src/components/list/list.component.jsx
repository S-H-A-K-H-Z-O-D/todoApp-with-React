import { Item } from "../item/item.component"

export const List = (props) => {

     return (
          <ul className="mx-auto w-50 p-0 mt-3 js-list">
               {props.allTodo.map(task => (<Item task={task} allTodo={props.allTodo} setAllTodo={props.setAllTodo} key={task.id}/>))}
          </ul>
     )
}