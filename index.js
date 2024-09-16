const api_key=""
let city="delhi"//by default

const searchBtn=document.getElementById("searchBtn")
const query=document.getElementById("query")
const city_name=document.getElementById('city')
const temp=document.getElementById("temp")
const temp_max=document.getElementById("temp_max")
const temp_min=document.getElementById("temp_min")
const humidity=document.getElementById("humidity")
const feels_like=document.getElementById("feels_like")
const wind_deg=document.getElementById("wind_deg")
const wind_speed=document.getElementById("wind_speed")
const sunrise=document.getElementById("sunrise")
const sunset=document.getElementById("sunset")
const description=document.getElementById("description")



const fetchCityWeather=async (city)=>{
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    const response =await fetch(url)
    const data=await response.json();

    city_name.innerHTML=`Weather for ${city}`
    temp.innerHTML=` ${data.main.temp} °C `
    temp_max.innerHTML=`Max temp : ${data.main.temp_max}  °C`
    temp_min.innerHTML=`Min temp : ${data.main.temp_min}  °C`
    humidity.innerHTML=`${data.main.humidity} %`
    feels_like.innerHTML=`Feels like: ${data.main.feels_like}`
    wind_deg.innerHTML=`wind degree : ${data.wind.deg}`
    wind_speed.innerHTML=` ${data.wind.speed} km/h`
    sunrise.innerHTML=`sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`
    sunset.innerHTML=`sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`
    description.innerHTML=`sunset: ${data.weather[0].main}`
    console.log(data)
}

query.addEventListener("input",(e)=>{
    city=e.target.value
    console.log(city)

})

searchBtn.addEventListener("click",()=>{
    if (city) {
        fetchCityWeather(city);
    } else {
        alert("Please enter a city name");
    }
})





// temp ,temp_min,temp_max,humidity,feels_like ,wind_deg,wind_speed,sunrise,sunset