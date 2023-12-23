import { Modal } from 'antd';
import React from 'react'

function BookForm({ open, setOpen }) {
  return (
  <Modal
  title="Add Book"
  open={open}
  onCancel={() => setOpen(false)}
  centered
  width={800}
  footer={null}
  >
      <h1>
        Book Form
      </h1>
  </Modal>
  );
}

export default BookForm;
