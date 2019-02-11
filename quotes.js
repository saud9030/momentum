axios({
    method: 'get',
    url:"https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
})
.then((response) => $(".quote p").text(response.data.quoteText))
.catch((error) => console.log(error));


// console.log(moment().format("ddd, hA"))