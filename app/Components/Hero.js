import React from 'react'

function Hero() {
  return (
      <section className="flex mx-auto max-w-custom pt-24 pb-10 lg:py-6 items-center  sm:px-6  lg:px-4">

          <div
              className=" w-full px-4 sm:mt-12 items-center sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
              <div className="sm:text-center lg:text-left lg:w-2/3">
                  <h1 className="text-4xl tracking-tight max-w-[80%] font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline text-white ">Get Intuition On Things</span>
                      
                      <span className="block xl:inline text-acsent" > Yet to Happen</span>
                  </h1>
                  <p
                      className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                      fugiat veniam occaecat fugiat aliqua.
                  </p>

                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                          <div href="#"
                              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-acsent md:py-4 md:text-lg md:px-10">
                              Get started
                          </div>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-8">
                          <div
                              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                              Live demo
                          </div>
                      </div>
                  </div>
       
              </div>


          <div className=" lg:w-1/3 my-4  flex items-center justify-center">
                  <img className=" w-[75%] invert animate-spin-slow rounded-xl" src="https://raw.githubusercontent.com/0AniketMishra/HexaGon/refs/heads/main/4a1c1d25052123856e0db2b2847cd009-removebg-preview.png" alt=""/>
       
          </div>
          </div>

      </section>
  )
}

export default Hero