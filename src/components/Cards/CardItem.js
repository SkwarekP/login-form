import { Col, Card } from "react-bootstrap";
import classes from "./CardItem.module.css";

function CardItem(props) {
  return (
    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
      <Card>
        <img src={props.image} className={classes.cardImgTop} alt="..."></img>
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
