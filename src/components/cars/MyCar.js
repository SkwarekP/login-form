import { Col, Row } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";

function MyCar() {
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
                  <p>Fiat</p>
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
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default MyCar;
