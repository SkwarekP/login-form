import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import { useState, useEffect, useReducer} from "react";

const markaReducer = (state, action) => {
  if(action.type === "MARKA") {
    return {value: action.val, isValid: action.val.trim().length >= 3}
  }
  return {value: "" , isValid: false}
}

function NewWehicle(props) {
  const [marka, setMarka] = useState("");
  const [model, setModel] = useState("");
  const [nrrejestracyjny, setnrrejestracyjny] = useState("");
  const [zdjecie, setZdjecie] = useState("");
  const [rodzajpojazdu, setRodzajPojazdu] = useState("");
  const [rodzajpaliwa, setRodzajPaliwa] = useState("");
  const [silnik, setSilnik] = useState("");
  const [vin, setVin] = useState("");
  const [przebieg, setPrzebieg] = useState("");
  const [databadania, setDataBadania] = useState("");
  const [dataubezpieczenia, setDataUbezpieczenia] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [markaState, dispatchMarka] = useReducer(markaReducer, {
    value: "",
    isValid: null,
  })

  useEffect(() => {
    const identifier = setTimeout(() =>{
      console.log("checking form validity");
      setIsFormValid(
          markaState.isValid
      )
    }, 500)

    return () => {
      console.log("cleanup")
      clearTimeout(identifier);
    }
  }, [markaState])



  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("marka", markaState.value);
    formData.append("model", model);
    formData.append("nrrejestracyjny", nrrejestracyjny);
    formData.append("rodzajpojazdu", rodzajpojazdu)
    formData.append("rodzajpaliwa", rodzajpaliwa)
    formData.append("silnik", silnik)
    formData.append("vin", vin)
    formData.append("przebieg", przebieg)
    formData.append("databadania", databadania)
    formData.append("dataubezpieczenia", dataubezpieczenia)
    formData.append("file", zdjecie);

    console.log(isFormValid);
    if (isFormValid) {
      fetch('http://localhost:8000/api/addCar', {
        method: "POST",
        body: formData,
        headers: {
          Accept: 'application/form-data',
          "token": localStorage.getItem("token")
        },
      }).then((response) => {
        return response.json();
      })
    }
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
                      value={markaState.value}
                      onChange={(event) => {
                        dispatchMarka({type: "MARKA", val:event.target.value})
                      }}
                    />
                    {markaState.value}
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
                  <div className="form-group">
                    <label htmlFor="rodzajpojazdu">Rodzaj Pojazdu</label>
                    <select
                      className="form-control"
                      id="rodzajpojazdu"
                      name="rodzajpojazdu"
                      value={rodzajpojazdu}
                      onChange={(event) => setRodzajPojazdu(prev => prev=event.target.value) }
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
                      name="rodzajpaliwa"
                      value={rodzajpaliwa}
                      onChange={(event) => setRodzajPaliwa(prev => prev=event.target.value) }
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
                      name="silnik"
                      value={silnik}
                      onChange={(event) => setSilnik(prev => prev=event.target.value) }
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
                      name="vin"
                      value={vin}
                      onChange={(event) => setVin(prev => prev=event.target.value) }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vin">Przebieg pojazdu</label>
                    <input
                      type="text"
                      className="form-control"
                      id="przebieg"
                      name="przebieg"
                      value={przebieg}
                      onChange={(event) => setPrzebieg(prev => prev=event.target.value) }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="databadania">
                      Data badania technicznego
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="databadania"
                      name="databadania"
                      value={databadania}
                      onChange={(event) => setDataBadania(prev => prev=event.target.value) }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dataubezpieczenia">
                      Data kupna ubezpieczenia
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dataubezpieczenia"
                      name="dataubezpieczenia"
                      value={dataubezpieczenia}
                      onChange={(event) => setDataUbezpieczenia(prev => prev=event.target.value) }
                    />
                  </div>
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
