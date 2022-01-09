import Sidebar from "../components/layout/Sidebar";
import {Col, Row} from "react-bootstrap";
import Searchbox from "../components/Searchbox";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import UsersList from "../components/Users/UsersList";
function UsersPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dummyData, setDummyData] = useState(
        [
            {
                imie: "Jan",
                nazwisko: "Kowalski",
                email:"Jan.Kowalski@gmail.com",
                nrtel:505155222,
                typ:"Administrator",
            },
            {
                imie: "Zbyszek",
                nazwisko: "Kolton",
                email:"Zbyszek.Kolton@gmail.com",
                nrtel:50151515,
                typ:"Uzytkownik",
            },
            {
                imie: "Debil",
                nazwisko: "Nowak",
                email:"Debil.Nowak@gmail.com",
                nrtel:222111333,
                typ:"Administrator",
            },
            {
                imie: "Mateusz",
                nazwisko: "Patałaszek",
                email:"Mateusz.Patałaszek@gmail.com",
                nrtel:790132888,
                typ:"Uzytkownik",
            },
        ]
    )

    const navigateToAdd = () => {
        const path = "/Flota/Users/AddUser";
        navigate(path);
    }

    //get DATA

   /* useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8000/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token" : localStorage.getItem("token")
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setIsLoading(false);
            setUsers(data);
        });
    }, [])*/

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <Row>
            <Col sm={3} className="sidebar-menu-container">
                <Sidebar />
            </Col>
            <Col sm={9} className="page">
                <div className="container-fluid container_users">
                    <Row>
                        <Col sm={12} className="mt-3">
                            <div className="page-title">
                                <h1>Użytkownicy</h1>
                            </div>
                        </Col>
                    </Row>
                    <button className="blue_button ml-3 mt-2 btn-outline-info" onClick={navigateToAdd}>Dodaj użytkownika</button>
                    <Row>
                        <Col sm={6} lg={4} md={4} xl={4} className="mt-4 mb-4">
                            <Searchbox />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="shadow-1 as-box-rounded-white users_table mt-2">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Imię</th>
                                    <th>Nazwisko</th>
                                    <th>Adres e-mail</th>
                                    <th className="text-nowrap">Numer telefonu</th>
                                    <th className="text-nowrap">Typ użytkownika</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {dummyData.map((item) => (
                                    <UsersList
                                        key={item.nrtel}
                                        imie={item.imie}
                                        nazwisko={item.nazwisko}
                                        email={item.email}
                                        nrtel={item.nrtel}
                                        typ={item.typ}
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

export default UsersPage;