import '../App.css';

export default function Todo({ todoItem, todoList, settodoList}){



        const handleClick = ()=>{
            settodoList(todoList.filter((item) => item.id !== todoItem.id))
            
        }
 

        return (<div >
            
                <div className='container'>
    
                    <input type='checkbox'></input>
                    <h3>{todoItem.name}</h3>
                    <button onClick={handleClick}>Delete</button>
                
                </div>
            
            </div>)
}