import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { HeaderTable } from '../components/HeaderTable';
import { PackageTracking } from '../components/PackageTracking';



const fetchData= async () => {
  const { data } = await axios.get(
    "https://my.api.mockaroo.com/orders.json?key=e49e6840"
  );
  return { data };
};

const { Search } = Input;

export default function App() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, newData } = PackageTracking({
    searchVal,
    retrieve: fetchData
  });

  return (
    <div>
      <section className="SR" >
      <Search  onChange={(item) => setSearchVal(item.target.value) }  enterButton  placeholder="Search about YRC"/>
      </section>
     <section >
     <Table className="Lo"  rowKey="id"  dataSource={filteredData}   columns={HeaderTable}  loading={newData} pagination={false} />
     </section>
    </div>
  );
}

