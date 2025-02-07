import { useForm } from 'react-hook-form'
import ConvertIcon from './icons/ConvertIcon'
import RoundedIconButton from './RoundedIconButton'
import ArrowDownIcon from './icons/ArrowDownIcon'
//import { useState, useEffect } from 'react'

export default function Converter() {


  const {
    handleSubmit,
  } = useForm()

  const onClickFn = () =>{}

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" mx-4 relative">
 
     <form
     onSubmit={handleSubmit(onSubmit)}
     >
      <div className="flex flex-col lg:flex-row lg:gap-[54px]">
        <div className="mb-[30px] lg:flex-1 lg:mb-0">
          <label
            htmlFor="amount"
            className="font-inter font-semibold text-base leading-5 text-black">
            Amount
          </label>
          <input
            id="amount"
            type="text"
            value={1.00}
            className="font-inter font-semibold text-black text-base leading-5 border border-gray-300 focus:outline-1 py-[10px] px-[14px] rounded mt-4 w-full"
          />
        </div>
        <div className="mb-[16px] lg:flex-1 lg:mb-0 relative">
          <label 
            htmlFor="fromCurrency"
            className="font-inter font-semibold text-base leading-5 text-black">
            From
          </label>
          <select
            id="fromCurrency"
            type="text"
            className="font-inter font-semibold text-black text-base leading-5 border border-gray-300 focus:outline-1 py-[10px] px-[14px] pr-8 rounded mt-4 w-full appearance-none"
          >
            <option value="euro">Euro</option>
            <option value="dollar">Dollar</option>
          </select>
          <span className="absolute right-4 bottom-3 h-4 flex items-center pointer-events-none">
            <ArrowDownIcon/>
          </span>
        </div>
        <div className="mb-[16px] lg:mb-0 lg:flex lg:items-end">
          <RoundedIconButton onClickFn={onClickFn}>
            <ConvertIcon/>
          </RoundedIconButton>
        </div>
        <div className="mb-[30px] lg:flex-1 lg:mb-0 relative">
          <label
            htmlFor="toCurrency"
            className="font-inter font-semibold text-base leading-5 text-black">
            To
          </label>
          <select
            id="toCurrency"
            type="text"
            className="font-inter font-semibold text-black text-base leading-5 border border-gray-300 focus:outline-1 py-[10px] px-[14px] rounded mt-4 w-full appearance-none"
          >
            <option value="dollar">Dollar</option>
            <option value="euro">Euro</option>
          </select>
          <span className="absolute right-4 bottom-3 h-4 flex items-center pointer-events-none">
            <ArrowDownIcon/>
          </span>
        </div>
      </div>
      
     </form>
     <div className="lg:flex lg:flex-row pg-4 lg:pt-[70px]">
      <div className="lg:flex-1">
        <h3 className='font-inter font-semibold text-2xl lg:text-[32px] leading-9'>1.00 Euro = <br />1.05 US Dollars</h3>
        <span className='font-inter font-normal text-gray-3 text-base leading-9 mt-0 lg:mt-3'>1 USD = 0.94 EUR</span>
      </div>
      <div className="hidden flex-1 lg:items-end lg:flex pt-[66px]">
        <div className="font-inter font-normal text-black text-sm bg-blue-sub2 rounded-lg p-[18px] pl-[30px] leading-9">
          <p>We use the mid-market rate for our Converter. This is for informational purposes only. You won&rsquo;t receive this rate when sending money.</p>
        </div>
      </div>
     </div>
     <div className="font-inter font-light text-black text-xs leading-6 max-lg:absolute max-lg:bottom-[-50px] lg:mt-3 lg:leading-9 lg:text-right">
      <a href="#" className="underline">Euro</a> to US <a href="#" className="underline">Dollar</a> conversion — Last updated Dec 15, 2022, 19:17 UTC.
     </div>
    </div>
  )
}

