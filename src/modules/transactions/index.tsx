import React from "react";
import { Table, Tag, Space, Typography } from "antd";

const { Title } = Typography;

// Dữ liệu mẫu cho bảng giao dịch
const dataSource = [
  {
    key: "1",
    transactionId: "TX123456",
    customerName: "John Doe",
    amount: "$150",
    status: "Completed",
  },
  {
    key: "2",
    transactionId: "TX123457",
    customerName: "Jane Smith",
    amount: "$250",
    status: "Pending",
  },
  {
    key: "3",
    transactionId: "TX123458",
    customerName: "Michael Brown",
    amount: "$300",
    status: "Failed",
  },
  {
    key: "4",
    transactionId: "TX123459",
    customerName: "Emily Johnson",
    amount: "$400",
    status: "Completed",
  },
];

// Các cột của bảng giao dịch
const columns = [
  {
    title: "Transaction ID",
    dataIndex: "transactionId",
    key: "transactionId",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color =
        status === "Completed"
          ? "green"
          : status === "Pending"
          ? "blue"
          : "red";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>View</a>
        <a>Edit</a>
      </Space>
    ),
  },
];

const Transactions: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Transactions
      </Title>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Transactions;
