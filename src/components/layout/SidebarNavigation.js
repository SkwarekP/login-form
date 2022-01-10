import { Link } from "react-router-dom";
import classes from "./SidebarNavigation.module.css";
import {useState} from "react";
function SidebarNavigation() {

  const [active, setActive] = useState(false);
  return (
    <header>
      <ul className={classes.sidebarMenuWrapper}>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota" className={classes.active}>
            PME FLOTA
          </Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="">Konserwacja</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota/Reports" className={active ? classes.active : ""} onClick={() => setActive(prev => !prev)}>Zgłoszenia</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota/Users">Uzytkownicy</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="">Statystyki</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="">Serwisy</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/Flota/Settings">Ustawienia</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/">Wyloguj</Link>
        </li>
      </ul>
    </header>
  );
}

export default SidebarNavigation;
