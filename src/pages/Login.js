import { useNavigate } from "react-router-dom";
import LoginForm from "../../src/components/layout/LoginForm";
import { useContext } from "react";
import { UserContext } from "../App";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function loginHandler(data) {
        fetch("http://localhost:8000/api/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("token", res.token);
                let user = {
                    name: res.user.imie,
                    type: res.user.is_admin,
                    zdjecie: res.user.zdjecie,
                };
                setUser(user);
            })
            .then(() => {
                navigate("/Flota");
            });
    }

    return <LoginForm onLogIn = { loginHandler }
    />;
}

export default Login;