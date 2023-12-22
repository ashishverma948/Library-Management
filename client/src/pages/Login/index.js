import React, { useEffect } from 'react';
import { Button, Form, message } from "antd";
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../apicalls/users';
import { response } from 'express';

import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await LoginUser(values);

      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        message.error(response.message);
      }
    } catch (error) {

      // add dispatch
      dispatch(HideLoading());

      message.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);


  return (
    <div className='h-screen bg-primary flex item-center justify-center'>
      <div className='authentication-form bg-white p-3 rounded'>
        <h1 className="text-secondary text-2xl">
          Library - Login
        </h1>
        <hr />
        <Form layout="vertical"
          onFinish={onFinish}
          className='mt-1 p-3'>
          <Form.Item
            label="Email"
            name="email"
            rules = {[
              {
                required :true,
                message: "Please input your email",
              },
            ]}
            >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"

            rules ={[
              {
                required: true,
                message :" Please input your password !",
              },
            ]}
          >
            <Input type="password" placeholder="Password" />

          </Form.Item>
          <Button title="Login"
            type="submit" color="secondary" varient="outlined" />
          <div className="text-center mt-2 flex flex-col gap-1">
            <Button title="Login" type="submit" />
            <Link to="/register"
              className="text-primary text-sm underline">Don't Have an account ? click Here to register</Link>
          </div>

        </Form>



      </div>
    </div>

  )
}
export default Login