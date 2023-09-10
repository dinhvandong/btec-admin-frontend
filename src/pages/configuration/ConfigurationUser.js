import React from 'react'
import { Header } from '../../components/Header'
import NavMenu from '../../components/NavMenu'
import { Footer } from '../../components/Footer'
import ImportUser from '../../components/ImportUser'

const ConfigurationUser = () => {
  return (
    <div className="flex flex-col w-full min-h-screen  bg-white">
          <Header />
          <NavMenu selectedItem = "menu4"/>
          <ImportUser/>

          <Footer />
        </div>
  )
}

export default ConfigurationUser