import React, { useState } from "react";
import "./index.css"; // Ensure you have Tailwind CSS set up in this file

function App() {
  const [value, setValue] = useState("");
  const [weatherdata, setWeatherdata] = useState({
    temp: "--",
    location: "--",
    date: "--",
    time: "--",
    condition: "--",
    icon: null,
  });

  const fetchWeather = async (location) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=41b4b713c0e04ac1b6a152336241008&q=${location}&aqi=no`;
    const response = await fetch(url);
    if (response.status == 400) {
      alert("location is invalid");
    } else if (response.status == 200) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  };

  const searchBtn = async () => {
    if (value != "") {
      const Data = await fetchWeather(value);
      if(Data==null){
        alert("data is not found on this location")
        return;
      }

      const currentTemp = Data.current.temp_c;
      const currentLocation = Data.location.name;
      const currentDatetime = Data.location.localtime;
      const [currentdate, currenttime] = currentDatetime.split(" ");
      const currentImage = Data.current.condition.icon;
      const currentCondition = Data.current.condition.text;

      let newobj = {
        "temp": currentTemp,
        "location": currentLocation,
        "date": currentdate,
        "time": currenttime,
        "condition": currentCondition,
        "icon": currentImage,
      }
      setWeatherdata(newobj)
    }
    else {
        alert("location can't be empty")
    }
  };

  const locationInput = (obj) => {
    setValue(obj.target.value);
  };

  return (
    <>
      <header className="h-[100px] bg-[#2c3e50] flex justify-center items-center gap-8">
        <div className="flex gap-[3rem] h-[3rem]">
          <input
            onChange={locationInput}
            type="text"
            placeholder="Enter Location"
            className="w-[20rem] text-[1.5rem] bg-transparent outline-none text-[#eeeded] border-b-[2px] border-b-white"
          />
          <button
            onClick={searchBtn}
            className="bg-[rgb(17,230,159)] w-[5rem] text-[1.2rem] rounded-[6px] border-none"
          >
            Search
          </button>
        </div>
      </header>
      <main className="h-[calc(100vh-100px)] bg-[rgb(27,42,57)] text-white flex items-center justify-center">
        <div className="flex gap-[1rem] h-[5rem]">
          <div className="temperature">{weatherdata.temp}°C</div>
          <div className="location-date">
            <div className="text-[2rem]">{weatherdata.location}</div>
            <span className="time">{weatherdata.time}</span>
            <span className="day">{weatherdata.date}</span>
            <span className="text-center"></span>
          </div>
          <div className="weather-state">
            <img src={weatherdata.icon} alt="Weather Icon" />
            <div className="condition">{weatherdata.condition}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
