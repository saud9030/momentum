

axios({
    method: 'get',
    url:`http://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&APPID=222aa3a965b2e3e5e155f404f0eccd10`,
})
.then((response) => {
$(".dataReturned").text(` ${response.data.main.temp} ℃`);
$('img').attr(`src`,`http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`)
})
.catch((error) => console.log(error))




// $("input").on("change",getWeather);


// axios({
//     method: 'get',
//     url:"http://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&APPID=222aa3a965b2e3e5e155f404f0eccd10",
// })
// .then((response) => console.log(response.data.weather[0].icon))
// .catch((error) => console.log(error));


// function getWeather(event){

//     axios({
//         method: 'get',
//         url:`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&APPID=222aa3a965b2e3e5e155f404f0eccd10`,
//     })
//     .then((response) => {
//     $(".dataReturned").text(`${event.target.value} : ${response.data.main.temp} ℃`);
//     $('img').attr(`src`,`http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`)
//     })
//     .catch((error) => console.log(error))
//     }