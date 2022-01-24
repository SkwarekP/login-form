import { Col } from "react-bootstrap";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Card,
} from "@mui/material";
import { useState } from "react";

function SettingsForm(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatPassword] = useState("");
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordEmail, setPasswordEmail] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    if (newPassword !== repeatNewPassword) {
      setIsChangePassword(() => false);
      setMessage(() => "Niepoprawne dane!");
      setOldPassword("");
      setNewPassword("");
      setRepeatPassword("");
    } else if (
      newPassword === "" ||
      oldPassword === "" ||
      repeatNewPassword === ""
    ) {
      setIsChangePassword(() => false);
      setMessage(() => "Pola nie mogą być puste!");
    } else {
      const data = {
        old_password: oldPassword,
        new_password: newPassword,
      };
      setIsChangePassword(() => true);
      setMessage(() => "Pomyślnie zmieniono hasło");
      props.password(data);
      setOldPassword("");
      setNewPassword("");
      setRepeatPassword("");
    }
  };

  const sendDataEmail = (e) => {
    e.preventDefault();

    if (oldEmail !== newEmail) {
      setIsEmail(() => false);
      setEmailMessage(() => "Niepoprawne dane!");
    } else {
      setIsEmail(() => true);
      setEmailMessage(() => "Pomyślnie zmieniono adres e-mail");
      const data = {
        new_email: newEmail,
        password: passwordEmail,
      };
      props.email(data);
      setNewEmail(() => "");
      setOldEmail(() => "");
      setPasswordEmail(() => "");
    }
  };

  return (
    <>
      <Col sm={12} lg={6} md={6} className="mt-3">
        <form onSubmit={sendData}>
          <Col sm={12}>
            <Card>
              <CardHeader title={<h4>Zmiana hasła</h4>} />
              <CardContent>
                <TextField
                  label="Stare hasło"
                  variant="standard"
                  fullWidth
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(() => e.target.value)}
                />
                <TextField
                  label="Nowe hasło"
                  variant="standard"
                  fullWidth
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(() => e.target.value)}
                />
                <TextField
                  label="Powtórz hasło"
                  variant="standard"
                  fullWidth
                  type="password"
                  value={repeatNewPassword}
                  onChange={(e) => setRepeatPassword(() => e.target.value)}
                />
              </CardContent>
              <CardActions>
                <Button type="submit" variant="contained">
                  Zatwierdź
                </Button>
              </CardActions>
              {isChangePassword && <p className="fadeOut">{message}</p>}
              {!isChangePassword && <p className="inCorrect">{message}</p>}
            </Card>
          </Col>
        </form>
      </Col>
      <Col sm={12} lg={6} md={6} className="mt-3">
        <form onSubmit={sendDataEmail}>
          <Col sm={12}>
            <Card>
              <CardHeader title={<h4>Zmiana e-maila</h4>} />
              <CardContent>
                <TextField
                  label="Hasło"
                  variant="standard"
                  fullWidth
                  type="password"
                  value={passwordEmail}
                  onChange={(e) => setPasswordEmail(() => e.target.value)}
                />
                <TextField
                  label="E-mail"
                  variant="standard"
                  fullWidth
                  type="email"
                  value={oldEmail}
                  onChange={(e) => setOldEmail(() => e.target.value)}
                />
                <TextField
                  label="Powtórz e-mail"
                  variant="standard"
                  fullWidth
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(() => e.target.value)}
                />
              </CardContent>
              <CardActions>
                <Button type="submit" variant="contained">
                  Zatwierdź
                </Button>
              </CardActions>
              {isEmail && <p className="fadeOut">{emailMessage}</p>}
              {!isEmail && <p className="inCorrect">{emailMessage}</p>}
            </Card>
          </Col>
        </form>
      </Col>
    </>
  );
}

export default SettingsForm;
