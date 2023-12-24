import React from 'react'
import { Tabs } from 'antd'
import Books from "./Books";
import Users from './Users';
import Reports from './Reports';
import { useSelector } from 'react-redux';
import BasicDetails from './BasicDetails';
import BorrowedBooks from './BorrowedBooks';
const Tabpane = Tabs.Tabpane;

function Profile() {

  const{user} = useSelector ((state)=> state.users);
  const role = user.role;
  return (
    <div>
      <Tabs defaultActiveKey='1'>
      <Tabpane tab = "General" key = "1">
          <BasicDetails/>
        </Tabpane>
        
        {role==="patron" && (
          <Tabpane tab = "Books Borrowed" key = "2">
          <BorrowedBooks/>
        </Tabpane>
        )}

        {role !=="patron" && (<Tabpane tab = "Books" key = "3">
          <Books/>
        </Tabpane>)}

        { role !=="patron" && (<Tabpane tab="Patrons" key="4">
          <Users role="patron" />
        </Tabpane>)}

        {role==="admin" && (
          <Tabpane tab="Librarians" key="5">
          <Users role="librarian" />
        </Tabpane>
        )}

       {role==="admin" && (
         <Tabpane tab="Admins" key="6">
         <Users role="admin" />
       </Tabpane>
       )}

       {role ==="admin" && (
            <Tabpane tab = "Reports" key ="7">
            <Reports/>
          </Tabpane>
       )}
      </Tabs>
    </div>
  );
}


export default Profile;