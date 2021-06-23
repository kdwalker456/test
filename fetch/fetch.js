const weatherLoop = (data) => {
  // This grabs the weather periods

  const { periods } = data.properties;
  // grabs the weather div in the html
  const weather = document.getElementById('weather');
  weather.innerHTML = '';
  // loops through the weather periods.
  periods.forEach((arr) => {
    // creates a section for each period
    const weatherDisplay = document.createElement('section');
    // grabs weatherDisplay as the child of weather
    weather.appendChild(weatherDisplay);

    const header = document.createElement('h2');
    weatherDisplay.appendChild(header);
    header.innerHTML = arr.name;

    const detail = document.createElement('div');
    weatherDisplay.appendChild(detail);
    detail.innerHTML = arr.detailedForecast;

    const date = new Date(arr.startTime);
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const dateLog = document.createElement('div');
    header.appendChild(dateLog);
    dateLog.innerHTML = dateTimeFormat.format(date);
  });
};

// console.log(weatherLoop)c
const button = document.getElementById('button');
button.addEventListener('click', () => {
  fetch('https://api.weather.gov/gridpoints/OKX/34,32/forecast')
    .then((response) => response.json())
    .then((data) => weatherLoop(data));
});
