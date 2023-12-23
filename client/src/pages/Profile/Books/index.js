import React from 'react';
import Button from '../../../components.Button';

function Books() {
  const [openBookForm , setOpenBookForm] = React.userState(false);
  return (
    <div>
      <div className = "flex justify-end">
          <Button title='Add Book'
          onClick={() => setOpenBookForm(true)}
          />
      </div>


      {openBookForm && (
      <BookForm open={openBookForm} setOpen={setOpenBookForm} />
    )}
    </div>
  );
}

export default Books;
