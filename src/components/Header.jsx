import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;

const Header = () => {
  return (
    <Row gutter={16} align={"center"}>
      <Col xs={12}>
        <Link to={"/"} className="header">
          <Title level={2}>STUDENT TODO APP</Title>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
