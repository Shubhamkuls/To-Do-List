import { useState } from "react"

function ToDoItem({todo, toggle, deleteTodo, edit}){
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(todo.text);
    function handleSave(){
        edit(todo.id,text);
        setIsEdit(false);
    }
    return(<li className="flex items-center gap-4 justify-between items-center bg-gray-100 p-2 rounded-lg shadow mb-2">

        <input type="checkbox" checked={todo.completed} onChange={()=>toggle(todo.id)} 
        className="w-4 h-4 accent-blue-500"/>
        {/* Condition rendering */}
        {isEdit ? (
            <div className="flex-1 flex items-center gap-2">
                <input type="text" onChange={(e)=>setText(e.target.value)} 
                 className="border rounded px-2 py-1 w-full" placeholder="Enter Text"/>
                <button onClick={handleSave} className="bg-green-500 rounded-lg px-3 py-1 hover:bg-green-700 text-white">Save</button>
            </div>
        ):(
            <div className="flex-1 flex items-center justify-between gap-2">
                <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray'}`}>{todo.text}</span>
                <button onClick={()=>setIsEdit(true)} className="bg-yellow-300 rounded-lg px-2.5 py-0.5 hover:bg-yellow-600 hover:text-white">Edit</button>
            </div>
        )}
        <button onClick={()=>deleteTodo(todo.id)} className="bg-red-500 text-white px-2.5 py-0.5 rounded-lg hover:bg-red-700">Delete</button>
    </li>
    )
}
export default ToDoItem