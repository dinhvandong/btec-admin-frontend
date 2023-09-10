/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { Icon } from "@iconify/react";
import { Badge, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import logo from '../assets/logo-btec.png';

const itemsNotify = [
  {
    label: (
      <div className="p-4 text-black font-bold text-[14px]">
        You have no Notifications
      </div>
    ),
    key: "0",
  },
];

const itemsMessages = [
  {
    label: (
      <div className="p-4 text-black font-bold text-[14px]">
        You have no Messages
      </div>
    ),
    key: "0",
  },
];

const itemsLang = [
  {
    label: "English (en)",
    key: "0",
  },
  {
    label: "Vietnamese (vi)",
    key: "1",
  },
];

const itemsUser = [
  {
    label: "Thông tin người dùng",
    key: "0",
  },
  {
    label: "Cài đặt bổ sung",
    key: "1",
  },
  {
    label: "Đăng xuất",
    key: "2",
  },
];

export const Header = () => {
  const [lang, setLang] = useState("Vietnamese (vi)");

  const onClickChangeLang = (value) => {
    console.log(value);
    if (value.key == 0) {
      setLang("English (en)");
    }
    if (value.key == 1) {
      setLang("Vietnamese (vi)");
    }
  };

  useEffect(() => {
    console.log("user:", localStorage.getItem("user"));
  }, [lang]);

  const userOnClick = (key) => {
    if (key.key === 2) {
      // userService.logout()
    }
  };
  return (
    <div className="flex flex-row w-full bg-[#FB7C07] h-[80px] items-center justify-start">
      <div className="flex flex-auto flex-row items-center">
      <img
        className="w-[90px] h-[55px] ml-5"
        src={logo}
        alt="btec-logo"
      />
      <div>
        <h3
          style={{ color: "#fff" }}
          className="ml-10 text-xl font-bold text-white"
        >
          CAO ĐẲNG ANH QUỐC BTEC-FPT
        </h3>
      </div>
      </div>
      <div className="flex flex-row gap-8 items-center mr-5">
        <Dropdown
          menu={{
            items: itemsNotify,
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
            <Badge dot>
              <Icon
                icon="clarity:bell-solid"
                color="white"
                width="30"
                height="30"
              />
            </Badge>
          </a>
        </Dropdown>

        <Dropdown
          menu={{
            items: itemsMessages,
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
            <Badge count={20} overflowCount={99}>
              <Icon
                icon="jam:messages-alt-f"
                color="white"
                width="30"
                height="30"
              />
            </Badge>
          </a>
        </Dropdown>

        <Dropdown
          menu={{
            items: itemsLang,
            onClick: onClickChangeLang,
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="w-[200px] cursor-pointer flex flex-row items-center gap-4 text-white font-medium text-[20px]"
          >
            <Icon
              icon="geo:ui-earth-west"
              color="white"
              width="30"
              height="30"
            />
            &nbsp;{lang}
          </a>
        </Dropdown>

        {/* {props.token ? (
          <Dropdown
            menu={{
              items: itemsUser,
              onClick: userOnClick,
            }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="w-max cursor-pointer flex flex-row items-center gap-2 text-white font-medium text-[15px]"
            >
              <Icon
                icon="mingcute:user-4-line"
                color="white"
                width="30"
                height="30"
              />
              {localStorage.getItem("user") !== null
                ? JSON.parse(localStorage.getItem("user"))?.email?.split("@")[0]
                : ""}{" "}
              <Icon
                icon="mdi:chevron-down"
                color="white"
                width="25"
                height="25"
              />
            </a>
          </Dropdown>
        ) : (
          <></>
        )} */}

        {/* <div className="flex flex-row gap-4 items-center cursor-pointer">
    <div className="flex text-white text-[16px] font-bold">
        Thông báo
    </div>
    <img src="/assets/Group20.png" />
</div> */}
      </div>
    </div>
  );
};
