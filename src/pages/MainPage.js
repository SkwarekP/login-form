import { Button, Col, Row, Container } from "react-bootstrap";
import Sidebar from "../components/layout/Sidebar";
import CardList from "../components/Cards/CardList";
import SearchBox from "../components/Searchbox";
import style from "../style/style.css";
import img from "../images/bmw.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/*{
  id: "p1",
      image: `${img}`,
    nr_rejestracyjny: "SC 12345",
    marka: "BMW",
    model: "X520",
},
{
  id: "p2",
      image: `${img}`,
    nr_rejestracyjny: "SC 22222",
    marka: "BMW",
    model: "X525",
},
{
  id: "p3",
      image: `${img}`,
    nr_rejestracyjny: "SC 33333",
    marka: "BMW",
    model: "X530",
},
{
  id: "p4",
      image: `${img}`,
    nr_rejestracyjny: "SC 44444",
    marka: "BMW",
    model: "X535",
},
{
  id: "p5",
      image: `${img}`,
    nr_rejestracyjny: "SC 55555",
    marka: "BMW",
    model: "X540",
},
{
  id: "p6",
      image: `${img}`,
    nr_rejestracyjny: "SC 66666",
    marka: "BMW",
    model: "X545",
},
{
  id: "p7",
      image: `${img}`,
    nr_rejestracyjny: "SC 77777",
    marka: "BMW",
    model: "X550",
},
{
  id: "p8",
      image: `${img}`,
    nr_rejestracyjny: "SC 88888",
    marka: "BMW",
    model: "X555",
},
{
  id: "p9",
      image: `${img}`,
    nr_rejestracyjny: "SC 99999",
    marka: "BMW",
    model: "X560",
},*/


function MainPage() {
  const  [Cards_Data, setCards_Data] =  useState([{}])
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
        console.log(data);
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
              <div class="ml-3">
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
