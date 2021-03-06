import {
    Form,
    Card,
    InputGroup,
    Col,
    Row,
    Container,
} from "react-bootstrap";
import {PersonFill, KeyFill} from "react-bootstrap-icons";
import {useRef} from "react";
import Logo from "../../components/Logo";

function LoginForm(props) {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const loginData = {
            email: enteredEmail,
            password: enteredPassword,
        };
        props.onLogIn(loginData);
    }

    return (
        <Container
            style={{height: "100vh"}}
            className="justify-content-center align-items-center d-flex"
        >
            <Card
                style={{
                    width: "30rem",
                    height: "25rem",
                    background: "inherit",
                    borderRadius: "15px",
                    padding: "25px",
                }}
                className="shadow-lg border-0"
            >
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} className="">
                        <Logo/>
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10} className="text-center">
                        <label className="fs-3 fw-bold text-white">Sign in!</label>
                    </Col>
                </Row>
                <Form className="mt-4 text-black" onSubmit={submitHandler}>
                    <Form.Group as={Col}>
                        <Form.Label className="fs-4" htmlFor="email">
                            Email Address
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <PersonFill/>
                            </InputGroup.Text>
                            <Form.Control
                                type="email"
                                required
                                id="email"
                                placeholder="Provide e-mail address"
                                className="border-0 border-primary"
                                ref={emailInputRef}
                            />
                        </InputGroup>
                        <Form.Text className="text-black">
                            We'll never share your email address.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} className="ml-2">
                        <Form.Label className="fs-5 mt-2" htmlFor="password">
                            Password
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <KeyFill/>
                            </InputGroup.Text>
                            <Form.Control
                                type="password"
                                required
                                id="password"
                                placeholder="Password"
                                className="border-0 border-primary"
                                ref={passwordInputRef}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="Button" className="text-center">
                        <button
                            type="submit"
                            className="mt-3 blue_button outline-none"
                            style={{background: "black"}}
                        >
                            Zaloguj
                        </button>
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    );
}

export default LoginForm;
