import { Outlet } from "react-router-dom"
import MyNav from "./components/mynav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/myfooter";

function App() {

  return (

    <div className="d-flex flex-column body">
      <MyNav/>
      <Outlet />
      <Footer/>
    </div>

  )
}

export default App
