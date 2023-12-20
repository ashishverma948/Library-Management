import React from 'react';
import {Button, Form} from "antd";
function Register() {
  return (
    <div className='h-screen bg-primary flex item-center justify-center'>
      <div className='authentication-form bg-white p-2'>
<Form layout="vertical"
onFinish={onFinish}
 >
<Form.Item
label ="Email"
name="email"
>
  <input type="text" placeholder='Name'/>
</Form.Item>
<Form.Item

label="Name"
name="email">
  <Input type="email" placeholder="Email" />
</Form.Item>

<Form.Item
label="Password"
name="password"
>
  <Input type="password" placeholder="Password" />

</Form.Item>
<Button title="Register" 
type ="submit" color="secondary" varient="outlined"/>
</Form>



      </div>
    </div>
  )
}

export default Register