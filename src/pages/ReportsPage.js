import {Col, Row} from "react-bootstrap";
import Sidebar from "../components/layout/Sidebar";
import Searchbox from "../components/Searchbox";

function ReportsPage() {


    return (
        <Row>
            <Col sm={3} className="sidebar-menu-container">
                <Sidebar />
            </Col>
            <Col sm={9} className="page">
                <div className="container-fluid">
                    <Row>
                        <Col sm={12} className="mt-3">
                            <div className="page-title">
                                <h1>Zgłoszenia</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col sm={4}>
                            <Searchbox />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="shadow as-box-rounded-white reports_table">
                            <table className="table">
                                <thead>

                                <tr className="mb-5">
                                    <th>Marka</th>
                                    <th>Model</th>
                                    <th>Rejestracja</th>
                                    <th>Osoba zgłaszająca</th>
                                    <th>Typ pojazdu</th>
                                    <th>Data zgłoszenia</th>
                                    <th>Status</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>
                                <tr>
                                    <td>Fiat</td>
                                    <td>Punto</td>
                                    <td>SC 0003</td>
                                    <td>Jan Nowak</td>
                                    <td>Służbowy</td>
                                    <td>Data zgłoszenia</td>
                                    <td className="status"><span>Nowe</span>
                                        <select className="selector edit_status">
                                            <option>Nowe</option>
                                            <option>Stare</option>
                                        </select>
                                    </td>
                                    <td>Zobacz Opis</td>
                                    <td><a className="text-nowrap" onClick="edit(this)">Edytuj</a></td>
                                </tr>


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