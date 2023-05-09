import '../style.css'

export const SupportBtns = (props) => {

     let data = JSON.parse(localStorage.getItem('allTodo'))

     let onCompleted = () => {

          let completedTasks = []

          data.map(task => {
               if(task.isCompleted){
                    completedTasks.push(task);
               }
          })

          props.setAllTodo(completedTasks)
     }

     let onActive = () => {

          let activeTasks = []

          data.map(task => {
               if(!task.isCompleted){
                    activeTasks.push(task);
               }
          })

          props.setAllTodo(activeTasks)
     }

     let onAll = () => {
          props.setAllTodo(data)
     }

     return(
          <>
               <div className="listWrapper d-flex flex-column justify-content-center align-items-center mt-3">
                    <div className="d-flex align-items-center w-50 border rounded py-2 px-3 bg-secondary">
                         <b className="w-50 countText text-white">The number of tasks: <span className="count">{props.allTodo.length}</span></b>
                         <div className="d-flex ms-auto todoBtns">
                              <button className="allTodo bg-secondary text-white p-0 border-0" onClick={onAll}>All</button>
                              <button className="activeTodo bg-secondary text-white p-0 mx-3 border-0" onClick={onActive}>Active</button>
                              <button className="completedTodo bg-secondary text-white p-0 border-0" onClick={onCompleted}>Completed</button>
                         </div>
                    </div>
               </div>
          </>
     )
}