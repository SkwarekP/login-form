import { useNavigate } from "react-router-dom";
import LoginForm from "../../src/components/layout/LoginForm";

function Login() {
  const navigate = useNavigate();

  function loginHandler(data) {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.token))
      .then(() => {
        navigate("/Flota");
      });
  }

  return <LoginForm onLogIn={loginHandler} />;
}

export default Login;
