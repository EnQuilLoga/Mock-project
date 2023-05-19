import { Route, Routes} from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"


const  ReactForm = () =>{
    return(
       
        <div className="container">
            <Routes>
                {/* <Route path="/register" element={<RegisterForm />}></Route> */}
                {/* <Route path="/login" element={<LoginForm />}></Route> */}
            </Routes>
        </div>
       
    )
}

export default ReactForm; 