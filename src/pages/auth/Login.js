import React from "react";
import Card from '../../components/UI/Card';
import Input from "../../components/UI/Input";
import classes from './Login.module.css';
import LoginForm from "../components/LoginForm";
import { Tabs } from 'antd';
import SignupForm from "../components/SignupForm";

import "antd/dist/antd.css";
const Login =()=>{
    const { TabPane } = Tabs;
    const callback = (key)=> {
        console.log(key);
      }

    return(
        <div className={classes.section}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Login" key="1">
                    <LoginForm />
                </TabPane>
                <TabPane tab="Signup" key="2">
                    <SignupForm />
                </TabPane>
            </Tabs>
                
        </div>
    )
    
}

const InputElement =  React.forwardRef((props,ref)=>{
    return (
                <div className = {classes.input}>
                <label htmlFor={props.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </div>
    )
})
export default Login;