import React, { useState } from "react";
import { Row, Col, Card, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "Project Alpha",
    description: "This is a brief description of Project Alpha.",
  },
  {
    title: "Project Beta",
    description: "This is a brief description of Project Beta.",
  },
  {
    title: "Project Gamma",
    description: "This is a brief description of Project Gamma.",
  },
  {
    title: "Project Delta",
    description: "This is a brief description of Project Delta.",
  },
];

interface Props {}

const Project: React.FC<Props> = ({}) => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ marginBottom: "20px", textAlign: "center" }}>
        My Projects
      </Title>

      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <Card
              title={project.title}
              hoverable
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              actions={[
                <Button type="primary" key="view">
                  View Details
                </Button>,
              ]}
            >
              <Paragraph>{project.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
