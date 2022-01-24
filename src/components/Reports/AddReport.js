import { Card, Col, Container, Row } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import { useState } from "react";

function AddReport() {
  const [marka, setMarka] = useState("Audi");
  const [model, setModel] = useState("");
  const [nrrejestracyjny, setNumerRejestracyjny] = useState("");
  const [rodzajpojazdu, setRodzajPojazdu] = useState("Osobowy");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Row>
      <Col sm={3} className="sidebar-menu-container">
        <Sidebar />
      </Col>
      <Col xs={9} className="page">
        <Container
          style={{ height: "auto", fontSize: "16px" }}
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
                    <select
                      className="form-control"
                      id="marka"
                      name="marka"
                      value={marka}
                      onChange={(event) =>
                        setMarka((prev) => (prev = event.target.value))
                      }
                    >
                      <option>Audi</option>
                      <option>Bmw</option>
                      <option>Opel</option>
                      <option>Volkswagen</option>
                      <option>Ford</option>
                      <option>Mercedes-Benz</option>
                      <option>Renault</option>
                      <option>Toyota</option>
                      <option>Skoda</option>
                      <option>Mazda</option>
                      <option>Peugeot</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      name="model"
                      value={model}
                      onChange={(event) =>
                        setModel((prev) => (prev = event.target.value))
                      }
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
                      onChange={(event) => {
                        setNumerRejestracyjny(
                          (prev) => (prev = event.target.value)
                        );
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rodzajpojazdu">Rodzaj Pojazdu</label>
                    <select
                      className="form-control"
                      id="rodzajpojazdu"
                      name="rodzajpojazdu"
                      value={rodzajpojazdu}
                      onChange={(event) => {
                        setRodzajPojazdu(
                          (prevState) => (prevState = event.target.value)
                        );
                      }}
                    >
                      <option>Osobowy</option>
                      <option>Dostawczy</option>
                    </select>
                  </div>
                  <div className="m-0 text-center">
                    <button
                      type="submit"
                      className="blue_button text-center pb-2 pt-2"
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

export default AddReport;
