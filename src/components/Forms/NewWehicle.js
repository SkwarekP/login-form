import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import { useState} from "react";
import classes from "./NewWehicle.module.css";

function NewWehicle(props) {
  const [marka, setMarka] = useState("");
  const [model, setModel] = useState("");
  const [nrrejestracyjny, setnrrejestracyjny] = useState("");
  const [zdjecie, setZdjecie] = useState(null);

  /*const [marka, setMarka] = useState("");
  const [marka, setMarka] = useState("");
  const [marka, setMarka] = useState("");
  const [marka, setMarka] = useState("");
  const [marka, setMarka] = useState("");
  const [marka, setMarka] = useState("");


  const markaInputRef = useRef();
  const modelInputRef = useRef();
  const nrrejestracyjnyInputRef = useRef();
  const rodzajpojazduInputRef = useRef();
  const rodzajpaliwaInputRef = useRef();
  const silnikInputRef = useRef();
  const vinInputRef = useRef();
  const databadaniaInputRef = useRef();
  const dataubezpieczeniaInputRef = useRef();
  const zdjecieInputRef = useRef();
  const przebiegInputRef = useRef();*/

  function submitHandler(event) {
    event.preventDefault();

    /* const enteredMarka = markaInputRef.current.value;
     const enteredModel = modelInputRef.current.value;
     const enteredRejestracyjny = nrrejestracyjnyInputRef.current.value;
     const enteredRodzaj = rodzajpojazduInputRef.current.value;
     const enteredRodzajPaliwa = rodzajpaliwaInputRef.current.value;
     const enteredSilnik = silnikInputRef.current.value;
     const enteredVin = vinInputRef.current.value;
     const enteredDataBadania = databadaniaInputRef.current.value;
     const enteredDataUbezpieczenia = dataubezpieczeniaInputRef.current.value;
     const enteredZdjecie = zdjecieInputRef.current.value;
     const enteredPrzebieg = przebiegInputRef.current.value;*/


    const wehicleData = {
      marka: marka,
      model: model,
      nrrejestracyjny: nrrejestracyjny,
      zdjecie: zdjecie
    };
    /*
        console.log(wehicleData);
    */

    const formData = new FormData();
    formData.append("marka", marka);
    formData.append("model", model);
    formData.append("nrrejestracyjny", nrrejestracyjny);
    formData.append("file", zdjecie);

/*
    for (var value of formData.values()) {}
*/

    fetch('http://localhost:8000/api/addCar', {
      method: "POST",
      body: formData,
      headers: {
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
                      value={zdjecie}
                      onChange={(event) => setZdjecie(prev => prev=event.target.value) }
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
