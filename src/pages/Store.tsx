import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import bookImage from "../../public/imgs/book.jpg";
import computerImage from "../../public/imgs/computer.jpg";
import bananaImage from "../../public/imgs/banana.jpg";
import carImage from "../../public/imgs/car.jpg";
import egyptianDressImage from "../../public/imgs/Egyptian Dress.jpg";
import bohemianDressImage from "../../public/imgs/Bohemian Dress.jpg";
import afroSetImage from "../../public/imgs/afro set.jpg";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        <Col>
          <StoreItem imgUrl={bookImage} {...storeItems[0]} />
        </Col>
        <Col>
          <StoreItem imgUrl={computerImage} {...storeItems[1]} />
        </Col>
        <Col>
          <StoreItem imgUrl={bananaImage} {...storeItems[2]} />
        </Col>
        <Col>
          <StoreItem imgUrl={carImage} {...storeItems[3]} />
        </Col>
        <Col>
          <StoreItem imgUrl={egyptianDressImage} {...storeItems[4]} />
        </Col>
        <Col>
          <StoreItem imgUrl={bohemianDressImage} {...storeItems[5]} />
        </Col>
        <Col>
          <StoreItem imgUrl={afroSetImage} {...storeItems[6]} />
        </Col>
      </Row>
    </>
  );
}
