import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Menu from "../components/Menu";
import NavMenu from "../components/NavMenu";

export const Home = () => {
  const menuData = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Services',
      url: '/services',
      subMenu: [
        {
          label: 'Service 1',
          url: '/services/service1',
        },
        {
          label: 'Service 2',
          url: '/services/service2',
        },
      ],
    },
    // Add more menu items as needed
  ];
  return (
    <div className="flex min-h-screen  flex-col w-full h-max bg-white">
      <Header />
      <NavMenu selectedItem = "menu1"/>
      <Footer />
    </div>
  );
};
