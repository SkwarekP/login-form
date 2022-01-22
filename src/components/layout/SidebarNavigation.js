import {Link} from "react-router-dom";
import classes from "./SidebarNavigation.module.css";
import {useState, useContext} from "react";
import {UserContext} from "../../store/user-context";

function SidebarNavigation(props) {
    const [active, setActive] = useState(false);
    const {setUser} = useContext(UserContext);

    const logout = () => {
        setUser(() => {
            return {token: localStorage.removeItem("token"), name: "", type: false, zdjecie: ""}
        })
    }
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
                    <Link
                        to="/Flota/Reports"
                        className={active ? classes.active : ""}
                        onClick={() => setActive((prev) => !prev)}
                    >
                        Zgłoszenia
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Flota/Users">Uzytkownicy</Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Flota/Settings">Ustawienia</Link>
                </li>
                <li className={classes.sidebarMenuItem} onClick={logout}>
                    <Link to="/">Wyloguj</Link>
                </li>
            </ul>
        </header>
    );
}

export default SidebarNavigation;
