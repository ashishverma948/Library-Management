import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookForm from "./BookForm";
import { response } from 'express';
import { Button, message } from 'antd';
import { HideLoading, ShowLoading } from '../../../redux/loadersSlice';

import moment from "moment";
import { GetAllUsers } from '../../../apicalls/users';
function Patrons() {
 const [users, setUsers] = React.useState([]);
 const dispatch =useDispatch();
 const getUsers  = async () => {
  try {
    dispatch(ShowLoading());
    const response= await GetAllUsers('patron');
    dispatch(HideLoading());
    if(response.success) {
      setUsers(response.data);
    } else {
      message.error(response.message);
    }
} catch(error) {
  dispatch(HideLoading());
  message.error(error.message);
}
 };

useEffect(() => {
  getUsers();
}, []);
 
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    render: (createdAt) => moment(createdAt).format("DD-MM-YYYY"),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (actions,record) => (
      <div>
        <Button title="Books" varient="outlined" />
      </div>
    ),
  },
]


 return  <div>
    <Table dataSource={users} columns={columns} />
    </div>
  }

export default Patrons;