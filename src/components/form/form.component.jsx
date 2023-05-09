import React from "react";
import { v4 as uuid } from "uuid";
import style from '../style.css'

export const Form = ({setAllTodo}) => {

     let inputRef = React.useRef();

     let createTodo = (evt) => {
          evt.preventDefault();

          let inputValue = inputRef.current.value;
          let newTask = {
               id: uuid(),
               inputValue,
               isCompleted: false
          }

          setAllTodo((prev) => {
               let allTodo = [...prev, newTask]
               localStorage.setItem('allTodo', JSON.stringify(allTodo));

               return allTodo;
          })
          inputRef.current.value = null;
     }

     return (
          <form className="d-flex justify-content-center mx-auto mt-5 w-50" onSubmit={createTodo}>
               <input 
                    ref={inputRef}
                    className="form-control" 
                    type="text" placeholder="Input new task..." 
                    required />
               <button className="btn btn-primary ms-3" >Submit</button>
          </form>
     )
}