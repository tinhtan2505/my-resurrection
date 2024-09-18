import React from "react";
import { Typography, Table, Row, Col, Button, Card } from "antd";

const { Title, Text } = Typography;

const dataSource = [
  {
    key: "1",
    description: "Product 1",
    quantity: 2,
    unitPrice: 100,
    totalPrice: 200,
  },
  {
    key: "2",
    description: "Product 2",
    quantity: 1,
    unitPrice: 300,
    totalPrice: 300,
  },
];

const columns = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Unit Price ($)",
    dataIndex: "unitPrice",
    key: "unitPrice",
  },
  {
    title: "Total Price ($)",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
];

const Invoice: React.FC = () => {
  const totalAmount = dataSource.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          maxWidth: 800,
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        bodyStyle={{ padding: "20px" }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          Invoice
        </Title>

        <Row justify="space-between" style={{ marginBottom: "20px" }}>
          <Col>
            <Text strong>Invoice To:</Text>
            <br />
            <Text>John Doe</Text>
            <br />
            <Text>123 Main St, City</Text>
            <br />
            <Text>john.doe@example.com</Text>
          </Col>

          <Col>
            <Text strong>Invoice Date:</Text>
            <br />
            <Text>September 18, 2024</Text>
            <br />
            <Text strong>Invoice #: </Text>
            <Text>INV-20240918</Text>
          </Col>
        </Row>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3}>
                <Text strong>Total Amount</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text strong>${totalAmount}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />

        <Row justify="center" style={{ marginTop: "30px" }}>
          <Button type="primary">Download Invoice</Button>
        </Row>
      </Card>
    </div>
  );
};

export default Invoice;
