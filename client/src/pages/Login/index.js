import React from 'react';
import {Button, Form, message} from "antd";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { LoginUser } from '../../apicalls/users';
import { response } from 'express';
function Login() {

  const onFinish = async(values) =>{
    try {
      const response = await LoginUser(values);
      if (response.success){
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className='h-screen bg-primary flex item-center justify-center'>
      <div className='authentication-form bg-white p-2'>
   <h1 className="text-secondary text-2xl">
        Libray Login
        </h1>
        <hr />
<Form layout="vertical"
onFinish={onFinish}
 className='mt-1 p-3'>
<Form.Item
label="Email"
name="email">
  <Input type="email" placeholder="Email" />
</Form.Item>

<Form.Item
label="Password"
name="password"
>
  <Input type="password" placeholder="Password" />

</Form.Item>
<Button title="Login" 
type ="submit" color="secondary" varient="outlined"/>
<div className="text-center mt-2 flex flex-col gap-1">
  <Button title="Login" type="submit" />
  <Link to="/register"
  className="text-primary text-sm underline">Don't Have an account ? click Here to register</Link>
</div>

</Form>



      </div>
    </div>
  
  )}
export default Login