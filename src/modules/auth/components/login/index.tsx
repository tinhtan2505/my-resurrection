import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { isAuthenticated, login } from "../../lib/api-service";
import { useNavigate } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = ({}) => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    await login(values.username, values.password);
    if (isAuthenticated()) {
      navigate("/");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold">Welcome back!</h2>
        <h3 className="text-lg mb-6">Log in to Retouch.services</h3>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="UserName"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Type your username address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <div className="flex justify-between items-center mb-3">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="text-red-500" href="">
              Forgot password?
            </a>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-red-500 hover:bg-red-600"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <span>Do not have an account? </span>
          <a className="text-red-500" href="">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
