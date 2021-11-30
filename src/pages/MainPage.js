import { Button, Col, Row, Container} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList"
import SearchBox from "../components/Searchbox";
import style from "../style/style.css";

function MainPage() {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <Row>
        <Col sm={3} className="sidebar-menu-container">
          <Sidebar />
        </Col>
        <Col xs={9} className="page">
          <Container>
            <Row>
              <Col xs={12} className="mt-3">
                <div class="ml-3">
                  <h1>PME FLOTA</h1>
                </div>
                <Button variant="primary"> Add new</Button>
              </Col>
              <Col xs={12} className="mt-4 text-center">
              <SearchBox />
              </Col>
              <CardList />
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
export default MainPage;
