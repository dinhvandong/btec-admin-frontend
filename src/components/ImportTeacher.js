import React, { useContext, useEffect, useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select, Image, Space, Table, notification, Upload } from 'antd';
import { FileExcelFilled } from "@ant-design/icons";
import * as XLSX from 'xlsx';

const ImportTeacher = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [preview, setPreview] = useState([])

  const [importedUsers, setImportedUsers] = useState([])

  const [changePassword, setVisibleChangePassword] = useState(false)
  const [confirmRemove, setVisibleConfirmRemove] = useState(false)
    const [currentUser, setCurrentUser] = useState({
        id: "",
        areaID: "",
        userName: "",
        roles: "",
        departmentID: ""
    })

  useEffect(() => {
    getImportedUser()

  }, [])
  const importAccount = () => {
    preview.forEach(element => {
      // userService.importUserAll(element).then(res => {
      //     if (res.data) {
      //     }
      // }
      // )
    });
    notification.success({ message: "Insert thành công !!" })
    getImportedUser()

  }
  const getImportedUser = () => {
    // userService.getImportedUser().then(res => {

    //     setImportedUsers(res.data)
    // }

    // )
  }


  const handleFileUpload = (file) => {
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
        const lastSpaceIndex = row[2].lastIndexOf(' ');
        rowData["firstName"] = row[2].substring(lastSpaceIndex + 1);
        rowData["lastName"] = row[2].substring(0, lastSpaceIndex);
        rowData["password"] = 'A123456a@'
        rowData['username'] = row[1]
        rowData['email'] = row[5]
        return rowData;
      });
      const jsonString = JSON.stringify(json, null, 2);
      setImportedUsers(json)

    };
    reader.readAsArrayBuffer(file);
  };

  const onChangePassword = (userName, id) => {
    setVisibleChangePassword(true)
    setCurrentUser((prev) => ({ ...prev, id: id, userName: userName }))

  }
  const onConfirmRemove = (userName, id) => {
    setVisibleConfirmRemove(true)
    setCurrentUser((prev) => ({ ...prev, id: id, userName: userName }))

  }


  const columnUserAllImported = [
    {
      title: 'STT',
      align: "center",
      render: (id, record, index) => { ++index; return <div className="text-center">{index}</div> },
    },

    {
      title: 'Username',
      dataIndex: 'username',
      align: "center",
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: "center",
      key: 'email',
    },
    {
      title: 'Firstname',
      dataIndex: 'firstName',
      align: "center",
      key: 'firstName',
    },
    {
      title: 'Lastname',
      dataIndex: 'lastName',
      align: "center",
      key: 'lastName',
    },


    {
      title: 'Edit',
      dataIndex: 'edit',
      align: "center",
      key: 'edit',
      render: (_, record) => (
        <Space size="middle">
          <Button style={{ height: "34px", background: "#4DB050", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }} onClick={() => onChangePassword(record.username, record.id)} className="">Reset Password</Button>
          <Button style={{ height: "34px", background: "red", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }} onClick={() => onConfirmRemove(record.username, record.id)}>Remove</Button>
        </Space>
      ),
    },
  ]
  return (
    <div className="flex flex-col w-full bg-[#D9D9D9] py-10">
      <div className="flex flex-row w-full min-h-screen bg-[#D9D9D9] px-10 gap-2">
        <div className="flex flex-col w-full bg-[#D9D9D9] gap-y-5">
          <div className="flex flex-row gap-5">
            <Upload
              accept=".xlsx, .xls"
              maxCount={1}
              beforeUpload={(file) => {
                handleFileUpload(file);
                return false; // Prevent default upload behavior
              }}
            >
              <Button icon={<FileExcelFilled style={{ fontSize: "18px" }} />} style={{ width: "120px", height: "30px", background: "#FB7C07", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                
                 IMPORT
              </Button>
            </Upload>
            <div className="flex">
              <Button loading={isLoading} onClick={importAccount} htmlType="submit" style={{ width: "100px", height: "30px", background: "#45a049", borderRadius: "20", color: "#FFFFFF", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>
                <div className="justify-center flex flex-row gap-x-1 text-sm">Submit</div>
              </Button>
            </div>
          </div>

          <div className="flex w-full h-max text-[12px] items-center font-bold uppercase flex-row gap-x-6">
            Xem trước

          </div>
          <div className="tableCustom">
            <Table
              className="" columns={columnUserAllImported}
              dataSource={importedUsers}
              pagination={false}
              bordered
            // scroll={{ y: 400, x:false }}
            />
          </div>

        </div>
      </div>



    </div>
  )
}

export default ImportTeacher