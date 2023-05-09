import { useState } from "react";
import { useRef } from "react";

export const Item = (props) => {

     let elEditTask = useRef()
     let [checkedTask, setCheckedTask] = useState(props.task.isCompleted)

     let onChange = (evt) => {

          
          if(evt.target.matches('.btn-edit')){
               let editedTask = prompt('Edit task!', props.task.inputValue);
               
                    if(props.task.id === evt.target.id){
                         elEditTask.current.textContent = editedTask
                         props.task.inputValue = editedTask
                    }
             
               localStorage.setItem('allTodo', JSON.stringify(props.allTodo))

          }

          if(evt.target.matches('.btn-delete')){
               let unDeletedTasks = [];

               props.allTodo.map(task => {
                    if(evt.target.id !== task.id){
                         unDeletedTasks.push(task)
                    }
               })
              
               props.setAllTodo(unDeletedTasks)
               localStorage.setItem('allTodo', JSON.stringify(unDeletedTasks))
          }

          if(evt.target.matches('.checkInput')){
               if(evt.target.checked){
                    setCheckedTask(props.task.isCompleted = true)
               }else{
                    setCheckedTask(props.task.isCompleted = false)
               }

               localStorage.setItem('allTodo', JSON.stringify(props.allTodo))
          }

     }

     return (
          <li className="d-flex border border-3 align-items-center ps-2 mt-1" onClick={onChange}>
               <div className="me-auto">
                    <input type="checkbox" defaultChecked={props.task.isCompleted} id={props.task.id} className="form-check-input checkInput"/>
                    {checkedTask ? <span ref={elEditTask} className="ps-2 text-decoration-line-through">{props.task.inputValue}</span> : <span ref={elEditTask} className="ps-2 ">{props.task.inputValue}</span>}
               </div>
               <button className="btn btn-primary btn-edit" id={props.task.id} type="button" >Edit</button>
               <button className="btn btn-danger ms-2 btn-delete" id={props.task.id} type="button">Delete</button>
          </li>
     )
}