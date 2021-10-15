
import { route } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import { useState , useEffect } from 'react'

// components 
import TodoItem from '../Components/TodoItem'

export default function Home(props) {
  const [allTodos, setAllTodos] = useState(props.todos)
  const [todosData, settodos] = useState(props.todos)
  const routes = useRouter()
  const { Completed } = routes.query

  const ChangeFilter = (requered_filter) => {
    if (requered_filter === null) {
      settodos(allTodos)
      routes.push('/')
      return
    }
  }

  useEffect(() => {
    switch (Completed) {
      case 'True' :
        settodos(allTodos.filter((item , ind)=>{
          if(item.completed){
            return item
          }
        }))
        break
      case 'False' :
        settodos(allTodos.filter((item , ind)=>{
          if(item.completed == false){
            return item
          }
        }))
        break
    }
  }, [Completed])
  
  const DeleteItems = (requiredId) => {
    const filteredItems = todosData.filter((item, ind) => {
      if (requiredId != item.id) {
        return item
      }
    })
    settodos(filteredItems)
  }

  return (
    <>
      <div className="container">
        <style jsx >
          {
            `
              span.filter{
                padding:5px 10px;
                border-radius:6px;
                background-color:white;
                margin-right:10px;
                cursor:pointer;
              }
              span.filter:hover{
                background-color:aliceblue;
              }
              div.filter{
                margin-bottom: 15px;
              }
            `
          }
        </style>
        <div className='filter'>
          <span className='filter' onClick={() => { ChangeFilter(null) }}>All</span>
          <span className='filter' onClick={() => { routes.push('/?Completed=True')}}>Completed</span>
          <span className='filter' onClick={() => { routes.push('/?Completed=False')}}>Not-Completed</span>

        </div>
        {
          todosData && todosData.map((todo_item, ind) => {
            return (
              <TodoItem data={todo_item} key={ind} deleteFunction={DeleteItems} />
            )
          })
        }
      </div>
    </>
  )
}


export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
  console.log('I am updated')
  return (
    {
      props: {
        todos: data
      }
    }
  )
}