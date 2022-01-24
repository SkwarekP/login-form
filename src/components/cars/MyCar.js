import { Col, Row } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ChosePerson } from "./ChosePerson";
import { UserContext } from "../../store/user-context";
function MyCar() {
  const { user } = useContext(UserContext);
  const [carInfo, setCarInfo] = useState({
    Osoba: "",
    createdAt: "",
    databadania: "",
    dataubezpieczenia: "",
    id: null,
    marka: "",
    model: "",
    nrrejestracyjny: "",
    rodzajpaliwa: "",
    rodzajpojazdu: "",
    przebieg: 0,
    silnik: 0,
    updatedAt: "",
    vin: "",
    zdjecie: "",
  });
  const [tankList, setTankList] = useState([]);
  const [stats, setStats] = useState({
    paliwo: 0,
    wymiany: 0,
  });
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/car/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCarInfo(() => data.data);
        console.log(data);
        if (data.tankList !== []) {
          setTankList(data.tankList);
          setStats({
            ...stats,
            paliwo: data.tankList
              .map((singleTank) => singleTank.kwota)
              .reduce((a, b) => a + b),
          });
        } else {
        }
      });
  }, []);
  const [addOwner, setAddOwner] = useState(false);
  const submit = (newOwner) => {
    const data = {
      id_osoby: newOwner.user_id,
    };
    fetch(`http://localhost:8000/api/car/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCarInfo({ ...carInfo, Osoba: data.osoba });
      });
    setAddOwner(false);
  };
  return (
    <Row>
      <Col sm={3} className="sidebar-menu-container">
        <Sidebar />
      </Col>
      <Col sm={9} className="page">
        <div className="container-fluid">
          <Row>
            <div className="page-title mt-2 ml-2">
              <h1 className="ml-2 mt-2 text-unwrap">Nazwa samochodu</h1>
            </div>
          </Row>
          <Row>
            <Col sm={12} className="as-box-rounded-white mt-2">
              <Row>
                <div className="page-title mb-2">
                  <h3 className="ml-3 text-unwrap">Dane pojazdu</h3>
                </div>
              </Row>
              <Row>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Marka:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.marka}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Rodzaj pojazdu:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.rodzajpojazdu}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Model:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.model}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Rodzaj paliwa:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.rodzajpaliwa}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Rejestracja pojazdu:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.rodzajpojazdu}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Silnik:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.silnik}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>VIN:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.vin}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Przebieg pojazdu:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.przebieg}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Data badania techniczego:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.databadania}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Data kupna ubezpieczenia:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>{carInfo.dataubezpieczenia}</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Koniec ubezpieczenia:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>29.05.2022</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Przypisana osoba:</strong>
                  </p>
                  <button
                    onClick={() => {
                      setAddOwner(true);
                    }}
                  >
                    {carInfo.Osoba ? "Edytuj osobe" : "Przypisz osobe"}
                  </button>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    {!addOwner && carInfo.Osoba !== null && carInfo.Osoba.imie}
                  </p>
                  {user.type && addOwner && (
                    <ChosePerson osoba={carInfo.Osoba} submitChange={submit} />
                  )}
                </Col>
                <Col sm={3} md={0} lg={3} xl={3} />
                <Col sm={3} md={0} lg={3} xl={3} />
              </Row>
            </Col>

            <Col sm={12} className="as-box-rounded-white mt-3">
              <Row>
                <div className="page-title mb-2">
                  <h3 className="ml-3 text-unwrap">Dane pojazdu</h3>
                </div>
              </Row>
              <div className="tab-content">
                <table className="table mt-3 ">
                  <thead>
                    <tr className="mb-5">
                      <th>Data tankowania</th>
                      <th>Przebieg</th>
                      <th>Kwota tankowania</th>
                      <th>Ilość paliwa</th>
                      <th>Edytuj</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tankList.map((t) => (
                      <tr key={t.id}>
                        <td>
                          {new Date(t.data_tankowania).toLocaleDateString()}
                        </td>
                        <td>{t.przebieg}</td>
                        <td>{t.kwota} zł</td>
                        <td>{t.ilosc} litrów</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
            <Col xs={12} className="as-box-rounded-white mt-3">
              <Row>
                <Col xs={3}>
                  <h3>Statystyki</h3>
                </Col>
              </Row>
              <Row className="single_cars_info">
                <Col xs={12} lg={4} className="single_cars">
                  <div className="single_car_info">
                    <div>
                      <span>{stats.paliwo} zł</span>
                    </div>
                    <p>Koszta Paliwa</p>
                  </div>
                </Col>
                <Col xs={12} lg={4} className="single_cars">
                  <div className="single_car_info">
                    <div>
                      <span>500</span>
                    </div>
                    <p>Wymiany</p>
                  </div>
                </Col>
                <Col xs={12} lg={4} className="single_cars">
                  <div className="single_car_info">
                    <div>
                      <span>1000</span>
                    </div>
                    <p>Łącznie</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default MyCar;
