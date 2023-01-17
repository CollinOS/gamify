import React from "react"
import Navbar from "./Navbar"
import Footer from "./footer"

const Layout = ({children}) => {
  return(
    <div className="bg-gray-800">
      <main className="flex flex-col justify-center px-8 bg-gray-800">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
    
  )
}

export default Layout