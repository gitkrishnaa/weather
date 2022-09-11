

function getWeather(){
var place=document.querySelector('#place')
console.log(place.value)
//api fetching start
//note- i using fee openwethermap api 
//i am using temprature unit is kelvin which metric in openwether
let city=document.querySelector('#city1')
var temprature=document.querySelector('#tempResult')
let icon1=document.querySelector('#icon1')
let weather1=document.querySelector('#weather1')
let wind1=document.querySelector('#windSpeed')
let dayNight=document.querySelector('#resultDiv1')

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=c208a39244f9a5995e391ea93661b7be&units=metric`)
        .then(result => result.json())
        .then(data => {
        console.log(data)

        if (data.name==undefined) {
            dayNight.style.color="red"
            city.innerHTML="City not in Our list "
            icon1.setAttribute("src",`cross2.png`)
            icon1.style.width="40px"
            weather1.innerHTML="no"
            wind1.innerHTML="0"+"Km/Hr"
            temprature.innerHTML="0"+"<sup>o</sup>"+"C"
            dayNight.style.backgroundImage="url('cross2.gif')"
        
        }
    else{
        dayNight.style.color="black"
        city.innerHTML=data.name
    temprature.innerHTML=data.main.temp+"<sup>o</sup>"+"C"
    icon1.style.width="100px"
    icon1.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    weather1.innerHTML=data.weather[0].main
    wind1.innerHTML=data.wind.speed+"Km/Hr"


    let dayNight1=data.weather[0].icon
   console.log(typeof(dayNight1))
if (dayNight1.includes('d')) {
    dayNight.style.justifyContent="center"
    dayNight.style.backgroundImage="url('sun1.gif')"
    dayNight.style.backgroundSize="24% 100%"
    dayNight.style.backgroundRepeat="no-repeat"

}
else{
    dayNight.style.color="white"
    dayNight.style.textAlign="center"
    dayNight.style.backgroundImage="url('monn.gif')"
    dayNight.style.backgroundSize="100% 200%"
    dayNight.style.backgroundRepeat="no-repeat"
}



    }

         } )
        }



// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base
// : 
// "stations"
// clouds
// : 
// {all: 0}
// cod
// : 
// 200
// coord
// : 
// {lon: -74.006, lat: 40.7143}
// dt
// : 
// 1662829081
// id
// : 
// 5128581
// main
// : 
// {temp: 27.8, feels_like: 27.37, temp_min: 25, temp_max: 30.29, pressure: 1025, …}
// name
// : 
// "New York"
// sys
// : 
// {type: 2, id: 2039034, country: 'US', sunrise: 1662805914, sunset: 1662851667}
// timezone
// : 
// -14400
// visibility
// : 
// 10000
// weather
// : 
// Array(1)
// 0
// : 
// {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// wind
// : 
// {speed: 2.06, deg: 0}
// [[Prototype]]
// : 
// Object
// main.js:3 delhi
// main.js:15 
// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 3500, …}
// base
// : 
// "stations"
// clouds
// : 
// {all: 40}
// cod
// : 
// 200
// coord
// : 
// {lon: 77.2167, lat: 28.6667}
// dt
// : 
// 1662829068
// id
// : 
// 1273294
// main
// : 
// feels_like
// : 
// 38.05
// humidity
// : 
// 74
// pressure
// : 
// 1007
// temp
// : 
// 31.05
// temp_max
// : 
// 31.05
// temp_min
// : 
// 31.05
// [[Prototype]]
// : 
// Object
// name
// : 
// "Delhi"
// sys
// : 
// country
// : 
// "IN"
// id
// : 
// 9165
// sunrise
// : 
// 1662770014
// sunset
// : 
// 1662814998
// type
// : 
// 1
// [[Prototype]]
// : 
// Object
// timezone
// : 
// 19800
// visibility
// : 
// 3500
// weather
// : 
// Array(1)
// 0
// : 
// description
// : 
// "mist"
// icon
// : 
// "50n"
// id
// : 
// 701
// main
// : 
// "Mist"
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// wind
// : 
// deg
// : 
// 110
// speed
// : 
// 2.57
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object

