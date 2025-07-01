import { useState } from "react";
//In this we are reding the text and handling add button
function Header({onAdd}){
    const [text, setText] = useState('');//storing input text
    function handleSubmit(e){
        e.preventDefault();
        if(text.trim()){
            onAdd(text);
            console.log(text)
            setText('');
        }
    }
    return (
        <>
            <form className="flex gap-10 mb-4">
                <input type="text" placeholder="Enter your task" value={text} className="border rounded-lg px-2 py-1 w-full"
                onChange={(e)=>setText(e.target.value)}/>
                <button onClick={handleSubmit} className="bg-blue-500 rounded-xl p-1.5 text-white">Add</button>
            </form>
        </>
    )
}
export default Header;