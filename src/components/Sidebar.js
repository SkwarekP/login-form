import { Col, Row } from "react-bootstrap";
import person from "../images/person.jpg";

function Sidebar() {
  return (
    <div className="sidebar-cnt">
      <div className="sidebar-profile-container">
        <div className="sidebar-company-title text-center mb-2">
          <select className="select-company">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <p className="sidebar-profile-img">
          <img src={person} alt="chuj"></img>
        </p>
        <p className="sidebar-your-name text-center">Patryk Skwara</p>
        <p className="sidebar-your-name text-center">administrator</p>
      </div>
      <div className="line-hr">
        <hr></hr>
      </div>
      <Row>
        <Col xs={3} md={2} xl={3} className="sidebar_fake_col"></Col>
        <Col xs={9} sm={12} md={8} xl={7}>
          <ul className="sidebar-menu-wrapper mt-3">
            <li className="sidebar-menu-item">
              <a class="active text-nowrap">PME FLOTA</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Konserwacja</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Zgłoszenia</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Uzytkownicy</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Statystyki</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Serwisy</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Ustawienia</a>
            </li>
            <li className="sidebar-menu-item">
              <a>Wyloguj</a>
            </li>
          </ul>
        </Col>
        <Col xs={1} xl={3} className="sidebar_fake_col"></Col>
      </Row>
    </div>
  );
}

export default Sidebar;
