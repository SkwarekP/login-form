import {Container, Row, Col, Card} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {useState, useEffect, useReducer} from "react";

const modelReducer = (state, action) => {
    if (action.type === "MODEL") {
        return {
            value: action.val,
            isValid: action.val.trim().length > 1,
            validMessage: "Model nie istnieje",
        };
    }
    return {value: "", isValid: false};
};
const nrRejestracyjnyReducer = (state, action) => {
    if (action.type === "NRREJ") {
        return {
            value: action.val,
            isValid: action.val.trim().length <= 10,
            validMessage: "",
        };
    }
    return {value: "", isValid: false};
};
const silnikReducer = (state, action) => {
    if (action.type === "SILNIK") {
        return {value: action.val, isValid: action.val.includes(".")};
    }
    return {value: "", isValid: false};
};
const vinReducer = (state, action) => {
    if (action.type === "VIN") {
        return {
            value: action.val,
            isValid: action.val.trim().length === 17,
            validMessage: "nieprawidłowy numer vin",
        };
    }
    return {value: "", isValid: false};
};
const przebiegReducer = (state, action) => {
    if (action.type === "PRZEBIEG") {
        return {value: action.val, isValid: action.val.trim().length <= 7};
    }
    return {value: "", isValid: false};
};
const dataBadaniaReducer = (state, action) => {
    if (action.type === "DATABADANIA") {
        return {
            value: action.val,
            isValid:
                action.val.includes(new Date().getFullYear()) ||
                action.val.includes(new Date().getFullYear() + 1),
        };
    }
    return {value: "", isValid: false};
};
const dataUbezpieczeniaReducer = (state, action) => {
    if (action.type === "DATAUBEZPIECZENIA") {
        return {
            value: action.val,
            isValid:
                action.val.includes(new Date().getFullYear()) ||
                action.val.includes(new Date().getFullYear() - 1),
        };
    }
    return {value: "", isValid: false};
};

function NewWehicle(props) {
    const [marka, setMarka] = useState("Audi");
    const [zdjecie, setZdjecie] = useState("");
    const [rodzajpojazdu, setRodzajPojazdu] = useState("Osobowy");
    const [rodzajpaliwa, setRodzajPaliwa] = useState("Benzyna");
    const [isFormValid, setIsFormValid] = useState(false);

    const [correct, setCorrect] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const [modelState, dispatchModel] = useReducer(modelReducer, {
        value: "",
        isValid: null,
        validMessage: "",
    });
    const [nrrejestracyjnyState, dispatchNrRejestracyjny] = useReducer(
        nrRejestracyjnyReducer,
        {
            value: "",
            isValid: null,
            validMessage: "",
        }
    );
    const [silnikState, dispatchSilnik] = useReducer(silnikReducer, {
        value: "",
        isValid: null,
        validMessage: "",
    });
    const [vinState, dispatchVin] = useReducer(vinReducer, {
        value: "",
        isValid: null,
        validMessage: "",
    });
    const [przebiegState, dispatchPrzebieg] = useReducer(przebiegReducer, {
        value: "",
        isValid: null,
        validMessage: "",
    });
    const [dataBadaniaState, dispatchDataBadania] = useReducer(
        dataBadaniaReducer,
        {
            value: "",
            isValid: null,
            validMessage: "",
        }
    );
    const [dataUbezpieczeniaState, dispatchDataUbezpieczenia] = useReducer(
        dataUbezpieczeniaReducer,
        {
            value: "",
            isValid: null,
            validMessage: "",
        }
    );

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("checking form validity");
            setIsFormValid(
                modelState.isValid &&
                nrrejestracyjnyState.isValid &&
                silnikState.isValid &&
                vinState.isValid &&
                przebiegState.isValid &&
                dataBadaniaState.isValid &&
                dataUbezpieczeniaState.isValid
            );
        }, 500);

        return () => {
            console.log("cleanup");
            clearTimeout(identifier);
        };
    }, [
        modelState,
        nrrejestracyjnyState,
        silnikState,
        vinState,
        przebiegState,
        dataBadaniaState,
        dataUbezpieczeniaState,
    ]);

    function submitHandler(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("marka", marka);
        formData.append("model", modelState.value);
        formData.append("nrrejestracyjny", nrrejestracyjnyState.value);
        formData.append("rodzajpojazdu", rodzajpojazdu);
        formData.append("rodzajpaliwa", rodzajpaliwa);
        formData.append("silnik", silnikState.value);
        formData.append("vin", vinState.value);
        formData.append("przebieg", przebiegState.value);
        formData.append("databadania", dataBadaniaState.value);
        formData.append("dataubezpieczenia", dataUbezpieczeniaState.value);
        formData.append("file", zdjecie);

        console.log(isFormValid);

        if (isFormValid) {
            fetch("http://localhost:8000/api/addCar", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/form-data",
                    token: localStorage.getItem("token"),
                },
            }).then((response) => {
                return response.json();
            });
            setIsCorrect(() => true);
            setCorrect(() => "Pomyślnie dodano pojazd!")
        }
    }

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
                            background: "",
                            borderRadius: "15px",
                            padding: "25px",
                        }}
                        className="shadow-lg border-0 mt-4"
                    >
                        <form onSubmit={submitHandler}>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        <label htmlFor="marka">Marka</label>
                                        <select
                                            className="form-control"
                                            id="marka"
                                            name="marka"
                                            value={marka}
                                            onChange={(event) =>
                                                setMarka((prev) => (prev = event.target.value))
                                            }
                                        >
                                            <option>Audi</option>
                                            <option>Bmw</option>
                                            <option>Opel</option>
                                            <option>Volkswagen</option>
                                            <option>Ford</option>
                                            <option>Mercedes-Benz</option>
                                            <option>Renault</option>
                                            <option>Toyota</option>
                                            <option>Skoda</option>
                                            <option>Mazda</option>
                                            <option>Peugeot</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">Model</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="model"
                                            name="model"
                                            value={modelState.value}
                                            onChange={(event) => {
                                                dispatchModel({
                                                    type: "MODEL",
                                                    val: event.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nrrejestracyjny">Numer rejestracyjny</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nrrejestracyjny"
                                            name="nrrejestracyjny"
                                            value={nrrejestracyjnyState.value}
                                            onChange={(event) => {
                                                dispatchNrRejestracyjny({
                                                    type: "NRREJ",
                                                    val: event.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rodzajpojazdu">Rodzaj Pojazdu</label>
                                        <select
                                            className="form-control"
                                            id="rodzajpojazdu"
                                            name="rodzajpojazdu"
                                            value={rodzajpojazdu}
                                            onChange={(event) => {
                                                setRodzajPojazdu(
                                                    (prevState) => (prevState = event.target.value)
                                                );
                                            }}
                                        >
                                            <option>Osobowy</option>
                                            <option>Dostawczy</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rodzajpaliwa">Rodzaj Paliwa</label>
                                        <select
                                            className="form-control"
                                            id="rodzajpaliwa"
                                            name="rodzajpaliwa"
                                            value={rodzajpaliwa}
                                            onChange={(event) =>
                                                setRodzajPaliwa((prev) => (prev = event.target.value))
                                            }
                                        >
                                            <option>Benzyna</option>
                                            <option>Diesel</option>
                                            <option>Lpg</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="silnik">Silnik</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="silnik"
                                            name="silnik"
                                            value={silnikState.value}
                                            onChange={(event) => {
                                                dispatchSilnik({
                                                    type: "SILNIK",
                                                    val: event.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        <label htmlFor="vin">Numer VIN</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="vin"
                                            name="vin"
                                            value={vinState.value}
                                            onChange={(event) => {
                                                dispatchVin({type: "VIN", val: event.target.value});
                                            }}
                                        />
                                        {!vinState.isValid && (
                                            <p style={{color: "red", fontSize: "15px"}}>
                                                {vinState.validMessage}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="vin">Przebieg pojazdu</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="przebieg"
                                            name="przebieg"
                                            value={przebiegState.value}
                                            onChange={(event) => {
                                                dispatchPrzebieg({
                                                    type: "PRZEBIEG",
                                                    val: event.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="databadania">
                                            Data badania technicznego
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="databadania"
                                            name="databadania"
                                            value={dataBadaniaState.value}
                                            onChange={(event) => {
                                                dispatchDataBadania({
                                                    type: "DATABADANIA",
                                                    val: event.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dataubezpieczenia">
                                            Data kupna ubezpieczenia
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dataubezpieczenia"
                                            name="dataubezpieczenia"
                                            value={dataUbezpieczeniaState.value}
                                            onChange={(event) => {
                                                dispatchDataUbezpieczenia({
                                                    type: "DATAUBEZPIECZENIA",
                                                    val: event.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label htmlFor="zdjecie" className="m-1">
                                            Wybierz zdjecie:
                                        </label>
                                        <input
                                            className="m-1"
                                            type="file"
                                            id="zdjecie"
                                            name="zdjecie"
                                            onChange={(event) => setZdjecie(event.target.files[0])}
                                        />
                                    </div>
                                    <div className="m-0 text-center">
                                        <button
                                            type="submit"
                                            className="blue_button text-center pb-2 pt-2"
                                            style={{width: "200px"}}
                                            disabled={!isFormValid}
                                        >
                                            Dodaj
                                        </button>
                                        {isCorrect && <p className="mt-1 fadeOut">{correct}</p>}
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

export default NewWehicle;
