import { Button, Table, Upload } from "antd";
import React, { useState } from "react";
import { FileExcelFilled } from "@ant-design/icons";

const ImportCourse = () => {
  const [fileList, setFileList] = useState([]);
  const handleUpload = (info) => {
    let fileList = [...info.fileList];
    // Limit the number of uploaded files
    fileList = fileList.slice(-5);
    // Update the fileList state
    setFileList(fileList);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  const dataSource = [
    { key: '1', name: 'John Doe', age: 25, address: '123 ABC Street' },
    { key: '2', name: 'Jane Smith', age: 30, address: '456 XYZ Street' },
    // Add more data objects as needed
  ];

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    // Add more columns as needed
  ];
  return (
    <div className="flex min-h-screen flex-col w-full h-full  items-center bg-gray-300 ">
      <div style={{ display:'flex', width:'75%',  flexDirection:'row', justifyContent:'start', marginTop:'20px' }}>
        <Upload
          fileList={fileList}
          onChange={handleUpload}
          multiple
          maxCount={5}
        >
          <Button
            className="bg-green-700 text-white "
            icon={<FileExcelFilled style={{ fontSize: "18px" }} />}
          >
            Import Files
          </Button>
        </Upload>{" "}
        <Button type="primary" className="bg-red-500 ml-4" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>{" "}
      </div>

      <div className="flex flex-col  w-3/4 justify-center mt-10">
      <Table style={{ width:'100%' }} dataSource={dataSource} columns={columns} />;

        </div>

    </div>
  );
};

export default ImportCourse;
