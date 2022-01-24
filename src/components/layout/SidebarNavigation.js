import { Link } from "react-router-dom";
import classes from "./SidebarNavigation.module.css";
import { useState, useContext } from "react";
import { UserContext } from "../../store/user-context";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CarRepairOutlinedIcon from "@mui/icons-material/CarRepairOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import SettingsAccessibilityOutlinedIcon from "@mui/icons-material/SettingsAccessibilityOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import LogoIcon from "../LogoIcon";

function SidebarNavigation(props) {
  const [active, setActive] = useState(false);
  const { setUser, user } = useContext(UserContext);

  const logout = () => {
    setUser(() => {
      return {
        token: localStorage.removeItem("token"),
        name: "",
        type: false,
        zdjecie: "",
      };
    });
  };
  return (
    <header>
      <ul className={classes.sidebarMenuWrapper}>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota" className={classes.active}>
            <LogoIcon />
            <p className="m-auto"> PME FLOTA </p>
          </Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota/Eksploatation">
            <CarRepairOutlinedIcon />
            <p className="m-auto"> Eksploatacja </p>
          </Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota/Reports">
            <ReportGmailerrorredOutlinedIcon />
            <p className="m-auto"> Zgłoszenia </p>
          </Link>
        </li>
        {user.type && (
          <li className={classes.sidebarMenuItem}>
            <Link to="/Flota/Users">
              <PeopleAltOutlinedIcon />
              <p className="m-auto"> Uzytkownicy</p>
            </Link>
          </li>
        )}
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota/Settings">
            <SettingsAccessibilityOutlinedIcon />
            <p className="m-auto"> Ustawienia</p>
          </Link>
        </li>
        <li className={classes.sidebarMenuItem} onClick={logout}>
          <Link to="/">
            <MeetingRoomOutlinedIcon />
            <p className="m-auto"> Wyloguj</p>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default SidebarNavigation;
