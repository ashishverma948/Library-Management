import React from 'react';
import {Button, Form} from "antd";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function Login() {
  const onFinish = (values) =>{
    console.log("Success",values);
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
  <Link to="/register"
  className="text-primary text-sm underline">Don't Have an account ? click Here to register</Link>
</div>

</Form>



      </div>
    </div>
  
  )}
export default Login