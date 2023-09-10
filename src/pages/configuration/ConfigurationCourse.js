import React from 'react'
import NavMenu from '../../components/NavMenu'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import ImportCourse from '../../components/ImportCourse'

const ConfigurationCourse = () => {
  return (
    <div className="flex z-0 min-h-screen  flex-col w-full h-full bg-white">
    <Header />
    <NavMenu selectedItem = "menu4"/>
    <ImportCourse/>
    <Footer />
  </div>
  )
}

export default ConfigurationCourse