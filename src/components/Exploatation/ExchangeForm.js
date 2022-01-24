import {Col, Container, Row} from "react-bootstrap";

function ExchangeForm() {

    return (
        <Container
            style={{height: "auto", fontSize: "16px"}}
            className="justify-content-center align-items-center d-flex"
        >
            <Col sm={12} className="as-box-rounded-white mt-5">
                <form>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="idpojazdu">Id pojazdu</label>
                                <input type="number" className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataT">Data tankowania</label>
                                <input type="date" className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="przebieg">Przebieg</label>
                                <input type="number" className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cena">Cena paliwa</label>
                                <input type="number" step="0.01" className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="paliwo">Ilość paliwa</label>
                                <input type="number" step="0.01" className="form-control"
                                />
                            </div>
                            <div className="mt-5 text-center">
                                <button
                                    type="submit"
                                    className="blue_button text-center pb-2 pt-2"
                                    style={{width: "200px"}}
                                >
                                    Dodaj
                                </button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Container>
    )
}

export default ExchangeForm;