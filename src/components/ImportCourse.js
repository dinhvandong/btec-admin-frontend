import React, { useContext, useEffect, useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select, Image, Space, Table, notification, Upload } from 'antd';
import { FileExcelFilled } from "@ant-design/icons";

import * as XLSX from 'xlsx';

const ImportCourse = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [previewCourse, setPreviewCourse] = useState([])

  const [importedCourse, setImportedCourse] = useState([])

  const [currentCourse, setCurrentCourse] = useState({
    fullname: "",
    id: "",
    shortname: ""
  })

  const handleCourseFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: '',
        raw: false,
      });
      const headers = jsonData.shift()
      const json = jsonData.map((row) => {
        const rowData = {};
        rowData["shortname"] = row[1] + "_" + row[2]
        rowData["fullname"] = row[1] + "_" + row[3]
        rowData["categoryId"] = 1;
        return rowData;
      });
      const jsonString = JSON.stringify(json, null, 2);
      setImportedCourse(json)

    };
    reader.readAsArrayBuffer(file);
  };


  const getImportCourse = () => {
    previewCourse.forEach(element => {
      // courseService.importCourse(element).then(res => {
      //     if (res.status == 200) {
      //         getImportedCourse()
      //     }
      // }
      // )
    })

  }
  const getImportedCourse = () => {
    // courseService.findAllCourse().then(res => {
    //     setImportedCourse(res.data)
    // }
    // )
  }




  const importedCourseAll = [
    {
      title: 'STT',
      align: "center",
      render: (id, record, index) => { ++index; return <div className="text-center">{index}</div> },
    },
    // {
    //     title: 'SemesterName',
    //     dataIndex: 'semesterName',
    //     align: "center",
    //     key: 'userName',
    // },
    {
      title: 'ShortName',
      dataIndex: 'shortname',
      align: "center",
      key: 'shortname',
      render: (index) => { return <div className="text-center cursor-pointer">{index}</div> },
      // onCell: (record, rowIndex) => {

      //   return {
      //     onClick: (ev) => {
      //       setViewConfig(false)
      //       setCourseClick((prev) => ({ ...prev, id: record.id, isCourseClick: true }));
      //       getCourseById(record.id)

      //     },
      //   };



      // },

    },
    {
      title: 'Fullname',
      dataIndex: 'fullname',
      align: "center",
      key: 'fullname',
    },
    {
      title: 'Function',
      dataIndex: '',
      align: "center",
      key: '',
      // render: (_, record) => (
      //   <Space size="middle">
      //     <Button style={{ height: "34px", background: "#45a049", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}
      //       onClick={() => {
      //         setViewConfig(false)
      //         setCourseClick((prev) => ({ ...prev, id: record.id, isCourseClick: true }));
      //         getCourseById(record.id)
      //       }
      //       }>View Users List</Button>
      //     <Button style={{ height: "34px", background: "#45a049", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}
      //       onClick={() => onViewAssignmentClick(record.id)}>View Assignments</Button>
      //     <Button style={{ height: "34px", background: "red", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}
      //       onClick={() => onConfirmRemoveCourse(record.fullname, record.id)}>Remove</Button>
      //   </Space>
      // ),
    },

  ]
  const dataSource = [
    { key: '1', name: 'John Doe', age: 25, address: '123 ABC Street' },
    { key: '2', name: 'Jane Smith', age: 30, address: '456 XYZ Street' },
    // Add more data objects as needed
  ];

  return (
    <div className="flex flex-col w-full bg-[#D9D9D9] py-10">
      <div className="flex flex-row w-full min-h-screen bg-[#D9D9D9] px-10 gap-2">
        <div className="flex flex-col w-full bg-[#D9D9D9]  gap-y-5 ">

          <div className="flex flex-row gap-x-5">
            <Upload
              accept=".xlsx, .xls"
              maxCount={1}
              beforeUpload={(file) => {
                handleCourseFileUpload(file);
                return false; // Prevent default upload behavior
              }}
            >
              <Button icon={<FileExcelFilled style={{ fontSize: "18px" }} />} style={{ width: "120px", height: "30px", background: "#FB7C07", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                 IMPORT
              </Button>
            </Upload>
            <div className="flex">
              <Button onClick={getImportCourse} htmlType="submit" style={{ width: "100px", height: "30px", background: "#45a049", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                <div className="justify-center flex flex-row gap-x-1">Submit</div>
              </Button>
            </div>
          </div>

          <div className="tableCustom">
            <Table
              className="" columns={importedCourseAll}
              dataSource={importedCourse}
              pagination={false}
              bordered
            // scroll={{ y: 400, x:false }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImportCourse;
