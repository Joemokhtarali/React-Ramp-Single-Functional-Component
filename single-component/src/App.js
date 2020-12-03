import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [input, setinput] = useState('');
  let [year, setyear] = useState(new Date().getFullYear())
  let [month, setmonth] = useState()
  let [day, setday] = useState()
  let [weekDay, setweekDay] = useState()
  let [hours, sethours] = useState()
  let [minutes, setminutes] = useState()
  let [seconds, setseconds] = useState()
  let weekDays = ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const changeInput = (event) => {
    setinput(event.target.value);
  };
 
  const updateTime = () => {
    setweekDay(weekDays[new Date().getDay() - 1])

    let seconds2 = new Date().getSeconds()
    if(seconds2 < 10){
      setseconds('0' + seconds2.toString())
    }else{setseconds(seconds2)}
    
    let minutes2 = new Date().getMinutes()
    if(minutes2 < 10){
      setminutes('0' + minutes2.toString())
    }else{setminutes(minutes2)}

    let hours2 = new Date().getHours()
    if(hours2 > 12){
      hours2 -= 12
      sethours('0' + hours2.toString())
    }else{sethours(hours)}

    let day2 = new Date().getDate()
    if(day2 < 10){
      setday('0' + day2.toString())
    }else{setday(day2)}

    let month2 = new Date().getMonth() + 1
    if(month2 < 10){
      setmonth('0' + month2.toString())
    }else{setmonth(month2)}

    if(month == 12 && day == 31 && minutes == 59 && seconds == 59){
      setyear(new Date().getFullYear())
    }
  }

  
   useEffect(() => {
      setInterval(() => updateTime(), 1000);
    }, []);



  return (
    <div className="App" style={{ marginTop: "20%" }}>
      <div>
        <h2 style={{ color: "#6be0bf" }}> Welcome to Ramp!</h2>
        <input
          type="text"
          placeholder="Enter your input"
          value={input}
          onChange={changeInput}
        >
        </input>
      </div>

      <div style={{ marginLeft: "33%", marginTop: "5%", width: "500px" }}>
        <p>Today is {weekDay} {month}-{day}-{year}</p>
        <p>Time is {hours}:{minutes}:{seconds}</p>
      </div>
    </div>
  );
}

export default App;
