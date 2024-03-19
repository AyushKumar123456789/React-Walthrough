import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        let x;
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {setData(res[currency])})
        console.log(data);
    }, [currency])
    console.log("data from useCurrencyInfo : ",data);
    console.log("useCurrencyInfo function")
    return data
}

export default useCurrencyInfo;