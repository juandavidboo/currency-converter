//import { useState } from 'react'
import Layout from './layout/Main'
import './App.css'
import RoundedCard from './components/RoundedCard'
import Converter from './components/Converter'


function App() {


  return (
    <Layout>
      <main className=" w-full px-8 xl:px-14 relative">
        <div className="">
          <div className=" container box-content py-[30px] mx-auto text-white text-center min-h-[96px] flex items-center justify-center before:content-[''] before:absolute before:left-0 before:top-0 before:min-w-full before:bg-blue-sub1 before:min-h-[295px] before:z-[-1]">
            <h2 className='font-inter font-semibold antialiased text-[32px] leading-none text-balance'>1.00 EUR to USD - Convert Euros to US Dollars</h2>
          </div>
        </div>
          <div className="container mx-auto">
          <RoundedCard>
            <Converter />
          </RoundedCard>
          </div>
      </main>
    </Layout>
  )
}

export default App
