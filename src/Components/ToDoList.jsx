import ToDoItem from "./ToDoItem";

function ToDoList({todos , toggle, deleteTodo, edit}){
    //we are rendring to do list
    console.log(todos)
    return(
        <ul className="space-y-2">
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggle={toggle} deleteTodo={deleteTodo} edit={edit} />
            ))}
        </ul>
    );
}
export default ToDoList;