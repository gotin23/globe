import React, { useState, useEffect } from 'react';
import './CityTime.css'

export default function CityTime({ state }) {
const city = state.city
    const lat = state.lat;
    const [time, setTime] = useState("");
    useEffect(() => {
        
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e9e0872d98e269729b2b7a29ac847a0`)
            .then(res => res.json())
            .then(data => {
              const offset = data.timezone; // timezone offset in seconds
              const date = new Date();
              date.setTime(date.getTime() + offset * 1000);
              
            //   handleTrueHour(date.toLocaleTimeString())
              setTime(handleTrueHour(date.toLocaleTimeString()).substr(0,5));
            })
            .catch(console.error); 
     
      }, [city]);

      const handleTrueHour =(el) => {        
            let hh = el.substr(0,2)
            let mmss= el.substr(2,6)
            if(hh === '00'){
                hh='23'
            return   hh+  mmss
            }
            else{
              let result = parseInt(hh) -1 
              if(result < 10 ){
               
            return  '0' + result.toString()+  mmss
              }
            return  result.toString() + mmss  
            }      
      }
  
         
    return (
        <div className='city-time-container'>{time ? time : <p>Loading...</p>}</div>
    )
}






