import { Row, Col, Container } from "react-bootstrap";

function tankForm() {
  return (
    <Container
      style={{ height: "auto", fontSize: "16px" }}
      className="justify-content-center align-items-center d-flex"
    >
      <Col sm={12} className="shadow-1 as-box-rounded-white mt-5">
        <form>
          <Row>
            <Col>
              <div className="form-group">
                <label htmlFor="imie">Imie</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="model">Nazwisko</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="model">E-mail</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="model">Nr telefonu</label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="model">Typ użytkownika</label>
                <select className="form-control">
                  <option>Użytkownik</option>
                  <option>Administrator</option>
                </select>
              </div>
              <div className="mt-5 text-center">
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
      </Col>
    </Container>
  );
}
export default tankForm;
