import {useEffect, useReducer, useState} from "react";
import {Row, Col, Container} from 'react-bootstrap';
import Sidebar from "../layout/Sidebar";

const emailReducer = (state, action) => {
    if (action.type === "EMAIL") {
        return {
            value: action.val, isValid: action.val.includes("@") && action.val.includes("."),
            message: "Niepoprawne dane"
        };
    }
    return {value: "", isValid: false, message: ""}
}
const nrtelReducer = (state, action) => {
    if (action.type === "TEL") {
        return {value: action.val, isValid: action.val.length === 9, message: "Niepoprawny numer telefonu"}
    }
    return {value: "", isValid: false, message: ""}
}

function UsersForm() {

    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [typeOfUser, setTypeOfUser] = useState("Użytkownik");
    const [isFormValid, setIsFormValid] = useState(false);
    const [formValidMessage, setFormValidMessage] = useState("");
    const [correct, setCorrect] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
        message: "",
    });
    const [nrtelState, dispatchNrTel] = useReducer(nrtelReducer, {
        value: "",
        isValid: null,
        message: ""
    })

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("checking validation");
            setIsFormValid(emailState.isValid && nrtelState.isValid)
        }, 500)

        return () => {
            console.log("cleanup")
            clearTimeout(identifier)
        }
    }, [emailState, nrtelState])


    const addUserHandler = (e) => {
        e.preventDefault();

        let {typeUser} = typeOfUser;
        if (typeOfUser === "Administrator") {
            typeUser = 1;
        }
        if (typeOfUser === "Użytkownik") {
            typeUser = 0;
        }

        const formData = new FormData();
        formData.append("imie", imie);
        formData.append("nazwisko", nazwisko);
        formData.append("email", emailState.value);
        formData.append("nr_telefonu", nrtelState.value)
        formData.append("is_admin", typeUser)


        if (isFormValid) {
            fetch("http://localhost:8000/api/users", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/form-data",
                    "token": localStorage.getItem("token")
                },
            }).then((res) => {
                return res.json();
            })
            setIsCorrect(() => true)
            setCorrect(() => "Użytkownik został pomyślnie dodany!")
        } else {
            setFormValidMessage("Niepoprawne dane formularza");
        }

        setImie("");
        setNazwisko("");
        dispatchEmail({val: ""})
        dispatchNrTel({val: ""});
        setTypeOfUser("Użytkownik");
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
                    <Col sm={12} className="shadow-1 as-box-rounded-white mt-5">
                        <form onSubmit={addUserHandler}>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        <label htmlFor="imie">Imie</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="imie"
                                            name="imie"
                                            value={imie}
                                            onChange={(event) => {
                                                setImie((prevState) => prevState = event.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">Nazwisko</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nazwisko"
                                            name="nazwisko"
                                            value={nazwisko}
                                            onChange={(event) => {
                                                setNazwisko((prevState) => prevState = event.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">E-mail</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={emailState.value}
                                            onChange={(event) => {
                                                dispatchEmail({type: "EMAIL", val: event.target.value})
                                            }}
                                        />
                                        {!emailState.isValid && <p style={{color: "red"}}>{emailState.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">Nr telefonu</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="nrtel"
                                            name="nrtel"
                                            value={nrtelState.value}
                                            onChange={(event) => {
                                                dispatchNrTel({type: "TEL", val: event.target.value})
                                            }}
                                        />
                                        {!nrtelState.isValid && <p style={{color: "red"}}>{nrtelState.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">Typ użytkownika</label>
                                        <select
                                            className="form-control"
                                            id="typ"
                                            name="typ"
                                            value={typeOfUser}
                                            onChange={(event) => setTypeOfUser(prev => prev = event.target.value)}
                                        >
                                            <option>Użytkownik</option>
                                            <option>Administrator</option>
                                        </select>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button
                                            type="submit"
                                            className="blue_button text-center pb-2 pt-2"
                                            style={{width: "200px"}}
                                        >
                                            Dodaj
                                        </button>
                                        {isCorrect && <p className="fadeOut mt-1">{correct}</p>}
                                        {!isFormValid && <p className="inCorrect">{formValidMessage}</p>}
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Container>
            </Col>
        </Row>
    )
}

export default UsersForm;