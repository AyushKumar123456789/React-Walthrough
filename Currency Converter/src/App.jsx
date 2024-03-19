import { useEffect, useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { trackPromise , usePromiseTracker} from 'react-promise-tracker';
import {FadeLoader} from 'react-spinners'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  const { promiseInProgress } = usePromiseTracker();//This is a custom hook that returns a boolean value that indicates whether a promise is currently in progress or not.

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }

    const fetchCurrencyInfo = async () => {
        console.log("fetching ..")
        const response =  await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
        const data = await response.json()
        currencyInfo = await data[from]
        convert()
    }

    
    //I have to create a new function to fetch the currency info because the useCurrencyInfo is a custom hook and not a function and hook can't be use  inside the useEffect hook
    // The async and await keywords enable make asynchronous code appear synchronous. The await keyword can only be used inside an async function and fetch is a promise based function so we use async and await to make the code synchronous
    let loader = <h3>From {from.toUpperCase()} to {to.toUpperCase()}</h3>
    
    useEffect(() => {
        trackPromise(
            fetchCurrencyInfo()
        )

        
    }, [from])
    
  
    useEffect(() => {
      
        convert()
        
    }   , [to,amount])
    
    if (promiseInProgress===true) {
        // loader = <FadeLoader size={2} color="#008DDA" />
        loader = <h3>Loading..</h3>
        console.log("Connecting....")  
    }
    else{
        loader = <h3>From {from.toUpperCase()} to {to.toUpperCase()}</h3>
    }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('./money-blue.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(e) => setAmount(e)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <div className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center flex justify-center `}>
                        {loader}
                    </div>
             
            </div>
        </div>
    </div>
);
}

export default App