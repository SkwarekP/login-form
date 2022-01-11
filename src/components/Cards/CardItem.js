import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./CardItem.module.css";

function CardItem(props) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    const path = "/Flota/MyCar";
    navigate(path);
  };
  return (
    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
      <Card onClick={navigateHandler}>
        <img src={props.image} className={classes.cardImgTop} alt="..." />
        <div className={classes.cardBody}>
          <h5 className={classes.cardTitle}> {props.nr_rejestracyjny}</h5>
          <p className={classes.cardText}>
            {props.marka}
            <br />
            {props.model}
          </p>
        </div>
      </Card>
    </Col>
  );
}

export default CardItem;
