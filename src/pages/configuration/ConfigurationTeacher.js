import React from 'react'
import { Header } from '../../components/Header'
import NavMenu from '../../components/NavMenu'
import { Footer } from '../../components/Footer'
import ImportTeacher from '../../components/ImportTeacher'

const ConfigurationTeacher = () => {
  return (
    <div className="flex flex-col w-full min-h-screen  bg-white">
          <Header />
          <NavMenu selectedItem = "menu4"/>
          <ImportTeacher/>

          <Footer />
        </div>
  )
}

export default ConfigurationTeacher