import React from "react";
import { Card, Typography, Tag, Dropdown, Menu, Table, Avatar } from "antd";
import { CheckCircleOutlined, EllipsisOutlined } from "@ant-design/icons";
import "./project.less";

const { Title, Text } = Typography;

interface Props {}

const Project: React.FC<Props> = ({}) => {
  const data = [
    {
      key: "1",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "PENDING",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
    {
      key: "2",
      name: "Social Media Campaign",
      price: "1200 USD / 150 Images",
      deadline: "24 Aug, 2022 (24 hours)",
      status: "FIX REQUESTED",
    },
  ];

  const statusColors = {
    PENDING: "blue",
    "FIX REQUESTED": "red",
    PROCESSING: "orange",
    COMPLETED: "green",
  };

  const columns = [
    {
      title: "Projects",
      dataIndex: "name",
      key: "name",
      className: "column-project",
      render: (text, record) => (
        // <div>
        //   <div>{text}</div>
        //   <div>{record.price}</div>
        // </div>
        <Card bordered={false} className="project-card">
          <div className="flex">
            <div>
              <Avatar
                shape="square"
                size={72}
                // icon="./image-project.png"
                style={{ borderRadius: "8px" }}
              >
                <img src="./image-project.png" />
              </Avatar>
            </div>

            <div className="ml-3">
              <div className="flex text-base">
                <CheckCircleOutlined
                  className="mr-2"
                  style={{
                    color: "#52c41a",
                  }}
                />
                <Title level={5} style={{ margin: 0 }}>
                  Social Media Campaign
                </Title>
              </div>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                1200 USD / 150 images
              </Text>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
      width: 220,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 160,
      render: (status) => (
        <Tag color={statusColors[status]} style={{ fontSize: "10px" }}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      className: "column-action",
      width: 120,
      render: (text, record) => (
        <Dropdown overlay={menu}>
          <EllipsisOutlined style={{ fontSize: "24px" }} />
        </Dropdown>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="1">Edit information</Menu.Item>
      <Menu.Item key="2" danger>
        Delete project
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="project">
      <Table
        className="project-table"
        size="small"
        scroll={{ y: "auto" }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default Project;
