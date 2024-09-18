import React from "react";
import { Button, Typography, Row, Col, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Row justify="center" style={styles.heroSection}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={1} style={styles.title}>
            Welcome to <br /> NQT RESURRECTTION App
          </Title>
          <Text style={styles.subtitle}>
            Discover the best features, stay productive, and get things done
            with ease!
          </Text>
          <div style={styles.buttonContainer}>
            <Button type="primary" size="large" style={styles.button}>
              Get Started <ArrowRightOutlined />
            </Button>
          </div>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center" style={styles.featureSection}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card title="Feature 1" bordered={false} style={styles.card}>
            <p>Explore this amazing feature that helps you organize better.</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card title="Feature 2" bordered={false} style={styles.card}>
            <p>Save time with automated processes that streamline your work.</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card title="Feature 3" bordered={false} style={styles.card}>
            <p>Collaborate easily with your team and improve productivity.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 20px",
    backgroundColor: "#f0f2f5",
  },
  heroSection: {
    textAlign: "center" as "center",
    marginBottom: "50px",
  },
  title: {
    color: "#4096ff",
    fontWeight: 700,
    fontSize: "3rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "20px",
    display: "block",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    fontSize: "1rem",
    padding: "0 40px",
  },
  featureSection: {
    marginTop: "50px",
  },
  card: {
    textAlign: "center" as "center",
    borderRadius: "8px",
  },
};

export default HomePage;
