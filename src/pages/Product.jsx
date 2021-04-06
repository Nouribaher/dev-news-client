import React from "react";
import HeadTable from '../components/HeadTable';
import BodayTable  from '../components/BodayTable';
import "antd/dist/antd.css";

export default function product() {
    return (
      <div className="App">
        <HeadTable />
        <BodayTable />

        </div>
   
    );
  }