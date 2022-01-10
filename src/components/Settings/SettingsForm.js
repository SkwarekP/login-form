import {Col} from "react-bootstrap";
import {Button, CardActions, CardContent, CardHeader, TextField, Card} from "@mui/material";

function SettingsForm() {

    return (
        <>
        <Col sm={12} lg={6} md={6} className="mt-3">
            <form>
                <Col sm={12}>
                    <Card>
                        <CardHeader title={<h4>Zmiana hasła</h4>}/>
                        <CardContent>
                            <TextField label="Stare hasło" variant="standard" fullWidth type="password" />
                            <TextField label="Nowe hasło" variant="standard" fullWidth type="password" />
                            <TextField label="Powtórz hasło" variant="standard" fullWidth type="password" />
                        </CardContent>
                        <CardActions>
                            <Button type="submit" variant="contained">Zatwierdz</Button>
                        </CardActions>
                    </Card>
                </Col>
            </form>
        </Col>
        <Col sm={12} lg={6} md={6} className="mt-3">
            <form>
                <Col sm={12}>
                    <Card>
                        <CardHeader title={<h4>Zmiana e-maila</h4>} />
                        <CardContent>
                            <TextField label="E-mail" variant="standard" fullWidth type="email" />
                            <TextField label="Powtórz e-mail" variant="standard" fullWidth type="email" />
                        </CardContent>
                        <CardActions>
                            <Button type="submit" variant="contained">Zatwierdź</Button>
                        </CardActions>
                    </Card>
                </Col>
            </form>
        </Col>
        </>
    )
}
export default SettingsForm;