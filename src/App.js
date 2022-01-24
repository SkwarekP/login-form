import Login from "../src/pages/Login";
import MainPage from "../src/pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import NewWehicle from "./components/cars/NewWehicle";
import UsersPage from "./pages/UsersPage";
import UsersForm from "./components/Users/UsersForm";
import ReportsPage from "./pages/ReportsPage";
import AddReport from "./components/Reports/AddReport";
import Settings from "./pages/Settings";
import MyCar from "./components/cars/MyCar";
import UserContextProvider from "./store/user-context";
import Exploatation from "./pages/Exploatation";

function App() {
  return (
    <UserContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Flota" element={<MainPage />} />
          <Route path="/Flota/AddWehicle" element={<NewWehicle />} />
          <Route path="/Flota/Users" element={<UsersPage />} />
          <Route path="/Flota/Users/AddUser" element={<UsersForm />} />
          <Route path="/Flota/Reports" element={<ReportsPage />} />
          <Route path="/Flota/Reports/AddReport" element={<AddReport />} />
          <Route path="/Flota/Settings" element={<Settings />} />
          <Route path="/Flota/MyCar/:id" element={<MyCar />} />
          <Route path="/Flota/Eksploatation" element={<Exploatation />} />
        </Routes>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
