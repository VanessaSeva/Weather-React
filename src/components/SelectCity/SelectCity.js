import React, {useState, useEffect} from 'react'

const SelectCity = (props) => {
    console.log(props);
    


    return(
        <div className="containerSelect">
            <select>
                <option value="temp">{props.temp}</option>
            </select>
            <p>{props.weather}</p>
            <p>{props.temp}</p>
        </div>
    )
}
export default SelectCity