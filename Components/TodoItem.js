

import { useRouter } from "next/router"


const TodoItem = ({ data , deleteFunction }) => {
    const routes = useRouter()
    return (
        <div className='todo-item' >
            <style jsx>{`
                        .item-content{
                            flex : 1;
                            margin:0 10px;
                        }
                    `} </style>
            <span className={'circle' + ' ' + (data.completed == true ? 'completed-true' : 'completed-false')}>

            </span>
            
            <div className='item-content' onClick={()=>{routes.push(`/Todo/${data.id}`)}}>
                <p>User ID : {data.userId}</p>
                <h3 title={data.completed ? 'Completed' : 'Not Completed'}>{data.title}</h3>
            </div>
            <span className='cancel-btn circle' onClick={()=>{deleteFunction && deleteFunction(data.id)}}>

            </span>
        </div>
    )
}

export default TodoItem