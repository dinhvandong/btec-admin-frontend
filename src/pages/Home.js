import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Menu from "../components/Menu";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Menu data={menuData} />
      <Footer />
    </div>
  );
};
