const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&units=imperial&appid={API_KEY}";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);
        weather(jsonObject);
    });
    
function weather(jsonObject) {
    document.querySelector('#current-temp').textContent = jsonObject.main.temp
    const iconsrc = `http://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
    const desc = jsonObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
}
