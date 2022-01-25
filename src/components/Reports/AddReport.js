import {Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import {useState, useEffect} from "react";

function AddReport() {
    const [cars, setCars] = useState([]);
    const [report, setReport] = useState({
        tytul: "",
        opis: "",
        id_pojazdu: null,
    });
    useEffect(() => {
        fetch("http://localhost:8000/api/cars", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCars(data);
                setReport({...report, id_pojazdu: data[0].id});
            });
    }, []);
    const changeCar = (event) => {
        event.preventDefault();
        var selectedIndex = event.target.options.selectedIndex;
        console.log("reportasdflkasd", report);
        setReport({...report, id_pojazdu: cars[selectedIndex].id});
    };
    const dodajReporta = (event) => {
        event.preventDefault();
        console.log(report);
        fetch("http://localhost:8000/api/reports", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
            body: JSON.stringify(report),
        })
            .then((response) => response.json())
            .then((res) => console.log(res));
    };
    return (
        <Row>
            <Col sm={3} className="sidebar-menu-container">
                <Sidebar/>
            </Col>
            <Col xs={9} className="page">
                <Container
                    style={{height: "auto", fontSize: "16px"}}
                    className="justify-content-center align-items-center d-flex"
                >
                    <Card
                        style={{
                            width: "auto",
                            height: "auto",
                            borderRadius: "15px",
                            padding: "25px",
                        }}
                        className="shadow-lg border-0 mt-4 align-items-center"
                    >
                        <form onSubmit={dodajReporta}>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        <label htmlFor="marka">Numer rejestracyjny pojazdu</label>

                                        <select className="form-control" onChange={changeCar}>
                                            {cars.map((car) => (
                                                <option>{car.nrrejestracyjny}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">Tytuł zgłoszenia:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(event) =>
                                                setReport({...report, tytul: event.target.value})
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nrrejestracyjny">Treść zgłoszenia</label>
                                        <textarea
                                            className="form-control  mb-4"
                                            onChange={(event) =>
                                                setReport({...report, opis: event.target.value})
                                            }
                                        />
                                    </div>
                                    <div className="m-0 text-center">
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
                    </Card>
                </Container>
            </Col>
        </Row>
    );
}

export default AddReport;
