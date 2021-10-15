
import { useRouter } from "next/router"
import TodoItem from "../../Components/TodoItem"

import GoBack from '../../Components/goBack'

const ItemView = ({ item }) => {
    return (
        <div className="container">
            <GoBack/>
            <TodoItem data={item}  />
        </div>
    )
}


export async function getServerSideProps(params) {
    const { itemId } = await params.query
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
    const data = await response.json()
    return (
        {
            props: {
                item: data
            }
        }
    )
}


export default ItemView