
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector("input");


const searchLocation = async () => {
    // select value 
    const location = searchInput.value;
    //check for empty
    if (location !== "") {
        //data get
        const Data = await fetchWeather(location);
        //update dom inside my ui
        if (Data == null) {
        } else {
            updateDom(Data);
        }
        searchInput.value = "";
    }
}
// THERE IS ANY DAY OBJECT IN API SO WE CAN USE DEAFAULT DAY FUNCTION FOR FINDING CURRENT DAY

const getCurrentDay = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
}

const temprature = document.querySelector(".temprature");
const areaLocation = document.querySelector(".location");
const time = document.querySelector(".time");
const Day = document.querySelector(".Day");
const date = document.querySelector(".Date");
const image = document.querySelector("img");
const condition = document.querySelector(".condition");

const updateDom = (Data) => {
    // filtering the data from api object
    const currentTemp = Data.current.temp_c;
    const currentLocation = Data.location.name;
    const currentDay = getCurrentDay();
    const currentDatetime = Data.location.localtime;
    const [currentdate, currenttime] = currentDatetime.split(" ");
    const currentImage = Data.current.condition.icon;
    const currentCondition = Data.current.condition.text;
    
// UPDATE THE DOM
    temprature.textContent = currentTemp + "°c";
    areaLocation.textContent = currentLocation;
    Day.textContent = currentDay;
    time.textContent = currenttime;
    date.textContent = currentdate;
    image.src = currentImage;
    condition.textContent = currentCondition;
}


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
}

// event listener
searchBtn.addEventListener("click", searchLocation);
