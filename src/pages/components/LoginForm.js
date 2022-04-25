import React from "react";
import { Form, Input, Button, Checkbox,notification } from 'antd';
import {login} from '../../api/user.api'
const LoginForm = ()=>{
    const onFinish = async(values) => {
        let res = await login(values)
        if (res.success){
            window.location.href= "/mainPage"
        }
        else{
            console.log("res ::::",res)
            notification.error({
                message: 'Error',
                description:
                  `User Not found`,
              });
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
            <Form
                name="login"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default LoginForm;