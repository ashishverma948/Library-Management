import { Button } from 'antd';
import React, { useState } from 'react'
import Button from "../../../components/Button";
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { GetUserById } from '../../../apicalls/users';
import {HideLoading,ShowLoading} from "../../../redux/loadersSlice";
import { IssueBook } from '../../../apicalls/issues';

function IssueForm(
    {
        open = false,
        setOpen,
        selectedBook,
        setSelectedBook,
        getData,
    }) {
      const {user} = useSelector(state => state.users);
      const [valiadated,setValidated] = React.useState(false);
      const [errorMessage,setErrorMessage] = React.useState("");
      const [patronData,setPatronData] = useState(null);
      const [patronId,setPatronId] = React.useState("");
      const [returnDate,setReturnDate] = React.useState("");
      const dispatch = useDispatch();

      const validate = async()=>{
        try{
          dispatch(ShowLoading());
          
          const response = await GetUserById(patronId);
          if(response.success){
            if(response.data.role !=="patron"){
              setValidated(false);
            setErrorMessage("");
            dispatch(HideLoading());
            return;
            }else{
              setPatronData(response.data);
              setValidated(true);
            setErrorMessage("");
            }
          }
          else{
            setValiDated(false);
            setErrorMessage(response.Message);
          }
          dispatch(HideLoading());
        } catch(error){
          dispatch(HideLoading());
          setValidated(false);
          setErrorMessage(error.message);
        }
      };
      
      const onIssue = async() =>{
        try{
          dispatch(ShowLoading());
          const response = await IssueBook({
            book : selectedBook._id,
            user : patronData._id,
            issueDate : new Date(),
            returnDate,
            rent: moment(returnDate).diff(moment(), "days")*selectedBook ?.rentPerDay,
            fine:0,
            issuedBy : user._id,
          });
          dispatch(HideLoading());
          if(response.success){
            message.success(response.message);
            getData();
            setPatronId("");
            setReturnDate("");
            setValidated(false);
            setErrorMessage("");
            setSelectedBook(null);
            setOpen(false);
          }
          else{
           message.error(response.message);
          }
        } catch(error){
          dispatch(HideLoading());
          message.error(error.message);
        }
      }
  return (
    <Modal
    title = ""
     open = {open}
     onCancel = {() => setOpen(false)}
     footer  ={null}
    >
    <div className = "flex flex-col gap-2 items-center">
      <h1 className = "text-secondary font-bold text-xl uppercase">
        Issue New Book
      </h1>
      
      <input
      type ="text"
      value = {patronId}
      onChange = {(e) => setPatronId(e.target.value)}
      placeholder="Patron Id"
      />

      <input
      type = "text"
      value = {returnId}
      onChange = {(e) => setReturnDate(e.target.value)}
      placeholder = "Return Date"
      min = {moment().format("YYYY-MM-DD")}
      />

      {errorMessage && <span className = "error-message">{errorMessage}</span>}

      {validated && (
          <div className="bg-secondary p-1 text-white">
            <h1 className="text-sm">Patron : {patronData.name}</h1>
            <h1>
              Number Of Days : {moment(returnDate).diff(moment(), "days")}
            </h1>
            <h1>Rent per Day : {selectedBook.rentPerDay}</h1>
            <h1>
              Rent :{" "}
              {moment(returnDate).diff(moment(), "days") *
                selectedBook?.rentPerDay}
            </h1>
          </div>
        )}


      <div className = "flex justify-end-gap-2 w-100">
        <Button title = "Cancel"
        variant = "outlined"
        onClick ={()=> setOpen(false)}

        />
        <Button title = "Validate"
        disabled = {patronId ==="" || returnDate ===""}
        />
        {validated && (
          <Button title = "Issue"
          onClick = {onIssue}
          disabled = {patronId ==="" || returnDate ===""}
          />
        )}

      </div>
    </div>

    </Modal>
  );
}

export default IssueForm;
