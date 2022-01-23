import {Col, Row} from "react-bootstrap";
import Sidebar from "../components/layout/Sidebar";
import Searchbox from "../components/Searchbox";
import ReportsList from "../components/Reports/ReportsList";
import {useNavigate} from "react-router-dom";
import Logo from "../components/Logo";

function ReportsPage() {

    const navigate = useNavigate();

    const dummy_data = [
        {
            marka: "opel",
            model: "Zafira",
            nr_rejestracyjny: "sc333",
            osoba: "Jan",
            typ_pojazdu: "sluzbowy",
            data_zgloszenia: "21-02-2022"
        },
        {
            marka: "opel",
            model: "Zafira",
            nr_rejestracyjny: "sc333",
            osoba: "Jan",
            typ_pojazdu: "sluzbowy",
            data_zgloszenia: "21-02-2022"
        },
    ]
    const addReportHandler = () => {
        const path = "/Flota/Reports/AddReport";
        navigate(path);
    }

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
                                <Logo/><h1 className="m-2">Zgłoszenia</h1>
                            </div>
                        </Col>
                    </Row>
                    <button className="blue_button ml-3 mt-2 btn-outline-info" onClick={addReportHandler}>Dodaj
                        zgłoszenie
                    </button>
                    
                    <Row>
                        <Col sm={12} className="shadow-1 as-box-rounded-white reports_table mt-5">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Marka</th>
                                    <th>Model</th>
                                    <th>Rejestracja</th>
                                    <th>Osoba zgłaszająca</th>
                                    <th>Typ pojazdu</th>
                                    <th>Data zgłoszenia</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {dummy_data.map((item) => (
                                    <ReportsList
                                        key={item.nr_rejestracyjny}
                                        marka={item.marka}
                                        model={item.model}
                                        nr_rej={item.nr_rejestracyjny}
                                        osoba={item.osoba}
                                        typ={item.typ_pojazdu}
                                        data={item.data_zgloszenia}
                                    />
                                ))}
                                </tbody>

                            </table>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default ReportsPage;