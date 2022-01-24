import {Row, Col, Container} from "react-bootstrap";
import {useEffect, useState} from "react";

function TankForm(props) {
    const [dataTankowania, setDataTankowania] = useState("");
    const [przebieg, setPrzebieg] = useState(undefined);
    const [cena, setCena] = useState(undefined);
    const [ilosc, setIlosc] = useState(undefined);
    const [loadedCars, setLoadedCars] = useState([])
    const [choosed, setChoosed] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/cars", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let nrs = data.map(item => item.nrrejestracyjny)
                setLoadedCars(() => nrs)
            });
    }, []);

    const sendData = (e) => {
        e.preventDefault();

        const data = {
            nrrejestracyjny: choosed,
            data_tankowania: dataTankowania,
            przebieg: przebieg,
            kwota: cena,
            ilosc: ilosc
        }

        props.tankData(data);
    }

    return (
        <Container
            style={{height: "auto", fontSize: "16px"}}
            className="justify-content-center align-items-center d-flex"
        >
            <Col sm={12} className="as-box-rounded-white mt-5">
                <form onSubmit={sendData}>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="chosed">Numer rejestracyjny pojazdu</label>
                                <select className="form-control"
                                        onChange={(e) => setChoosed(() => e.target.value)}
                                        id="choosed"
                                        name="choosed">
                                    <option selected disabled>Wybierz...</option>
                                    {loadedCars.map(car => (
                                        <option key={car}>
                                            {car}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataT">Data tankowania</label>
                                <input type="date" className="form-control"
                                       onChange={(e) => setDataTankowania(() => e.target.value)}
                                       value={dataTankowania}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="przebieg">Przebieg</label>
                                <input type="number" className="form-control"
                                       onChange={(e) => setPrzebieg(() => e.target.value)}
                                       value={przebieg}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cena">Kwota tankowania</label>
                                <input type="number" step="0.01" className="form-control"
                                       onChange={(e) => setCena(() => e.target.value)}
                                       value={cena}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="paliwo">Ilość paliwa</label>
                                <input type="number" step="0.01" className="form-control"
                                       onChange={(e) => setIlosc(() => e.target.value)}
                                       value={ilosc}/>
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
    );
}

export default TankForm;
