import React from 'react'
import { Header } from '../components/Header';
import NavMenu from '../components/NavMenu';
import { Footer } from '../components/Footer';

const Configuration = () => {
    return (
        <div className=" min-h-screen  flex flex-col w-full h-max bg-white justify-between">
          <Header />
          <NavMenu selectedItem = "menu4"/>

          
          <Footer />
        </div>
      );
}

export default Configuration