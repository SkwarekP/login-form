import Login from "../src/pages/Login";
import MainPage from "../src/pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import NewWehicle from "./components/Forms/NewWehicle";
import UsersPage from "./pages/UsersPage";
import UsersForm from "./components/Forms/UsersForm";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Flota" element={<MainPage />} />
        <Route path="/Flota/AddWehicle" element={<NewWehicle />} />
          <Route path="/Flota/Users" element={<UsersPage />} />
          <Route path="/Flota/Users/AddUser" element={<UsersForm />} />
          <Route path="/Flota/Reports" element={<ReportsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
