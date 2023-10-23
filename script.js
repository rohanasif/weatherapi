const container = document.querySelector(".container");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=a7cffca7c299e275d56fc2be97f4ad8b`
  )
    .then((response) => response.json())
    .then((data) => handleSubmit(data));
});

function handleSubmit(data) {
  const desc = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;

  console.log("Description:", desc);
  console.log("Temperature:", temperature, "°C");
  console.log("Humidity:", humidity, "%");

  // Update background image based on description
  switch (desc) {
    case "clear sky":
      document.body.style.backgroundImage = "url('clear_sky.jpg')";
      break;
    case "few clouds":
      document.body.style.backgroundImage = "url('few_clouds.jpg')";
      break;
    case "scattered clouds":
      document.body.style.backgroundImage = "url('scattered_clouds.jpg')";
      break;
    case "broken clouds":
      document.body.style.backgroundImage = "url('broken_clouds.jpg')";
      break;
    case "shower rain":
      document.body.style.backgroundImage = "url('shower_rain.jpg')";
      break;
    case "rain":
      document.body.style.backgroundImage = "url('rain.jpg')";
      break;
    case "thunderstorm":
      document.body.style.backgroundImage = "url('thunderstorm.jpg')";
      break;
    case "snow":
      document.body.style.backgroundImage = "url('snow.jpg')";
      break;
    case "mist":
      document.body.style.backgroundImage = "url('mist.jpg')";
      break;
    default:
      document.body.style.backgroundImage = "url('default_background.jpg')";
      break;
  }

  // Render weather information on the page
  container.innerHTML += `<br>
    <p>Description: ${desc}</p>
    <p>Temperature: ${temperature} °C</p>
    <p>Humidity: ${humidity} %</p>
  `;
}
