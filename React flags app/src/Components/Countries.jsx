import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Cards';

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
            data.map((country, index)=><Card key={index} country={country}/>)
            }
            </ul>
        </div>
    )
}