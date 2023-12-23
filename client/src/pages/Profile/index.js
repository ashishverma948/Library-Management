import React from 'react'
import { Tabs } from 'antd'
import Books from "./Books";
import Users from "./Users";
const Tabpane = Tabs.Tabpane;

function Profile() {
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <Tabpane tab="Books" key="1">
          <Books />
        </Tabpane>
        <Tabpane tab="Users" key="2">
          <Users />
        </Tabpane>
      </Tabs>
    </div>
  );
}

export default Profile;