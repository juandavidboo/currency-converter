import Layout from './layout/Main'
import RoundedCard from './components/RoundedCard'
import Converter from './components/Converter'
import { useEffect, useState } from 'react'

function App() {
  // values passed to Converter - used on H2 app heading
  const [amount, setAmount] = useState("1.00");
  const [fromCurrency, setFromCurrency] = useState('EUR');

  // set upon rates API fetch
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  const formattedAmountFromTo = amount + " " +  
  (fromCurrency === "EUR" 
    ? "EUR to USD - Convert Euros to US Dollars" 
    : "USD to EUR - Convert US Dollars to Euros");

  // Rates API fetch
  useEffect (() => {
    try {
      (async () => {
        const response = await fetch("https://api.vatcomply.com/rates");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRates(data);
      })();
    } catch (err) {
      setError(err.message);
    }
  },[]);
  
  // USD rate value from API fetch to Converter
  const rateUSD = rates ? rates.rates.USD : null;

  return (
    <Layout>
      <main className=" w-full px-8 xl:px-14 relative">
        <div className="">
          <div className=" container box-content py-[30px] mx-auto text-white text-center min-h-[96px] flex items-center justify-center before:content-[''] before:absolute before:left-0 before:top-0 before:min-w-full before:bg-blue-sub1 before:min-h-[295px] before:z-[-1]">
            <h2 className='font-inter font-semibold antialiased text-[32px] leading-none text-balance'>{formattedAmountFromTo}</h2>
          </div>
        </div>
          <div className="container mx-auto">
          <RoundedCard>
            {error ? (
              <p>Error: {error}</p>
            ) : !rates ? (
              <p>Loading exchange rates...</p>
            ) : (<Converter amount={amount} setAmount={setAmount} fromCurrency={fromCurrency} setFromCurrency={setFromCurrency} rateUSD={rateUSD} />)
            }
          </RoundedCard>
          </div>
      </main>
    </Layout>
  )
}

export default App
