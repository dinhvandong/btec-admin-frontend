import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Button, Checkbox, Form, Input } from "antd";

export const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="flex w-full flex-col  min-h-screen justify-between items-center">
      <Header  />
      <div className="flex flex-col w-[450px] rounded-lg border-orange-600 border-2 p-5 h-[400px] items-center justify-center text-xl font-bold text-black">
        
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="bg-orange-600 w-[200px]" type="primary" htmlType="submit">
              Đăng nhập
            </Button>
            <div className=" button hover:bg-gray-300 justify-center items-center bg-blue-500 rounded-lg flex flex-row w-[200px] h-[40px] mt-5 text-white" type="primary" htmlType="submit">
             <img className="w-[25px] h-[25px]" src="assets/icons/google-icon.png" alt="Login bằng Google"/>
               Google
            </div>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
};
