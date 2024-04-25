const input = document.querySelector('.text')
const btn = document.querySelector('.submit')
const cityname = document.querySelector('.cityoutput')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const weather_image = document.querySelector('.weather_image')


btn.addEventListener('click', (e) => {
  if (input.value === ""||input.value===NaN) {
    alert('please enter a city name')
  }
  else {
    weather(input.value)
  }
})

const weather = async (city) => {
  const api_key = '23bc466f4e7b9d6ba537c095f3e611e7'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

  const weather_data = await fetch(`${url}`)
    .then(response => response.json());

  if (weather_data.name === undefined) {
    alert('please enter a right city name')
  } else {
    cityname.innerHTML = `Weather of <span>${weather_data.name}</span>`
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = weather_data.weather[0].description
    humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> <span class="">humidity ${weather_data.main.humidity}%</span><br>`
    wind.innerHTML = `<i class="fa-solid fa-wind"></i><span class="">${weather_data.wind.speed}Km/h</span><br>wind`


    switch (weather_data.weather[0].main) {
      case 'Clouds':
        weather_image.src = "images/clouds.png"
        break;
      case 'Clear':
        weather_image.src = "images/clear.png"
        break;
      case 'Snow':
        weather_image.src = "images/snow.png"
        break;
      case 'Mist':
        weather_image.src = "images/mist.png"
        break;
      case 'Rain':
        weather_image.src = "images/rain.png"
        break;
      case 'Haze':
        weather_image.src = "images/haze.png"
        break;
      case 'Storm':
        weather_image.src = "images/storm.png"
        break;
      default:
        break;
    }
  }


}

