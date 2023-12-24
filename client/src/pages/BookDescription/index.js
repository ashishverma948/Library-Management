import React from 'react'
import { useParams } from 'react-router-dom';

function BookDescription() {

    const {id} = useParams();
  return (
    <div>
        <h1>BookDescription</h1>
        <h2>Book Id:</h2>
    </div>
  )
}

export default BookDescription;