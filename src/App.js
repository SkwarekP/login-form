import Login from "../src/pages/Login";
import MainPage from "../src/pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import NewWehicle from "./components/Forms/NewWehicle";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Flota" element={<MainPage />}></Route>
        <Route path="/Flota/AddWehicle" element={<NewWehicle />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
