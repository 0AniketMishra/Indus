"use client"
import React, { useState } from 'react'
import Sidebar4 from './Sidebar4'

function Header3() {
    const [sidebar,setSidebar] = useState(false)
  return (
      <header className="p-8 mt-12 lg:mt-0 bg-black/40 backdrop-blur-sm ">
       
          <div className="lg:max-w-6xl lg:mx-auto">
              <div className="flex items-center justify-between">
                  <div onClick={()=>setSidebar(true)}>
                      <h1 className="text-3xl font-bold">Good evening, Stargazer</h1>
                      <p className="text-orange-200/70 mt-2">March 13, 2024 • Moon in Pisces</p>
                  </div>
                  <div className="flex items-center gap-4">
                      {/* <Moon className="w-8 h-8 text-orange-400" /> */}
                      {/* <Sun className="w-8 h-8 text-amber-400" /> */}
                  </div>
              </div>
          </div>
          </header>
  )
}

export default Header3