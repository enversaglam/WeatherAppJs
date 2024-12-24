// Description: Script file for the project
const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'eba434d53498ed908a3e822f4e3bce27';

//istek yapma
const setQuery = (e) => {
    if (e.keyCode == '13')  //eğer kullanıcı enter tuşuna basarsa
        getResult(searchBar.value); //getResult fonksiyonuna searchBar degerini gonderir
    }

const getResult = (cityName) => { //getResult fonksiyonu olusturulur
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`; //apiye istek yapmak icin gerekli olan url
    fetch(query)
        .then(weather => { //fetch fonksiyonu ile istek yapılır
            return weather.json(); //json formatında veri dondurur
        }).then(displayResult); //displayResult fonksiyonuna veri dondurur
}

const displayResult = (result) => { //displayResult fonksiyonu olusturulur
    let city = document.querySelector('.city'); //city class'ına sahip html elementi secilir
    city.innerText = `${result.name}, ${result.sys.country}`; //city elementinin texti degistirilir

    let temp = document.querySelector('.temp'); //temp class'ına sahip html elementi secilir
    temp.innerHTML = `${Math.round(result.main.temp)}<span>°C</span>`; //temp elementinin texti degistirilir

    let desc = document.querySelector('.desc'); //desc class'ına sahip html elementi secilir
    desc.innerText = result.weather[0].description; //desc elementinin texti degistirilir

    let minmax = document.querySelector('.minmax'); //minmax class'ına sahip html elementi secilir
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`; //minmax elementinin texti degistirilir

    let humidity = document.querySelector('.humidity'); //humidity class'ına sahip html elementi secilir
    humidity.innerText = `Nem: ${result.main.humidity}%`; //humidity elementinin texti degistirilir

    let wind = document.querySelector('.wind'); //wind class'ına sahip html elementi secilir
    wind.innerText = `Rüzgar: ${result.wind.speed} m/s`; //wind elementinin texti degistirilir
}
//istek olusturma
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);