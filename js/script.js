
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDayForecast(){
    const apiWeather = new API_WEATHER();

    apiWeather
        .fetchTomorrowForecast()
        .then(function (response){
            const data = response.data;
            console.log("test");
            console.log(data);
            // On récupère l'information principal
            for(let i=0; i<3; i++){
                const main = data.list[i].weather[0].main;
                const description = data.list[i].weather[0].description;
                const temp = data.list[i].temp.day;
                const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
                h = i+1
                var j = String(h)
                var test = j+"tomorrow-forecast-main";
                var test2 = j+ "tomorrow-forecast-more-info";
                var test3 = j+ "icon-weather-container";
                var test4 = j+ "tomorrow-forecast-temp";
                console.log(test)
                document.getElementById(test).innerHTML = main;
                document.getElementById(test2).innerHTML = description;
                document.getElementById(test3).innerHTML = icon;
                document.getElementById(test4).innerHTML = temp;
            }
          /*  const main = data.list[0].weather[0].main;
            const description = data.list[0].weather[0].description;
            const temp = data.list[0].temp.day;
            const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

            const main1 = data.list[1].weather[0].main;
            const description1 = data.list[1].weather[0].description;
            const temp1 = data.list[1].temp.day;
            const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

            const main2 = data.list[2].weather[0].main;
            const description2 = data.list[2].weather[0].description;
            const temp2 = data.list[2].temp.day;
            const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

            // Modifier le DOM
            document.getElementById('1tomorrow-forecast-main').innerHTML = main;
            document.getElementById('1tomorrow-forecast-more-info').innerHTML = description;
            document.getElementById('1icon-weather-container').innerHTML = icon;
            document.getElementById('1tomorrow-forecast-temp').innerHTML = temp;

            document.getElementById('2tomorrow-forecast-main').innerHTML = main1;
            document.getElementById('2tomorrow-forecast-more-info').innerHTML = description1;
            document.getElementById('2icon-weather-container').innerHTML = icon1;
            document.getElementById('2tomorrow-forecast-temp').innerHTML = temp1;

            document.getElementById('3tomorrow-forecast-main').innerHTML = main2;
            document.getElementById('3tomorrow-forecast-more-info').innerHTML = description2;
            document.getElementById('3icon-weather-container').innerHTML = icon2;
            document.getElementById('3tomorrow-forecast-temp').innerHTML = temp2;*/

    })
}