import Todo from './Todo'

export default function TodoList({todoList, settodoList}){
    return (
        <div>
            {todoList.map((todoItem)=>(
                <Todo settodoList={settodoList} todoList={todoList} key={todoItem.id} todoItem={todoItem}/>
            ))}
        </div>
    )
}