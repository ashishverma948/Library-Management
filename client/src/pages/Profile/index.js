import React from 'react'
import { Tabs } from 'antd'
import Books from "./Books";
import Users from './Users';
const Tabpane = Tabs.Tabpane;

function Profile() {
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <Tabpane tab="Books" key="1">
          <Books />
        </Tabpane>
        <Tabpane tab="Patrons" key="2">
          <Users role="patron" />
        </Tabpane>
        <Tabpane tab="Librarians" key="3">
          <Users role="librarian" />
        </Tabpane>
        <Tabpane tab="Admins" key="4">
          <Users role="admin" />
        </Tabpane>
      </Tabs>
    </div>
  );
}

export default Profile;