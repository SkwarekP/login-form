import LoginForm from "../src/pages/LoginForm";
import MainPage from "../src/pages/MainPage"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
       <Route path="/" element={<LoginForm />}></Route>      
       <Route path="/Flota" element={<MainPage />}></Route> 
    </Routes>
  );
}

export default App;
