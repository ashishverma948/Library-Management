<<<<<<< Updated upstream
import { Button, Modal, message } from 'antd';
import React, { useEffect } from 'react'
import { HideLoading, ShowLoading } from '../../../redux/loadersSlice';
import { GetIssues } from '../../../apicalls/issues';
import { useDispatch } from 'react-redux';

function IssuedBooks({setShowIssuedBooks,setShowIssuedBooks,selectedUser}) {

    const [IssuedBooks,setIssuedBooks] = React.useState([]);
    const dispatch = useDispatch();
    const getIssues = async () => {
      try {
        dispatch(ShowLoading());
        const response = await GetIssues({
          user : selectedUser._id,
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
     <Modal
     open = {setShowIssuedBooks}
     onCancel={()=> setShowIssuedBooks(false)}
     footer = {null}
     width = {1400}
     >
        <h1
        className="text-secondary mb-1 text-xl text-center font-bold uppercase"
        >
            {selectedUser.name}'s Issued Books
        </h1>

        <Table columns = {columns} dataSource = {IssuedBooks}/>
     </Modal>
=======
import React, { useEffect } from "react";
import { message, Modal, Table } from "antd";
import { GetIssues } from "../../../apicalls/issues";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";
import { useDispatch } from "react-redux";
import moment from "moment";
import Button from "../../../components/Button";

function IssuedBooks({ showIssuedBooks, setShowIssuedBooks, selectedUser }) {
  const [issuedBooks, setIssuedBooks] = React.useState([]);
  const dispatch = useDispatch();
  const getIssues = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetIssues({
        user: selectedUser._id,
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
  return (
    <Modal
      open={showIssuedBooks}
   
      onCancel={() => setShowIssuedBooks(false)}
      footer={null}
      width={1400}
    >
      <h1 className="text-secondary mb-1 text-xl text-center font-bold uppercase">
        {selectedUser.name}'s Issued Books
      </h1>

        <Table columns={columns} dataSource={issuedBooks} />
    </Modal>
>>>>>>> Stashed changes
  );
}

export default IssuedBooks;
