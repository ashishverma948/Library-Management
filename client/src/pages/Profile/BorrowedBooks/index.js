<<<<<<< Updated upstream
import { Button, Modal, message } from 'antd';
import React, { useEffect } from 'react'
import { HideLoading, ShowLoading } from '../../../redux/loadersSlice';
import { GetIssues } from '../../../apicalls/issues';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import Button from "../../../components/Button";


function IssuedBooks() {

  const {user} = useSelector((state) => state.users);
    const [IssuedBooks,setIssuedBooks] = React.useState([]);
    const dispatch = useDispatch();
    const getIssues = async () => {
      try {
        dispatch(ShowLoading());
        const response = await GetIssues({
          user : user._id,
        });
        dispatch(HideLoading());
        if (response.success) {
            setIssuedBooks(response.data);
        }
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }
    };

    const columns = [
        {
          title: "Id",
          dataIndex: "_id",
         
        },
        {
            title :"Book",
            dataindex :"issueDate",
            render : (book) => book.title,
        },
        {
          title: "Issued On",
          dataIndex: "issueDate",
          render: (issueDate) => moment(issueDate).format("DD-MM-YYYY hh:mm A"),
        },
        {
          title: "Return Date (Due Date)",
          dataIndex: "returnDate",
          render: (dueDate) => moment(dueDate).format("DD-MM-YYYY hh:mm A"),
        },
        {
          title: "Amount",
          dataIndex: "rent",
          render: (rent, record) => (
            <div className="flex flex-col">
              <span>Rent : {record.rent}</span>
              <span className="text-xs text-gray-500">
                Fine : {record.fine || 0}
              </span>
            </div>
          ),
        },
        {
          title: "Returned On",
          dataIndex: "returnedDate",
          render: (returnedDate) => {
            if (returnedDate) {
              return moment(returnedDate).format("DD-MM-YYYY hh:mm A");
            } else {
              return "Not Returned Yet";
            }
          },
        },
        
      ];
  
    useEffect(()=> {
      getIssues();
    },[]);

  return (
    

        <Table columns = {columns} dataSource = {IssuedBooks}/>
  );
=======
import React, { useEffect } from "react";
import { message, Modal, Table } from "antd";
import { GetIssues } from "../../../apicalls/issues";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "../../../components/Button";

function IssuedBooks() {
  const {user} = useSelector((state) => state.users);
  const [issuedBooks, setIssuedBooks] = React.useState([]);
  const dispatch = useDispatch();
  const getIssues = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetIssues({
        user: user._id,
      });
      dispatch(HideLoading());
      if (response.success) {
        setIssuedBooks(response.data);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getIssues();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Book",
      dataIndex: "book",
      render: (book) => book.title,
    },
    {
      title: "Issued On",
      dataIndex: "issueDate",
      render: (issueDate) => moment(issueDate).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Return Date (Due Date)",
      dataIndex: "returnDate",
      render: (dueDate) => moment(dueDate).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Rent",
      dataIndex: "rent", 
    },
    {
      title: "Fine",
      dataIndex: "fine",
    },
    {
      title: "Returned On",
      dataIndex: "returnedDate",
      render: (returnedDate) => {
        if (returnedDate) {
          return moment(returnedDate).format("DD-MM-YYYY hh:mm A");
        } else {
          return "Not Returned Yet";
        }
      },
    },
  ];
  return <Table columns={columns} dataSource={issuedBooks} />;
>>>>>>> Stashed changes
}

export default IssuedBooks;
