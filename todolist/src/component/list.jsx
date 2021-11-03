import "./list.css"

function List(props){
    const todolist = props.list;
    const listitems = todolist.map((item)=>
    {
        if (item.completed){
            return(
                <li key={item.id} className="completed" >{item.title}</li>
                );
        }else{
            return(
                <li key={item.id}>{item.title}</li>
                );
        }
        
    }
    );
    return(
        <ul>{listitems}</ul>
    )

};

export default List;