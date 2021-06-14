import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=76a27df4ea541168980658d2bbc73e19')
        .then((res) => {
            setData(res.data)
            console.log(res.data.main.temp);
        })
    }, [])
       
    


    return (
        <div>
            <div>
            <h1 className="title">Weather App</h1>
            <hr className="separation"/>
            </div>
            <div className="container">
            <div className="weatherBox">
                <h2 className="title">Today</h2>
                <p>Ville</p>
                <p>25</p>
            </div>
            </div>
        </div>
    )
}


export default Main