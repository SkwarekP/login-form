import Sidebar from "../components/layout/Sidebar";
import { Col, Row } from "react-bootstrap";
import Logo from "../components/Logo";
import { useState } from "react";
import TankForm from "../components/Exploatation/tankForm";

function Exploatation() {
  const [tankForm, setTankForm] = useState(false);
  const [exchangeForm, setExchangeForm] = useState(false);

  return (
    <Row>
      <Col sm={3} className="sidebar-menu-container">
        <Sidebar />
      </Col>
      <Col sm={9} className="page">
        <div className="container-fluid">
          <Row>
            <Col sm={12} className="mt-3">
              <div className="page-title">
                <Logo />
                <h1 className="m-2">Eksploatacja</h1>
              </div>
            </Col>
          </Row>
          <button className="blue_button mt-2 btn-outline-info">
            Dodaj tankowanie
          </button>
          <button className="blue_button m-lg-3 m-md-3 mt-2 btn-outline-info">
            Dodaj wymiany
          </button>
          <TankForm />
        </div>
      </Col>
    </Row>
  );
}
export default Exploatation;
