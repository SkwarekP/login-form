import { Link } from "react-router-dom";
import classes from "./SidebarNavigation.module.css";
function SidebarNavigation() {
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
          <Link to="/Flota/Reports">Zgłoszenia</Link>
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
          <Link to="">Ustawienia</Link>
        </li>
        <li className={classes.sidebarMenuItem}>
          <Link to="/">Wyloguj</Link>
        </li>
      </ul>
    </header>
  );
}

export default SidebarNavigation;
