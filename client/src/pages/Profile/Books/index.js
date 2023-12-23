import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components.Button';
import BookForm from "./BookForm";
import { response } from 'express';
import { GetAllBooks } from '../../../apicalls/books';
import { message } from 'antd';
import { HideLoading, ShowLoading } from '../../../redux/loadersSlice';

function Books() {
  const [formType,setFormType] = useState('add');
  const [selectedBook,setSelectedBook] = useState(null);
  const [openBookForm , setOpenBookForm] = React.userState(false);
     const [books, setBooks] = React.useState([]);
     const dispatch = useDispatch();

     const getbooks = async () => {
      try {
          dispatch(ShowLoading());
          const response = await GetAllBooks();
          dispatch(HideLoading());
          if (response.success){
            setBooks(response.data);
          } else {
            message.error(response.message);
          }
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }


     }

     useEffect(() => {
      
      getbooks()

     }, []);

     const columns = [
      {
        title: "Book",
        dataIndex: "image",
        render : (Image) => <img src={image} alt="book" width="60" height="60" />
      },
      {
        title: "Title",
        dataIndex: "title",
      },
      {
        title: "Category",
        dataIndex: "category",
      },
      {
        title: "Author",
dataIndex: "author",
      },
      {
        title: "Publisher",
        dataIndex: "publisher",
},
{
  title: "Total copies",
  dataIndex: "totalcopies",
},
{
  title: "Available copies",
  dataIndex: "availablecopies",
},
{
  title :"Action",
  dataIndex : "action",
  render : (text,record)=>(
    <div
    className ="flex gap-1">

      <i class="ri-delete-bin-5-line"></i>
<i className="ri-pencil-line"
 onClick ={()=>{
  setFormType("edit");
  setSelectedBook(record);
  setOpenBookForm(true);
 }}
></i>
    </div>
  ),
}
     ];
  return (
    <div>
      <div className = "flex justify-end">
          <Button title='Add Book'
          onClick={() => setOpenBookForm(true)}
          />
      </div>

<Table columns={columns} dataSource={books}  className = 'mt-1'/>

      {openBookForm && (
      <BookForm open={openBookForm} setOpen={setOpenBookForm} 
      reloadBooks = {getbooks}

      formType ={formType}
      selectedBook = {selectedBook}
      setSelectedBook = {setSelectedBook}
      />
    )}
    </div>
  );
}

export default Books;
