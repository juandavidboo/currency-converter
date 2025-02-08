import { useForm } from 'react-hook-form'
import ConvertIcon from './icons/ConvertIcon'
//import RoundedIconButton from './RoundedIconButton'
import ArrowDownIcon from './icons/ArrowDownIcon'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Converter({ amount, setAmount, fromCurrency, setFromCurrency, rateUSD }) {
  const { register, handleSubmit } = useForm();
  const [toCurrency, setToCurrency] = useState('USD');

  // Number formatting function
  const formatNumber = (num) => {
    const formatted = parseFloat(num).toFixed(7); // Max 7 decimals
    const rounded = parseFloat(formatted); // Removes unnecessary trailing zeros
    return rounded % 1 === 0 ? rounded.toFixed(2) : rounded.toFixed(7).replace(/(\.\d*?[1-9])0+$/, "$1");
  };
  
  


  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  }

  // Amount value formatted
  const formattedAmount = (fromCurrency === "EUR" ? "€" : "$") + " " + formatNumber(amount);
  const formattedAmountText = `${formatNumber(amount)} ${fromCurrency === "EUR" ? "Euros" : "US Dollars"}`;
  

  
  const convertedAmount =
    fromCurrency === "EUR"
      ? amount * rateUSD // EUR → USD
      : amount / rateUSD; // USD → EUR

  const convertedAmountText = formatNumber(convertedAmount) + " " +  (toCurrency === "EUR" ? "Euros" : "US Dollars");
  const rateText = `1 ${toCurrency} = ${formatNumber(fromCurrency === "EUR" ? 1 / rateUSD : rateUSD)} ${fromCurrency}`;

  const handleFromCurrency = (e) => {
    const selectedCurrency = e.target.value;
    setFromCurrency(selectedCurrency);
    setToCurrency(selectedCurrency === "EUR" ? "USD" : "EUR");
    const newAmount =
    fromCurrency === "EUR"
      ? amount * rateUSD // EUR → USD
      : amount / rateUSD; // USD → EUR
    setAmount(formatNumber(newAmount));
  };

  const handleToCurrency = (e) => {
    const selectedCurrency = e.target.value;
    setToCurrency(selectedCurrency);
    setFromCurrency(selectedCurrency === "EUR" ? "USD" : "EUR");
    const newAmount =
    fromCurrency === "EUR"
      ? amount * rateUSD // EUR → USD
      : amount / rateUSD; // USD → EUR
    setAmount(formatNumber(newAmount));
  };
  

  const handleSwapValues = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    const newAmount =
    fromCurrency === "EUR"
      ? amount * rateUSD // EUR → USD
      : amount / rateUSD; // USD → EUR
    setAmount(formatNumber(newAmount));
  };

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
            {...register("amount")} 
            type="text"
            value={formattedAmount}
            onChange={handleAmountChange}
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
            value={fromCurrency}
            {...register("fromCurrency")}
            onChange={handleFromCurrency}
            className="font-inter font-semibold text-black text-base leading-5 border border-gray-300 focus:outline-1 py-[10px] px-[14px] pr-8 rounded mt-4 w-full appearance-none"
          >
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
          </select>
          <span className="absolute right-4 bottom-3 h-4 flex items-center pointer-events-none">
            <ArrowDownIcon/>
          </span>
        </div>
        <div className="mb-[16px] lg:mb-0 lg:flex lg:items-end">
          <a className=" text-blue-sub1 bg-white border border-blue-sub1 rounded-full block w-fit min-h-[18px] p-3 cursor-pointer hover:border-blue-sub1 hover:bg-blue-sub1 hover:text-white"
            onClick={handleSwapValues}><ConvertIcon /></a>
        </div>
        <div className="mb-[30px] lg:flex-1 lg:mb-0 relative">
          <label
            htmlFor="toCurrency"
            className="font-inter font-semibold text-base leading-5 text-black">
            To
          </label>
          <select
            id="toCurrency"
            value={toCurrency}
            {...register("toCurrency")}
            onChange={handleToCurrency}
            className="font-inter font-semibold text-black text-base leading-5 border border-gray-300 focus:outline-1 py-[10px] px-[14px] rounded mt-4 w-full appearance-none"
          >
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
          </select>
          <span className="absolute right-4 bottom-3 h-4 flex items-center pointer-events-none">
            <ArrowDownIcon/>
          </span>
        </div>
      </div>
      
     </form>
     <div className="lg:flex lg:flex-row lg:gap-[132px] pg-4 lg:pt-[70px]">
      <div className="lg:flex-1">
        <h3 className='font-inter font-semibold text-2xl lg:text-[32px] leading-9'>{formattedAmountText} = <br />{convertedAmountText}</h3>
        <span className='font-inter font-normal text-gray-3 text-base leading-9 mt-0 lg:mt-3'>{rateText}</span>
      </div>
      <div className="hidden flex-1 xl:items-end xl:flex pt-[66px]">
        <div className="font-inter font-normal text-black text-sm bg-blue-sub2 rounded-lg p-[18px] pl-[30px] leading-9">
          <p>We use the mid-market rate for our Converter. This is for informational purposes only. You won&rsquo;t receive this rate when sending money.</p>
        </div>
      </div>
     </div>
     <div className="font-inter font-light text-black text-xs leading-6 max-lg:absolute max-lg:bottom-[-50px] lg:mt-3 lg:leading-9 lg:text-right">
      <a href="https://www.xe.com/currency/eur-euro/" className="underline">Euro</a> to US <a href="https://www.xe.com/currency/usd-us-dollar/" className="underline">Dollar</a> conversion — Last updated Dec 15, 2022, 19:17 UTC.
     </div>
    </div>
  )
}

