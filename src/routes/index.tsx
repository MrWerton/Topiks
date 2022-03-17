import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyTopics from "../pages/MyTopics";
import Notfound from "../pages/Notfound";
import ProtectRoutes from "./ProtectRoutes";
function RoutesApp() {
    return (
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='*' element={<Notfound/>} />
            <Route element={<ProtectRoutes/>}>
              <Route path='Home' element={<Home/>}/>
              <Route  path='MyTopics' element={<MyTopics/>}/>
            </Route>
          
          
          </Routes>
    )
}

export {RoutesApp}