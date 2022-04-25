import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { register } from "../../api/user.api";
const SignupForm = ()=>{
    const onFinish = async (values) => {
        console.log('Success:', values);
        let res = await register(values)
        console.log(res)
        if (res.success){
            window.location.href= "/mainPage"
        }
        else{
            notification.error({
                message: 'Error',
                description:
                  `Some error occured please try again later`,
              });
        }
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
            <Form
                name="signup"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
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
export default SignupForm;