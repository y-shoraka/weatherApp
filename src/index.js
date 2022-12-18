let now = new Date();
let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = Days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let city = document.querySelector("#city").innerHTML ; 
let apiKey = "5122c73584c58f76c2670a7ce4d20f3a"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function displayTemp(response){
  document.querySelector("#temp").innerHTML = `${Math.round(response.data.main.temp)}°C`;
  document.querySelector("#high-temp").innerHTML = `${Math.round(response.data.main.temp_max)}`;
  document.querySelector("#low-temp").innerHTML = `${Math.floor(response.data.main.temp_min)}`;
  console.log(Math.round(response.data.main.temp) )
  console.log(response)
}

function callCity(apiUrl){

  axios.get(apiUrl).then(displayTemp);
}


document.querySelector(".time").innerHTML = `${day}  ${hour}:${minutes}`;
function changeLabel(event) {
  let searchBar = document.querySelector("#search-input").value;
  if (searchBar != null) {
    event.preventDefault();
    document.querySelector("#city").innerHTML = searchBar;
    city = searchBar ; 
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let temp = callCity(apiUrl);
    //let currentTemp = document.querySelector("#temp");
    //currentTemp.innerHTML = Math.round(temp);

    
  } else {
    document.querySelector("#city").innerHTML = "Tehran";
  }
}
function changeTemp() {
  let tempreture = document.querySelector("#temp");
  if (tempreture.innerHTML === "14°C") {
    document.querySelector("#temp").innerHTML = "57.2°F";
  }else{
 tempreture.innerHTML = "14°C";
  }
   
  
}

document.querySelector("form").addEventListener("submit", changeLabel);
document.querySelector("#temp").addEventListener("click", changeTemp);
