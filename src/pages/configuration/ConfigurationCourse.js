import React from 'react'
import NavMenu from '../../components/NavMenu'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

const ConfigurationCourse = () => {
  return (
    <div className="flex flex-col w-full h-max bg-white justify-between">
    <Header />
    <NavMenu selectedItem = "menu4"/>
    <Footer />
  </div>
  )
}

export default ConfigurationCourse