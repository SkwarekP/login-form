import { Col, Row } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import { useEffect, useState } from "react";

function MyCar() {
  const [carInfo, setCarInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/cars/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCarInfo((prev) => data);
      });
  }, []);
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
                  <p>fiat</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Rodzaj pojazdu:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>osobowy</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Model:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>Grande Punto</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Rodzaj paliwa:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>Diesel</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Rejestracja pojazdu:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>SC1023ABS</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Silnik:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>1.9 JTD</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>VIN:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>1000DFGSAA421</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Przebieg pojazdu:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>260 000km</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Data badania techniczego:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>10 dni</p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>
                    <strong>Data kupna ubezpieczenia:</strong>
                  </p>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>10.10.2021</p>
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
                </Col>
                <Col sm={6} md={6} lg={3} xl={3}>
                  <p>Jan Kowalski</p>
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
              <div class="tab-content">
                <table class="table mt-3 ">
                  <thead>
                    <tr class="mb-5">
                      <th>Data tankowania</th>
                      <th>Przebieg</th>
                      <th>Cena paliwa</th>
                      <th>Ilość paliwa</th>
                      <th>Łączny koszt</th>
                      <th>Edytuj</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20.20.2002</td>
                      <td>1000km</td>
                      <td>3.33</td>
                      <td>100 litrow</td>
                      <td>333zł</td>
                      <td>
                        <a href="">
                          <i class="fas fa-edit mr-2"></i>Edytuj
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default MyCar;
