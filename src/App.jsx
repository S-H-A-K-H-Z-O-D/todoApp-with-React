import React from "react";
import { DayChange } from "./components/dayChange/dayChange.component";
import { Form } from "./components/form"
import { List } from "./components/list/list.component";
import { SupportBtns } from "./components/supportBtns/supportBtns.component";

function App() {

  let [allTodo, setAllTodo] = React.useState((JSON.parse(localStorage.getItem("allTodo"))) || [])
  console.log(allTodo)
  
  return (
    <>
        <div>
          <DayChange />
          <Form setAllTodo={setAllTodo} /> 
          <List allTodo = {allTodo} setAllTodo={setAllTodo}/>
          <SupportBtns allTodo = {allTodo} setAllTodo={setAllTodo}/>
        </div>
    </>
  )
}

export default App
