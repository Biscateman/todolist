
import shortid from 'shortid'
export default function Form({todo , setTodo, todoList, settodoList}){

  
    const handleChange = function(event){
        setTodo(event.target.value)
        
    }

    

    const handleSubmit = function(event){
        event.preventDefault();

        settodoList([...todoList,{name:todo, id:shortid.generate()}])
        
        setTodo("")
        
    }

    return (
       
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={todo} placeholder='Add Todo Item'></input>
                <button>Add</button>
            </form>
        
    )
}