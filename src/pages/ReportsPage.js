import {Col, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import {useNavigate} from "react-router-dom";
import Logo from "../components/Logo";
import {useState, useEffect} from "react";

function ReportsPage() {
    const navigate = useNavigate();
    const [reportData, setReportData] = useState([]);
    const [showDesc, setShowDesc] = useState(false);
    const [desc, setDesc] = useState("");
    const addReportHandler = () => {
        const path = "/Flota/Reports/AddReport";
        navigate(path);
    };
    useEffect(() => {
        fetch("http://localhost:8000/api/reports", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => setReportData(data))
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Row>
            <Col sm={3} className="sidebar-menu-container">
                <Sidebar/>
            </Col>
            <Col sm={9} className="page">
                <div className="container-fluid">
                    <Row>
                        <Col sm={12} className="mt-3">
                            <div className="page-title">
                                <Logo/>
                                <h1 className="m-2">Zgłoszenia</h1>
                            </div>
                        </Col>
                    </Row>
                    <button
                        className="blue_button ml-3 mt-2 btn-outline-info"
                        onClick={addReportHandler}
                    >
                        Dodaj zgłoszenie
                    </button>

                    <Row>
                        <Col
                            sm={12}
                            className="as-box-rounded-white reports_table mt-5"
                        >
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Marka</th>
                                    <th>Model</th>
                                    <th>Rejestracja</th>
                                    <th>Osoba zgłaszająca</th>
                                    <th>Tytuł zgłoszenia</th>
                                    <th>Data zgłoszenia</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {reportData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.Car.marka}</td>
                                        <td>{item.Car.model}</td>
                                        <td>{item.Car.nrrejestracyjny}</td>
                                        <td>
                                            {item.User.imie} {item.User.nazwisko}{" "}
                                        </td>
                                        <td>{item.tytul}</td>
                                        <td>
                                            {new Date(item.data_zgloszenia).toLocaleDateString()}
                                        </td>
                                        <td>
                                            <button style={{
                                                backgroundColor: "#0db5c9",
                                                color: "white",
                                                borderRadius: "6px"
                                            }}
                                                    onClick={() => {
                                                        setShowDesc((prev) => !prev)
                                                        setDesc(() => item.opis)
                                                    }}>Wyświetl
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            {showDesc && <p className="text-center text-wrap" key={Math.random() * 10}>{desc}</p>}
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default ReportsPage;
