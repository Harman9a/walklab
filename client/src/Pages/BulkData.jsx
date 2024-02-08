import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const BulkDataCom = () => {
  const [BulkData, setBulkData] = useState([]);

  useEffect(() => {
    getBulkData();
  }, []);

  const getBulkData = () => {
    axios
      .get("http://localhost:5005/getBulkData")
      .then((result) => {
        const dataEntries = result.data.entries;

        if (Array.isArray(dataEntries)) {
          const newData = dataEntries.map((x, index) => {
            const dateObject = new Date(x.createdAt);

            return {
              key: x._id,
              id: index + 1,
              data: x.data,
              my_date: dateObject.toLocaleDateString(),
              my_time: dateObject.toLocaleTimeString(),
            };
          });

          setBulkData(newData);
        } else {
          console.error(
            "Entries property in data received from server is not an array:",
            dataEntries
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching bulk data:", err);
      });
  };

  const columns = [
    { title: "No", dataIndex: "id", key: "id" },
    { title: "Date", dataIndex: "my_date", key: "my_date" },
    { title: "Time", dataIndex: "my_time", key: "my_time" },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
      render: (text) => (
        <textarea
          style={{ width: "1000px", height: "200px" }}
          value={text}
          readOnly
        />
      ),
    },
  ];

  return (
    <div style={{ padding: "1rem " }}>
      <div style={{ paddingBottom: "2rem", textAlign: "center" }}>
        <h2>BULK DATA</h2>
      </div>
      <Table
        dataSource={BulkData}
        columns={columns}
        rowKey="id"
        pagination={true}
      />
    </div>
  );
};

export default BulkDataCom;
