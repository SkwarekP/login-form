import { Form, Card, Button, InputGroup, Col, Row, Container } from "react-bootstrap";
import { PersonFill, KeyFill } from "react-bootstrap-icons";
import Logo from "../components/Logo";
import LoginFromStyle from "../style/LoginFormStyle.css"

function LoginForm() {
  return (
    <Container
      style={{ height: "100vh" }}
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
          <Logo />
        </Col>
        <Col xs={10} sm={10} md={10} lg={10} xl={10} className="text-center">
          <label className="fs-3 fw-bold text-primary">Sign in!</label>
        </Col>
      </Row>
      <Form className="mt-4 text-black">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label className="fs-4">Email Address</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <PersonFill />
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Provide e-mail address"
              className="border-0 border-primary"
            />
          </InputGroup>
          <Form.Text className="text-black">
            We'll never share your email address.
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col} controlId="formPassword" className="ml-2">
          <Form.Label className="fs-5 mt-2">Password</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <KeyFill />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              className="border-0 border-primary"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="Button" className="text-center">
          <Button
            type="submit"
            style={{ width: "125px" }}
            className="mt-5 primary border-0"
          >
            Continue
          </Button>
        </Form.Group>
      </Form>
    </Card>
    </Container>
  );
}

export default LoginForm;
