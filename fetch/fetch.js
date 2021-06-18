const weatherLoop = data => {
  //This grabs the weather periods

  const periods = data.properties.periods;
  //grabs the weather div in the html
  let weather = document.getElementById('weather');
  //loops through the weather periods.
  periods.forEach(arr => {
    //creates a section for each period
    let weatherDisplay = document.createElement('section');
    //grabs weatherDisplay as the child of weather
    weather.appendChild(weatherDisplay);
    
    let header = document.createElement('h2');
    weatherDisplay.appendChild(header);
    header.innerHTML = arr.name;

    let detail = document.createElement('div');
    weatherDisplay.appendChild(detail);
    detail.innerHTML = arr.detailedForecast;

    const date = new Date(arr.startTime);
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let dateLog = document.createElement('div');
    header.appendChild(dateLog);
    dateLog.innerHTML = dateTimeFormat.format(date);

  })
}

fetch('https://api.weather.gov/gridpoints/OKX/34,32/forecast')
  .then(response => response.json())
  .then(data => weatherLoop(data));
// console.log(weatherLoop)
 





