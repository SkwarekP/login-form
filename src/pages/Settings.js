import {Col, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import SettingsForm from "../components/Settings/SettingsForm";
import {useEffect, useState, useContext} from "react";
import {UserContext} from "../store/user-context";
import {useStateCallback} from "use-state-callback";
import Logo from "../components/Logo";

function Settings() {
    const [correct, setCorrect] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const [currentUser, setCurrentUser] = useState({
        imie: "",
        email: "",
        nr_telefonu: "",
        nazwisko: "",
        zdjecie: "",
    });
    const [profilePhoto, setProfilePhoto] = useStateCallback("");

    const {user} = useContext(UserContext);
    const {setUser} = useContext(UserContext);

    useEffect(() => {
        console.log("effect");
        fetch("http://localhost:8000/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let current = data;
                let find = current.findIndex(
                    (p) => p.imie.concat(" ", p.nazwisko) === user.name
                );
                if (find > -1) {
                    setCurrentUser(() => {
                        return {
                            imie: current[find].imie,
                            email: current[find].email,
                            nr_telefonu: current[find].nr_telefonu,
                            nazwisko: current[find].nazwisko,
                            zdjecie: user.zdjecie,
                        };
                    });
                }
            });
    }, [user]);

    const changePicture = (st) => {
        const formData = new FormData();
        formData.append("file", st);
        fetch("http://localhost:8000/api/changeProfilePicture", {
            method: "PUT",
            body: formData,
            headers: {
                Accept: "application/form-data",
                token: localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setUser((prev) => {
                    return {...prev, zdjecie: res.zdjecie};
                });
                setCurrentUser((prev) => {
                    return {...prev, zdjecie: res.zdjecie};
                });
            });
        setIsCorrect(() => true);
        setCorrect("Pomyślnie zmieniono zdjęcie!");
    };

    const changePassword = (passwords) => {
        fetch("http://localhost:8000/api/changePassword", {
            method: "PUT",
            body: JSON.stringify(passwords),
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
        }).then((res) => console.log(res));
    };

    const changeEmail = (data) => {
        fetch("http://localhost:8000/api/changeEmail", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
        }).then((res) => console.log(res));
    };

    return (
        <Row>
            <Col sm={3} className="sidebar-menu-container">
                <Sidebar/>
            </Col>
            <Col sm={9} className="page">
                <div className="container-fluid">
                    <Row>
                        <Col sm={12} className="mt-2">
                            <div className="page-title">
                                <Logo/>
                                <h1 className="m-2">Ustawienia</h1>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <div className=" shadow-lg as-box-rounded-white mt-3">
                                <h5 className="text-uppercase">Twoje dane:</h5>
                                <Row>
                                    <Col sm={3} lg={3}>
                                        <label htmlFor="fname" className="mb-2 personalData">
                                            Imię:
                                        </label>
                                        <div className="w-100"/>
                                        <label htmlFor="fsurname" className="mb-2 personalData">
                                            Nazwisko:
                                        </label>
                                        <div className="w-100"/>
                                        <label
                                            htmlFor="femial"
                                            className="mb-2 personalData text-nowrap"
                                        >
                                            E-Mail:
                                        </label>
                                        <div className="w-100"/>
                                        <label
                                            htmlFor="fnrtel"
                                            className="mb-2 personalData text-nowrap"
                                        >
                                            Numer telefonu:
                                        </label>
                                    </Col>
                                    <Col sm={3} lg={1} md={1}/>
                                    <Col sm={4} lg={3}>
                    <span id="fname" className="mb-2">
                      {currentUser.imie}
                    </span>
                                        <div className="w-100"/>
                                        <span id="fsurname" className="mb-2">
                      {currentUser.nazwisko}
                    </span>
                                        <div className="w-100"/>
                                        <span id="femail" className="mb-2">
                      {currentUser.email}
                    </span>
                                        <div className="w-100"/>
                                        <span id="nrtel" className="mb-2">
                      {currentUser.nr_telefonu}
                    </span>
                                    </Col>
                                    <Col sm={4} lg={3}>
                                        <img
                                            alt="alt"
                                            style={{
                                                objectFit: "cover",
                                                width: "100px",
                                                borderRadius: "50%",
                                                height: "100px",
                                            }}
                                            className="m-lg-2"
                                            src={currentUser.zdjecie}
                                        />
                                        <label className="mb-1">
                                            {" "}
                                            Zmień zdjęcie profilowe
                                            <input
                                                className="mb-1"
                                                style={{color: "white"}}
                                                type="file"
                                                onChange={(e) => {
                                                    setProfilePhoto(e.target.files[0], changePicture);
                                                }}
                                            />
                                        </label>
                                        {isCorrect && <p className="fadeOut mt-1">{correct}</p>}
                                    </Col>
                                </Row>
                            </div>
                            <div className="shadow-lg as-box-rounded-white mt-5">
                                <Row>
                                    <SettingsForm password={changePassword} email={changeEmail}/>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Settings;
