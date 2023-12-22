import React, { useEffect } from 'react';
import { Button, Form, message } from "antd";
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/users';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const onFinish = async(values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);

      dispatch(HideLoading());
      if(response.success) {
        message.success(response.message);

        navigate("/login");
      }else {
        message.error(response.message);
      }
    } catch (error) {
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
      <div className='authentication-form bg-white p-2'>
        <h1 className="text-secondary text-2xl">
          Library-Register
        </h1>
        <hr />
        <Form layout="vertical"
          onFinish={onFinish}
          className='mt-1 p-3'>
          <Form.Item
            label="Name"
            name="name"
            rules ={[
              {
                required:true,
                message: "Please input your name!",
              },
            ]}
          >
            <input type="text" placeholder= "Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"

            rules ={[
              {
                required: true,
                message :"Please input your email!",
              },
            ]}

            >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="phone Number"
            name="phone"
              
            rules ={[

              {
                required:true,
                message:"Please input your phone number!",
              },
            ]}
            >
            <Input type="number" placeholder="phone Number" />
          </Form.Item>


          <Form.Item
            label="Password"
            name="password"

            rules={[
              {
                required:true,
                message:"Please input your password!",
              }
            ]}
          >
            <Input type="password" placeholder="Password" />

          </Form.Item>
          <div className="text-center mt-2 flex flex-col gap-1">

            <Button title="Register"
              type="submit" color="secondary" variant ="outlined" />

            <Link to="/login"
              className="text-primary text-sm underline">Already Have an account ? click Here to Login</Link>
          </div>

        </Form>

      </div>
    </div>

  )
}
export default Register