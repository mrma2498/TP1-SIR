
var cityInput;
var position;
var countryI;
var countryCode;

window.onload = function(){
    
    
     
    document.getElementById("submit").addEventListener("click",getWeather);
    document.getElementById("submitCode").addEventListener("click",getCovid);

    getNews();
    getInfoLocation();
    
}

    /*** 
     * Procura a temperatura e o mapa por o nome de uma cidade
    */
    function getWeather(event){
    
        cityInput = document.getElementById("city-input").value;
        

        event.preventDefault();
        

        const api_key="4e0a9e0ab33eb3673421a2bb0c4aab28";
        const url= `http://api.weatherstack.com/current?access_key=${api_key}&query=${cityInput}`;
        
        
      
  
            fetch (url)
                .then(function(response){
                    let data = response.json();
                return data;
                })
                .then(function(data){
                    var city = data.location.name;
                    var country = data.location.country;
                    var temperature = data.current.temperature;
                    var icon = data.current.weather_icons[0];
                    var description = data.current.weather_descriptions[0];
                    var lat = data.location.lat;
                    var lon = data.location.lon;
                    var pos=lat + "," + lon;
            
                //console.log(city,country,temperature,description,icon);

                $('.icon').attr('src',icon);
                $('.temp').html(`${temperature}º`);
                $('.weather-des').html(`${description}`);
                $('.city').html(`${city}, ${country}`);

                var url = "https://www.google.com/maps/embed/v1/view?center="+pos+"&zoom=12&key=AIzaSyAx3rZjXJAv1qHwq-N7ypKkG4_5LlVAHVI";
                $("iframe").attr('src',url);

            
        }); 
        
       
    }

    /** Retorna um conjunto de notícias */
    
    function getNews(){
        
        const key='0bc5214c1c9248d0afaf5fb3adaf4656';
        const url= `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}`
        
        
        fetch(url)
                .then(function(response){
                    let data = response.json();
                return data;
                })
                .then(function(data){
                    var title = data.articles[1].title;
                    var description = data.articles[1].description;
                    var image = data.articles[1].urlToImage;
                    var urlpage = data.articles[1].url;

                    var title2 = data.articles[2].title;
                    var description2 = data.articles[2].description;
                    var image2 = data.articles[2].urlToImage;
                    var urlpage2 = data.articles[2].url;


                    var title3 = data.articles[3].title;
                    var description3 = data.articles[3].description;
                    var image3 = data.articles[3].urlToImage;
                    var urlpage3 = data.articles[3].url;
            
               

                $('.card-title').append(title);
                $('.card-img-top').attr('src',image);
                $('.card-text').append(description);

                $('.card-title2').append(title2);
                $('.card-img-top2').attr('src',image2);
                $('.card-text2').append(description2);

                $('.card-title3').append(title3);
                $('.card-img-top3').attr('src',image3);
                $('.card-text3').append(description3);
                
                /*Redireciona para o site da notícia quando se pressiona o botão "click me to read"
                atribuindo um url ao parâmetro href
                */
                document.getElementById('read1').setAttribute('href', urlpage);
                document.getElementById('read2').setAttribute('href', urlpage2);
                document.getElementById('read3').setAttribute('href', urlpage3);

            
        });    
    }


    //Verifica a localização atual do utilizador, devolvendo a sua latitude e longitude, e o maps(google) da área, assim como a meteorologia no local
    function getInfoLocation(){

        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(function (position){
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                //console.log(latitude,longitude);
                position = latitude + "," + longitude;
                //console.log(position)

                //$('#latitude').text(latitude);
                //$('#longitude').text(longitude);

                var url = "https://www.google.com/maps/embed/v1/view?center="+position+"&zoom=12&key=AIzaSyAx3rZjXJAv1qHwq-N7ypKkG4_5LlVAHVI";
                $("iframe").attr('src',url);


            

            const api_key="4e0a9e0ab33eb3673421a2bb0c4aab28";
            const url2= `http://api.weatherstack.com/current?access_key=${api_key}&query=${position}`; 

            fetch(url2)
                .then(function(response){
                    let data = response.json();
                return data;
                })
                .then(function(data){
                    var city = data.location.name;
                    var country = data.location.country;
                    var temperature = data.current.temperature;
                    var icon = data.current.weather_icons[0];
                    var description = data.current.weather_descriptions[0];
            
                console.log(city,country,temperature,description,icon);

                $('.icon').attr('src',icon);
                $('.temp').append(temperature).append('º');
                $('.weather-des').append(description);
                $('.city').append(city).append(', ').append(country);

               
        });  
       

    })
        
    }

    /*** Chama uma API que obtém dados relativos ao Covid-19, através do input do código do país do qual pretendemos obter 
     esses dados */
    function getCovid(event){

        

      
        countryCode = document.getElementById("country-input").value;

        event.preventDefault();

        console.log(countryCode);


        const url=`https://corona-api.com/countries/${countryCode}`;

        



        fetch(url)
                .then(function(response){
                    let data = response.json();
                return data;
                })
                .then(function(data){
                    var totalConfirmed = data.data.latest_data.confirmed;
                    var totalRecovered = data.data.latest_data.recovered;
                    var totalDeaths = data.data.latest_data.deaths;
                    var date = data.data.timeline[0].date;
                    var newCases = data.data.today.confirmed;
                    var deaths = data.data.today.deaths;
                    
            
                //console.log(totalConfirmed, totalRecovered, totalDeaths, date,newCases,deaths);

                
                $('.confirmed').html(`Total confirmed: ${totalConfirmed}`);
                $('.recovered').html(`Total recovered: ${totalRecovered}`);
                $('.death').html(`Total deaths: ${totalDeaths}`);
                $('.updated').html(`Date: ${date}`)
                $('.newConfirmed').html(`New cases: ${newCases}`);
                $('.newDeaths').html(`New deaths: ${deaths}`);



            
        });  
        
        
    }

    


