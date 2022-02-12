let t = 33;
let s = 2.5;

let f = 35.74 + (0.6215 * t) - (35.75 * s^0.16) + (0.4275 * t * s^0.16)

windspeed = document.querySelector("#wind-speed");
windchill = document.querySelector("#wind-chill");
windspeed.innerHTML = s;
windchill.innerHTML = Math.round(f * 100) / 100;
console.log(windspeed)