import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductHandler } from "../../redux/slice/Auth/getproduct-slice";

const Home = () => {
  const Product = useSelector((state: any) => state?.getproduct);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getProductHandler());
  }, []);

  return (
    <div>
      <Row>
        <Col className="box">Quality Product</Col>
        <Col className="box">Free Shopping</Col>
        <Col className="box">14-Day Return</Col>
        <Col className="box">24/7 Support</Col>
      </Row>
      <Row className="my-5">
        {Product?.data?.data &&
          Product?.data?.data?.length > 0 &&
          Product?.data?.data?.map((item: any, index: any) => (
            <Col className="cart" key={index}>
              <p className="text">15 Products</p>
              <img src={item?.image} className="img-fluid" />
              <h3>{item?.name}</h3>
              <Row>
                <Col className="view" title="View Details">
                  <Link to={`/details/${item?._id}`} className="link">
                    View Details
                  </Link>
                </Col>
                <Col className="view" title="Add To Cart">
                  <Link to="/cart" className="link">
                    Add To Cart
                  </Link>
                </Col>
              </Row>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;
