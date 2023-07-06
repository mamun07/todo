import { Col, Row, Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Row gutter={16} align={"center"}>
      <Col xs={12} className="header">
        <Typography.Text>@2023, Al Mamun</Typography.Text>
      </Col>
    </Row>
  );
};

export default Footer;
