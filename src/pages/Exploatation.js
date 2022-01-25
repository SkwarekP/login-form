import Sidebar from "../components/Sidebar/Sidebar";
import {Col, Row} from "react-bootstrap";
import Logo from "../components/Logo";
import {useState} from "react";
import TankForm from "../components/Exploatation/tankForm";

function Exploatation() {
    const [tankForm, setTankForm] = useState(false);

    const onUpdateCar = (data) => {
        console.log(data);
        fetch("http://localhost:8000/api/refuel", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
            }
        }).then(res => console.log("wysłano", res))
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
                                <Logo/>
                                <h1 className="m-2">Eksploatacja</h1>
                            </div>
                        </Col>
                    </Row>

                    <button className="blue_button mt-2 btn-outline-info"
                            onClick={() => setTankForm((prev) => !prev)}>
                        Dodaj tankowanie
                    </button>

                    {tankForm && <TankForm tankData={onUpdateCar}/>}
                </div>
            </Col>
        </Row>
    );
}

export default Exploatation;
