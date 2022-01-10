import {Col, Row} from "react-bootstrap";
import Sidebar from "../components/layout/Sidebar";
import SettingsForm from "../components/Settings/SettingsForm";

function Settings() {

    return(
        <Row>
            <Col sm={3} className="sidebar-menu-container">
                <Sidebar />
            </Col>
            <Col sm={9} className="page">
                <div className="container-fluid">
                    <Row>
                        <Col sm={12} className="mt-2">
                            <div className="page-title text-uppercase">
                                <h1 className="text-nowrap">PME FLOTA</h1>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <div className=" shadow-lg as-box-rounded-white mt-2">
                            <h5 className="text-uppercase">Twoje dane:</h5>
                                <Row>
                                    <Col sm={3} lg={3}>
                                        <label htmlFor="fname" className="mb-2 personalData">Imię:</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fsurname" className="mb-2 personalData">Nazwisko:</label>
                                        <div className="w-100"/>
                                        <label htmlFor="femial"
                                               className="mb-2 personalData text-nowrap">E-Mail:</label>
                                    </Col>
                                    <Col sm={3} lg={1} md={1} />
                                    <Col sm={4} lg={3}>
                                        <span id="fname" className="mb-2">Patryk</span>
                                        <div className="w-100"/>
                                        <span id="fsurname" className="mb-2">Skwara</span>
                                        <div className="w-100"/>
                                        <span id="femail" className="mb-2">Patryk.Skwara@gmail.com</span>
                                    </Col>
                                </Row>
                            </div>

                            <div className="shadow-lg as-box-rounded-white mt-5">
                                <Row>
                                    <SettingsForm />
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
export default Settings;