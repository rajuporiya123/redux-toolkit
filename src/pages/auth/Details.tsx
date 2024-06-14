import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import img1 from "../../images/cat-1.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingleProductHandler } from "../../redux/slice/Auth/getSingleProduct-slice";

const Details = () => {
  const { id } = useParams();

  const singleProduct = useSelector((state: any) => state?.singleProduct);

  const dispatch: any = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(SingleProductHandler(id));
  }, []);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Row className="main">
        <Col>
          <img src={singleProduct?.data?.data?.image} className="img-fluid" />
        </Col>
        <Col className="sideView">
          <div className="store">Official Store</div>
          <div>{singleProduct?.data?.data?.name}</div>
          <div className="ulasan">
            4.3 (5 ulasan) | 0 {singleProduct?.data?.data?.name}
          </div>
          <div className="border"></div>
          <span className="ulasan"> Rs 200 </span>
          <span className="ulasan"> {singleProduct?.data?.data?.price} </span>
          <span className="percentage">70% OFF</span>
          <div className="my-3">
            <span className="ready">Ready</span>
            <span className="mx-3 Original">Original</span>
            <span className="mx-2 Gransi">Gransi 7 hari</span>
          </div>
          <div className="item">
            <button className="minus" onClick={handleMinus}>
              -
            </button>
            <span className="mx-2">{count}</span>
            <button className="plus" onClick={handlePlus}>
              +
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
