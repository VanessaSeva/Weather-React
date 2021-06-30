import React, { useState, useEffect } from 'react'
import moment from 'moment';


const Forecast = (props) => {
  props.dateBuilder(new Date());
  console.log(props);
 

const [apiData, setApiData] = useState({})
const [loading, setLoading] = useState(false)
const [error, setError] = useState();




const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=76a27df4ea541168980658d2bbc73e19'

      useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
          .then((res) => res.json())
          .then((results) => {

            setApiData(results)
            console.log(results);
            results.filter(value => console.log(moment.unix(value.dt).format("HH:mm:ss")))

           
})
         .catch((err) => {
           setError(err)
         })
         .finally(() => {
           setLoading(false)
         })

        
         
   }, []);


   
    return (
      <div className="forecastDays" >
        {apiData.list &&
          apiData.list.map((day) => (
            <div className="weatherBox1">
              <div>
                  <p key={day.id}>
                  {day ? props.dateBuilder(day.dt_txt):''} 
                  </p>
               </div>
               <div>
                  <p>
                  {  props.search.main  && props.search.main.temp ? Math.round(props.search.main.temp) : ''} °C
                  </p>
                </div>
            </div>
          ))}
      </div>
    ); 
    
}


export default Forecast