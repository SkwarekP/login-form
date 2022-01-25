import {Row, Col, Container} from "react-bootstrap";
import {useEffect, useReducer, useState} from "react";

const dataTankowaniaReducer = (state, action) => {
    if (action.type === "DATA_TANKOWANIA") {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth(); //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newDate = year + "-" + month + 1 + "-" + day;
        return {
            value: action.val,
            isValid: action.val === newDate,
            validMessage: "Niepoprawna data tankowania"
        };
    }
    return {value: "", isValid: false, validMessage: ""}
}

const przebiegReducer = (state, action) => {
    if (action.type === "PRZEBIEG") {
        return {
            value: action.val,
            isValid: action.val > 0,
            validMessage: "Przebieg nie moze byc zerem"
        }
    }
    return {value: 0, isValid: false, validMessage: ""}
}
const iloscReducer = (state, action) => {
    if (action.type === "ILOSC") {
        return {
            value: action.val,
            isValid: action.val > 0,
            validMessage: "Ilosc paliwa nie moze byc zerem"
        }
    }
    return {value: 0, isValid: false, validMessage: ""}
}

const cenaReducer = (state, action) => {
    if (action.type === "CENA") {
        return {
            value: action.val,
            isValid: action.val > 0,
            validMessage: "Kwota tankowania nie moze byc zerem"
        }
    }
    return {value: 0, isValid: false, validMessage: ""}
}

function TankForm(props) {
    const [loadedCars, setLoadedCars] = useState([])
    const [choosed, setChoosed] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [correct, setCorrect] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const [dataTankowania, dispatchDataTankowania] = useReducer(dataTankowaniaReducer, {
        value: "",
        isValid: null,
        validMessage: ""
    })
    const [przebieg, dispatchPrzebieg] = useReducer(przebiegReducer, {
        value: 0,
        isValid: null,
        validMessage: ""
    })
    const [ilosc, dispatchIlosc] = useReducer(iloscReducer, {
        value: 0,
        isValid: null,
        validMessage: ""
    })
    const [cena, dispatchCena] = useReducer(cenaReducer, {
        value: 0,
        isValid: null,
        validMessage: ""
    })


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

    useEffect(() => {
        const identifier = setTimeout(() => {
            setIsFormValid(dataTankowania.isValid && przebieg.isValid && cena.isValid && ilosc.isValid)
        }, 500)

        return () => {
            clearTimeout(identifier)
        }
    }, [dataTankowania, przebieg, cena, ilosc])

    const sendData = (e) => {
        e.preventDefault();
        if (isFormValid) {
            const data = {
                nrrejestracyjny: choosed,
                data_tankowania: dataTankowania.value,
                przebieg: przebieg.value,
                kwota: cena.value,
                ilosc: ilosc.value
            }
            props.tankData(data);
            setChoosed(() => "")
            dispatchDataTankowania({val: "",})
            dispatchPrzebieg({val: 0})
            dispatchCena({val: 0})
            dispatchIlosc({val: 0})
            setIsCorrect(() => true)
            setCorrect(() => "Wpis został pomyślnie dodany!")
        } else {
            setChoosed(() => "")
            dispatchDataTankowania({val: ""})
            dispatchPrzebieg({val: 0})
            dispatchCena({val: 0})
            dispatchIlosc({val: 0})
            setIsCorrect(() => false)
            setCorrect(() => "Pola formularza nie mogą być puste!")
        }

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
                                       onChange={(e) =>
                                           dispatchDataTankowania({
                                               type: "DATA_TANKOWANIA",
                                               val: e.target.value
                                           })}
                                       value={dataTankowania.value}/>
                                {!dataTankowania.isValid && <p className="inCorrect">{dataTankowania.validMessage}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="przebieg">Przebieg</label>
                                <input type="number" className="form-control"
                                       onChange={(e) => dispatchPrzebieg({
                                           type: "PRZEBIEG",
                                           val: e.target.value
                                       })}
                                       value={przebieg.value}/>
                                {!przebieg.isValid && <p className="inCorrect">{przebieg.validMessage}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="cena">Kwota tankowania</label>
                                <input type="number" step="0.01" className="form-control"
                                       onChange={(e) => dispatchCena({
                                           type: "CENA",
                                           val: e.target.value
                                       })}
                                       value={cena.value}/>
                                {!cena.isValid && <p className="inCorrect">{cena.validMessage}</p>}

                            </div>
                            <div className="form-group">
                                <label htmlFor="paliwo">Ilość paliwa</label>
                                <input type="number" step="0.01" className="form-control"
                                       onChange={(e) => dispatchIlosc({
                                           type: "ILOSC",
                                           val: e.target.value
                                       })}
                                       value={ilosc.value}/>
                                {!ilosc.isValid && <p className="inCorrect">{ilosc.validMessage}</p>}

                            </div>
                            <div className="mt-5 text-center">
                                <button
                                    type="submit"
                                    className="blue_button text-center pb-2 pt-2"
                                    style={{width: "200px"}}
                                >
                                    Dodaj
                                </button>
                                {isCorrect && <p className="fadeOut">{correct}</p>}
                                {!isCorrect && <p className="inCorrect">{correct}</p>}

                            </div>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Container>
    );
}

export default TankForm;
