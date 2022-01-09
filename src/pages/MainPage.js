import { Button, Col, Row, Container } from "react-bootstrap";
import Sidebar from "../components/layout/Sidebar";
import CardList from "../components/Cards/CardList";
import SearchBox from "../components/Searchbox";
import '../style/style.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MainPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWehicle, setLoadedWehicle] = useState([]);

  function addNewWehicle() {
    const path = "/Flota/AddWehicle";
    navigate(path);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8000/api/cars',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token" : localStorage.getItem("token")
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedWehicle(data);
      });
  }, [setIsLoading, setLoadedWehicle]);

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
        <Container>
          <Row>
            <Col xs={12} className="mt-3">
              <div className="ml-3">
                <h1>PME FLOTA</h1>
              </div>
              <Button variant="primary" onClick={addNewWehicle}>
                Add new
              </Button>
            </Col>
            <Col xs={12} className="mt-4 text-center">
              <SearchBox />
            </Col>
            <CardList cards={loadedWehicle} />
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
export default MainPage;

//@TODO Uzytkownicy, dodawanie uzytkownikow,
//@TODO Raporty
//@TODO single car