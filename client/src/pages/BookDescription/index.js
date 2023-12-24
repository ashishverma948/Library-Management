import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import { GetBookById } from '../../apicalls/books';
import { message } from 'antd';

function BookDescription() {
    const [bookData,setBookData] = React.useState(null);
    const dispatch = useDispatch();
    const {id} = useParams();

    const getBook =async ()=>{
        try{
            dispatch(ShowLoading());
            const response = await GetBookById(id);
            dispatch(HideLoading());

            if(response.success){
                setBookData.apply(response.data);
            }else{
                message.error(response.message);
            }
        } catch(error){
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    useEffect(()=>{
        getBook();
    },[]);
  return (
    <div>
        <h1>BookDescription</h1>
        <h2>Book Id:</h2>
    </div>
  );
}

export default BookDescription;