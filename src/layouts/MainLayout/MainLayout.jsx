import React from 'react'
import { Header, Footer } from "../../components"
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='grow pt-19 pb-[7.5rem]'>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default MainLayout