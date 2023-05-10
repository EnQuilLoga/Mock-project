import { Route, Routes} from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { LoginForm } from "./LoginForm"


const  ReactForm = () =>{
    return(
       
        <div className="container">
            <Routes>
              <Route path="/" element={<LoginForm/>}/>
            </Routes>
        </div>
       
    )
}

export default ReactForm; 