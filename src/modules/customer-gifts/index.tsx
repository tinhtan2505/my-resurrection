import React from "react";
import { Card, Row, Col, Typography, Button, List } from "antd";

const { Title, Paragraph } = Typography;

const gifts = [
  {
    title: "Gift 1",
    description: "A beautiful gift for loyal customers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Gift 2",
    description: "Exclusive gift for VIP customers.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Gift 3",
    description: "Special reward for premium members.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Gift 4",
    description: "Limited edition gift for top customers.",
    image: "https://via.placeholder.com/150",
  },
];

const CustomerGifts: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Customer Gifts
      </Title>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
        dataSource={gifts}
        renderItem={(gift) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt={gift.title} src={gift.image} />}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Card.Meta
                title={gift.title}
                description={gift.description}
                style={{ textAlign: "center" }}
              />
              <Button
                type="primary"
                style={{ marginTop: "10px", width: "100%" }}
              >
                Claim Gift
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CustomerGifts;
