import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Countries() {
    const [data, setData] = useState([]);

useEffect(()=> {
    axios.get("https://restcountries.com/v3.1/all")
    .then((response)=>setData(response.data))
    .then()
},[])

    return(
        <div className='countries'>
            <h1>Countries</h1>
            <ul>
            {
            data.map((country)=><li key={country.name.common}>{country.translations.fra.common}</li>)
            }
            </ul>
        </div>
    )
}