import React from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";

const { Title } = Typography;

const Payment: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          maxWidth: 500,
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        bodyStyle={{ padding: "20px" }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          Payment Information
        </Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            cardNumber: "",
            cardHolder: "",
            expiryDate: "",
            cvv: "",
          }}
        >
          <Form.Item
            label="Card Number"
            name="cardNumber"
            rules={[
              { required: true, message: "Please enter your card number!" },
              { len: 16, message: "Card number must be 16 digits!" },
            ]}
          >
            <Input placeholder="Enter your card number" maxLength={16} />
          </Form.Item>

          <Form.Item
            label="Card Holder Name"
            name="cardHolder"
            rules={[
              { required: true, message: "Please enter card holder's name!" },
            ]}
          >
            <Input placeholder="Enter card holder's name" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Expiry Date"
                name="expiryDate"
                rules={[
                  { required: true, message: "Please enter expiry date!" },
                ]}
              >
                <Input placeholder="MM/YY" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="CVV"
                name="cvv"
                rules={[
                  { required: true, message: "Please enter CVV!" },
                  { len: 3, message: "CVV must be 3 digits!" },
                ]}
              >
                <Input.Password placeholder="Enter CVV" maxLength={3} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ marginTop: "20px" }}>
            <Button type="primary" htmlType="submit" block>
              Pay Now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Payment;
