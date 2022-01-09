import { Col, Row } from "react-bootstrap";
import person from "../../images/person.jpg";
import SidebarNavigation from "./SidebarNavigation";
import classes from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={classes.sidebarCnt}>
      <div className={classes.sidebarProfileContainer}>
        <p className={classes.sidebarProfileImg}>
          <img src={person} alt="chuj" />
        </p>
        <p className={classes.sidebarYourName}>Patryk Skwara</p>
        <p className={classes.sidebarYourName}>administrator</p>
      </div>
      <div className={classes.lineHr}>
        <hr></hr>
      </div>
      <Row>
        <Col xs={3} md={2} xl={3} className="sidebar_fake_col"></Col>
        <Col xs={9} sm={12} md={8} xl={7}>
          <SidebarNavigation />
        </Col>
        <Col xs={1} xl={3} className="sidebar_fake_col"></Col>
      </Row>
    </div>
  );
}

export default Sidebar;
