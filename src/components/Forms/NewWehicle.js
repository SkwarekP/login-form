import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import { useState} from "react";
import classes from "./NewWehicle.module.css";

function NewWehicle(props) {
  const [marka, setMarka] = useState("");
  const [model, setModel] = useState("");
  const [nrrejestracyjny, setnrrejestracyjny] = useState("");
  const [zdjecie, setZdjecie] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const wehicleData = {
      marka: marka,
      model: model,
      nrrejestracyjny: nrrejestracyjny,
      zdjecie: zdjecie
    };

    const formData = new FormData();
    formData.append("marka", marka);
    formData.append("model", model);
    formData.append("nrrejestracyjny", nrrejestracyjny);
    formData.append("file", zdjecie);


    fetch('http://localhost:8000/api/addCar', {
      method: "POST",
      body: formData,
      headers: {
        Accept: 'application/form-data',
        "token" : localStorage.getItem("token")
      },
    }).then((response) => {
      return response.json();
    }).then((x) => console.log(x))
  }

  return (
    <Row>
      <Col sm={3} className="sidebar-menu-container">
        <Sidebar />
      </Col>
      <Col xs={9} className="page">
        <Container
          style={{ height: "100vh" }}
          className="justify-content-center align-items-center d-flex"
        >
          <Card
            style={{
              width: "auto",
              height: "auto",
              background: "",
              borderRadius: "15px",
              padding: "25px",
            }}
            className="shadow-lg border-0 mt-4"
          >
            <form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="marka">Marka</label>
                    <input
                      type="text"
                      className="form-control"
                      id="marka"
                      name="marka"
                      value={marka}
                      onChange={(event) => setMarka(prev => prev=event.target.value) }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      name="model"
                      value={model}
                      onChange={(event) => setModel(prev => prev=event.target.value) }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nrrejestracyjny">Numer rejestracyjny</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nrrejestracyjny"
                      name="nrrejestracyjny"
                      value={nrrejestracyjny}
                      onChange={(event) => setnrrejestracyjny(prev => prev=event.target.value) }
                    />
                  </div>
                  {/*<div className="form-group">
                    <label htmlFor="rodzajpojazdu">Rodzaj Pojazdu</label>
                    <select
                      className="form-control"
                      id="rodzajpojazdu"
                      ref={rodzajpojazduInputRef}
                    >
                      <option>Osobowy</option>
                      <option>Dostawczy</option>
                      <option>Ciężarowy</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rodzajpaliwa">Rodzaj Paliwa</label>
                    <select
                      className="form-control"
                      id="rodzajpaliwa"
                      ref={rodzajpaliwaInputRef}
                    >
                      <option>Benzyna</option>
                      <option>Diesel</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="silnik">Silnik</label>
                    <input
                      type="text"
                      className="form-control"
                      id="silnik"
                      ref={silnikInputRef}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="vin">Numer VIN</label>
                    <input
                      type="text"
                      className="form-control"
                      id="vin"
                      ref={vinInputRef}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vin">Przebieg pojazdu</label>
                    <input
                      type="text"
                      className="form-control"
                      id="przebieg"
                      ref={przebiegInputRef}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="databadania">
                      Data badania technicznego
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="databadania"
                      id="databadania"
                      ref={databadaniaInputRef}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dataubezpieczenia">
                      Data kupienia ubezpieczenia
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dataubezpieczenia"
                      id="dataubezpieczenia"
                      ref={dataubezpieczeniaInputRef}
                    />
                  </div>*/}
                  <div className="form-group mb-5">
                    <label htmlFor="zdjecie">Wybierz zdjecie:</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="zdjecie"
                      name="zdjecie"
                      onChange={(event) => setZdjecie(event.target.files[0]) }
                    />
                  </div>
                  <div className="m-0 text-center">
                    <button
                        type="submit"
                      className="btn btn-primary text-center"
                      style={{ width: "200px" }}
                    >
                      Dodaj
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </Card>
        </Container>
      </Col>
    </Row>
  );
}

export default NewWehicle;
