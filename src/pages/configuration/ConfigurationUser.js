import React from 'react'
import { Header } from '../../components/Header'
import NavMenu from '../../components/NavMenu'
import { Footer } from '../../components/Footer'

const ConfigurationUser = () => {
  return (
    <div className="flex flex-col w-full h-max bg-white justify-between">
          <Header />
          <NavMenu selectedItem = "menu4"/>
          <Footer />
        </div>
  )
}

export default ConfigurationUser