axios({
    method: 'get',
    url:"https://api.unsplash.com/photos/random/?client_id=e7cabaee0619abe96baebc87aff364937d4477cde3c08e9cb37a941b8200c8ed",
})
.then((response) => $('body').css("background-image",`url(${response.data.urls.raw})`))
.catch((error) => console.log(error ));

$(".city").after(`<h2> ${moment().format("ddd, hA")} </h2>`);
