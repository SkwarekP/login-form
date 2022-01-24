import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/layout/Sidebar";
import CardList from "../components/Cards/CardList";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Logo from "../components/Logo";
import { UserContext } from "../store/user-context";

function MainPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWehicle, setLoadedWehicle] = useState([]);
  const { user } = useContext(UserContext);
  function addNewWehicle() {
    const path = "/Flota/AddWehicle";
    navigate(path);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/api/cars", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedWehicle(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Row>
      <Col sm={3} className="sidebar-menu-container">
        <Sidebar />
      </Col>
      <Col xs={9} className="page">
        <div className="container-fluid">
          <Row>
            <Col xs={12} className="mt-3">
              <div className="ml-3 page-title">
                <Logo />
                <h1 className="m-2">PME FLOTA</h1>
              </div>
            </Col>
          </Row>
          {user.type && (
            <button
              className="blue_button ml-3 mt-2 btn-outline-info"
              onClick={addNewWehicle}
            >
              Dodaj pojazd
            </button>
          )}
          <CardList cards={loadedWehicle} />
        </div>
      </Col>
    </Row>
  );
}

export default MainPage;
