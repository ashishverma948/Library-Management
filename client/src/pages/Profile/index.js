import React from 'react'
import { Tabs } from 'antd'
import Books from "./Books";
import Patrons from './Patrons';
const Tabpane = Tabs.Tabpane;

function Profile() {
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <Tabpane tab="Books" key="1">
          <Books />
        </Tabpane>
        <Tabpane tab="Patrons" key="2">
          <Patrons />
        </Tabpane>
      </Tabs>
    </div>
  );
}

export default Profile;