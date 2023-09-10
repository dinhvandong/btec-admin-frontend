/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavMenu(props) {

  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const handleServicesMenuOpen = () => {
    setServicesMenuOpen(true);
  };

  const handleServicesMenuClose = () => {
    setServicesMenuOpen(false);
  };


  
  const [isConfigsMenuOpen, setConfigsMenuOpen] = useState(false);
  const handleConfigsMenuOpen = () => {
    setConfigsMenuOpen(true);
  };

  const handleConfigsMenuClose = () => {
    setConfigsMenuOpen(false);
  };


  return (
    <nav className="bg-gray-100">
      {/* Navigation items */}
      <ul className="flex h-[50px] mr-40 p-5 items-center justify-end text-xl">
        <li className= {props.selectedItem==='menu1'? "mr-5 border-2 p-1 text-orange-500 border-orange-500 rounded-xl":"mr-5 border-0 p-1 text-gray-500 "}>
          <a href="#" className=" hover:text-gray-500">
          <Link to={`/home`}>Xem bảng điểm</Link>
            </a>
        </li>
        <li  className= {props.selectedItem==='menu2'? "mr-5 border-2 p-1 text-orange-500 border-orange-500 rounded-xl":"mr-5 border-0 p-1 text-gray-500"}>
          <a href="#" className=" hover:text-gray-500">
          <Link to={`/crossGrade`}>Chấm chéo</Link>

            </a>
        </li>
        <li className= {props.selectedItem==='menu3'? "mr-5 border-2 p-1 text-orange-500 border-orange-500 rounded-xl":"mr-5 border-0 p-1 text-gray-500"}>
          <a href="#" className=" hover:text-gray-500">
          <Link to={`/listGrade`}>Danh sách lớp</Link>

            </a>
        </li>
        {/* <li  className= {props.selectedItem==='menu4'? "mr-5 border-2 p-1 text-orange-500 border-orange-500 rounded-xl":"mr-5 border-0 p-1 text-gray-500"}>
          <a href="#" className=" hover:text-gray-500">
          <Link to={`/configuration`}> Cấu hình</Link>

           </a>
        </li> */}
         <li
          className={props.selectedItem ==='menu4'? `mr-5  border-2 p-1 text-orange-500 border-orange-500 rounded-xl relative ${isConfigsMenuOpen ? 'open' : ''}`: `mr-5  text-gray-500 border-0 p-1 relative ${isConfigsMenuOpen ? 'open' : ''}`}
          onMouseEnter={handleConfigsMenuOpen}
          onMouseLeave={handleConfigsMenuClose}
        >
          <a href="#" className="hover:text-black-500">Cấu hình</a>
          {/* Submenu */}
          <ul className={` z-10 absolute left-0 mt-0 w-[200px] bg-white border-2 border-orange-500 ${isConfigsMenuOpen ? 'block' : 'hidden'}`} onMouseEnter={handleConfigsMenuOpen} onMouseLeave={handleConfigsMenuClose}>
            <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500 ">
            <Link to={`/configuration/users`}> Tài khoản</Link>              
            </a></li>
            <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500">
            <Link to={`/configuration/courses`}> Khóa học</Link>              
              </a></li>
              <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500">
            <Link to={`/configuration/assign-teacher`}>Assign Teacher</Link>              
              </a></li>
              <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500">
            <Link to={`/configuration/assign-student`}> Assign Student</Link>              
              </a></li>
              <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500">
            <Link to={`/configuration/assignments`}> Assignments</Link>              
              </a></li>
            {/* Add more submenu items as needed */}
          </ul>
        </li>
        <li
          className={props.selectedItem ==='menu5'? `mr-5  border-2 p-1 text-orange-500 border-orange-500 rounded-xl relative ${isServicesMenuOpen ? 'open' : ''}`: `mr-5  text-gray-500 border-0 p-1 relative ${isServicesMenuOpen ? 'open' : ''}`}
          onMouseEnter={handleServicesMenuOpen}
          onMouseLeave={handleServicesMenuClose}
        >
          <a href="#" className="hover:text-black-500">Tài khoản</a>
          {/* Submenu */}
          <ul className={` z-0 absolute left-0 mt-0 w-[200px] bg-white border-2 border-orange-500 ${isServicesMenuOpen ? 'block' : 'hidden'}`} onMouseEnter={handleServicesMenuOpen} onMouseLeave={handleServicesMenuClose}>
            <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500 ">Thay đổi thông tin</a></li>
            <li><a href="#" className="block px-4 py-2 text-orange-500 hover:text-white-500 hover:bg-gray-500">Cấu hình hệ thống</a></li>
            {/* Add more submenu items as needed */}
          </ul>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
}

export default NavMenu;