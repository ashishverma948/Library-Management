import React from 'react'

function IssueForm(
    {
        open = false,
        setOpen,
        selectedBook,
        setSelectedBook,
    }
) {
  return (
    <Modal
    title = "Issue Form"
     open = {open}
     onCancel = {() => setOpen(false)}
     footer  ={null}
    >
    <div>
      IssueForm
    </div>
    </Modal>
  )
}

export default IssueForm
