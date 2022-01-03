import { Col, Row, CardGroup, Card } from "react-bootstrap";
import CardItem from "./CardItem";

function CardList(props) {
  return (
    <Col xs={12} className="card_list">
      <Row>
        <CardGroup>
          {props.cards.map((card) => (
            <CardItem
              key={card.id}
              id={card.id}
              image={card.image}
              nr_rejestracyjny={card.nr_rejestracyjny}
              marka={card.marka}
              model={card.model}
            />
          ))}
        </CardGroup>
      </Row>
    </Col>
  );
}
export default CardList;
