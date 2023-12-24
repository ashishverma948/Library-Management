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
       <Row>
        <Col 
            xs = {24}
            sm  ={24}
            md = {12}
            lg = {12}
            xl = {12}
            className = "flex flex-col gap-3"
        >
            <h1 className='text-2xl text-secondary uppercase font-bold mt-2'>
                {bookData?.title0}
            </h1>
            <img src = {bookData.image} alt ="" height = {400} width ={350}/>
            <p>{bookData?.description}</p>
        </Col>
        <Col xs = {24} sm = {24} md = {12} lg = {12} xl = {12}>
            <div className='flex justify-center'>
                <h1 className='text-md'>Author</h1>
                <h1 className='text-md'>{bookData?.author}</h1>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-md'>Publisher</h1>
                <h1 className='text-md'>{bookData?.publisher}</h1>
            </div>

            <div className='flex justify-center'>
                <h1 className='text-md'>PublishedDate</h1>
                <h1 className='text-md'>{bookData?.publishedDate}</h1>
            </div>

            <div className='flex justify-center'>
                <h1 className='text-md'>Available Copies</h1>
                <h1 className='text-md'>{bookData?.availableCopies}</h1>
            </div>
        </Col>
       </Row>
    </div>
  );
}

export default BookDescription;