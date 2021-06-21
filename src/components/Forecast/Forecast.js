import React, { useState, useEffect } from 'react'

const Forecast = () => {

const [apiData, setApiData] = useState({})

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=76a27df4ea541168980658d2bbc73e19'

      useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((results) => {
            setApiData(results)
            console.log(results);
          })
         
          


      }, [apiUrl]);


    return (
        <div>
            yo
        </div>
    )
}

export default Forecast