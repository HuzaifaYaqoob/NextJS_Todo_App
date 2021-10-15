

import { useRouter } from "next/router"

const GoBack = () =>{
    const routes = useRouter()
    return(
        <div className='back-btn' onClick={()=>{routes.back()}}>
            <style jsx>
                {
                    `
                        div.back-btn{
                            display:inline-block;
                            background-color:white;
                            margin-bottom:10px;
                            padding:5px 10px;
                            border-radius:4px;
                            cursor:pointer
                        }
                    `
                }

            </style>
            Go Back
        </div>
    )
}

export default GoBack