var tvsearch;

inTheaters();
getBooksBS();

window.onload = function(){
      
    document.getElementById("submitM").addEventListener("click",getMovie);
     
}
/**
 *  Faz um pedido à API TheMovieDB que retorna os filmes em cartaz, na semana atual. 
 */

function inTheaters(){
    
    const key='2a79881ec32301f25df0803432b96e07';
    const url= `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    

        fetch(url)
            .then(function(response){
                let data = response.json();
            return data;
            })
            .then(function(data){
                var title = data.results[0].title;
                var plot = data.results[0].overview;
                var rating = data.results[0].vote_average; 
                var posterPath = data.results[0].poster_path;
                var poster = "http://image.tmdb.org/t/p/original" + posterPath;

                var title2 = data.results[1].title;
                var plot2 = data.results[1].overview;
                var rating2 = data.results[1].vote_average; 
                var posterPath2 = data.results[1].poster_path;
                var poster2 = "http://image.tmdb.org/t/p/original" + posterPath2;

                var title3 = data.results[2].title;
                var plot3 = data.results[2].overview;
                var rating3 = data.results[2].vote_average; 
                var posterPath3 = data.results[2].poster_path;
                var poster3 = "http://image.tmdb.org/t/p/original" + posterPath3;

                var title4 = data.results[3].title;
                var plot4 = data.results[3].overview;
                var rating4 = data.results[3].vote_average; 
                var posterPath4 = data.results[3].poster_path;
                var poster4 = "http://image.tmdb.org/t/p/original" + posterPath4;

                var title5 = data.results[4].title;
                var plot5 = data.results[4].overview;
                var rating5 = data.results[4].vote_average; 
                var posterPath5 = data.results[4].poster_path;
                var poster5 = "http://image.tmdb.org/t/p/original" + posterPath5;
                console.log(title5)

                var title6 = data.results[5].title;
                var plot6 = data.results[5].overview;
                var rating6 = data.results[5].vote_average; 
                var posterPath6 = data.results[5].poster_path;
                var poster6 = "http://image.tmdb.org/t/p/original" + posterPath6;
 
                   
                $('.titleT').append(title);
                $('.plotT').append(plot);
                $('.ratingT').append("Ratings: ").append(rating).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:22px; margin:3px; position: relative; top: -3px;" />');
                $('.posterT').attr('src',poster);

                $('.titleT2').append(title2);
                $('.plotT2').append(plot2);
                $('.ratingT2').append("Ratings: ").append(rating2).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:22px; margin:3px; position: relative; top: -3px;" />');
                $('.posterT2').attr('src',poster2);

                $('.titleT3').append(title3);
                $('.plotT3').append(plot3);
                $('.ratingT3').append("Ratings: ").append(rating3).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:22px; margin:3px; position: relative; top: -3px;" />');
                $('.posterT3').attr('src',poster3);

                $('.titleT4').append(title4);
                $('.plotT4').append(plot4);
                $('.ratingT4').append("Ratings: ").append(rating4).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:22px; margin:3px; position: relative; top: -3px;" />');
                $('.posterT4').attr('src',poster4);

                $('.titleT5').append(title5);
                $('.plotT5').append(plot5);
                $('.ratingT5').append("Ratings: ").append(rating5).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:22px; margin:3px; position: relative; top: -3px;" />');
                $('.posterT5').attr('src',poster5);


                $('.titleT6').append(title6);
                $('.plotT6').append(plot6);
                $('.ratingT6').append("Ratings: ").append(rating6).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:22px; margin:3px; position: relative; top: -3px;" />');
                $('.posterT6').attr('src',poster6);           
          
        });    

}



/**
 * Procura informações na API OMDB de filmes, ou séries, através do input fornecido pelo utilizador.  
 */
function getMovie(event){

    tvsearch = document.getElementById("media-input").value;

    /**Caso o valor do input seja nulo, a função não retorna nada*/
    if( document.getElementById('media-input').value === '' ){
        alert('The search bar is empty!');
        return;
    }

    event.preventDefault();

    const key='e13b7a2c';
    const url= `http://www.omdbapi.com/?apikey=${key}&t=${tvsearch}`
    
    
  

        fetch(url)
            .then(function(response){
                let data = response.json();
            return data;
            })
            .then(function(data){
                var title = data.Title;
                var year = data.Year;
                var realease = data.Released;
                var runtime = data.Runtime;
                var rated = data.Rated;
                var genre = data.Genre;
                var director = data.Director;
                var writer = data.Writer;
                var cast = data.Actors;
                var plot = data.Plot;
                var awards = data.Awards;
                var poster = data.Poster;
                var imdbRating = data.imdbRating; 

                   
                $('.title').html(`Title: ${title}`);
                $('.year').html(`Year: ${year}`);
                $('.realease').html(`Date of realease: ${realease}`);
                $('.runtime').html(`Runtime: ${runtime}`);
                $('.rated').html(`Rated: ${rated}`);
                $('.genre').html(`Genre: ${genre}`);
                $('.director').html(`Director: ${director}`);
                $('.writer').html(`Writer: ${writer}`);
                $('.cast').html(`Cast: ${cast}`);
                $('.plot').html(`Plot: ${plot}`);
                $('.awards').html(`Awards: ${awards}`);

                //A inserção da estrela junto da avaliação do IMDB é realizada através do append de uma imagem
                $('.imdbRating').html(`IMDB Rating: ${imdbRating}`).append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" style="width:auto; max-height:23px; margin:3px; position: relative; top: -2px;" />');;
                $('.poster').attr('src',poster);

                //Apaga o valor do input após pesquisar e obter a sua informação
                document.getElementById("media-input").value = '';
                
                
                
        });    
       

}

/**
 * Procura os livros Best Sellers da semana atual, na API do  New York Times.
 */

function getBooksBS(){
    
    const key='ne8GIs9OtIxio5VBMp5eSwhMTXR6DCx8';
    const url= `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${key}`
    

        fetch(url)
            .then(function(response){
                let data = response.json();
            return data;
            })
            .then(function(data){
                var title = data.results.lists[0].books[0].title;
                var author = data.results.lists[0].books[0].author;
                var overview = data.results.lists[0].books[0].description;
                var bookImage = data.results.lists[0].books[0].book_image;
                var buy = data.results.lists[0].books[0].amazon_product_url;

                var title2 = data.results.lists[1].books[0].title;
                var author2 = data.results.lists[1].books[0].author;
                var overview2 = data.results.lists[1].books[0].description;
                var bookImage2 = data.results.lists[1].books[0].book_image;
                var buy2 = data.results.lists[1].books[0].amazon_product_url;

                var title3 = data.results.lists[0].books[1].title;
                var author3 = data.results.lists[0].books[1].author;
                var overview3 = data.results.lists[0].books[1].description;
                var bookImage3 = data.results.lists[0].books[1].book_image;
                var buy3 = data.results.lists[0].books[1].amazon_product_url;

                var title4 = data.results.lists[1].books[1].title;
                var author4 = data.results.lists[1].books[1].author;
                var overview4 = data.results.lists[1].books[1].description;
                var bookImage4 = data.results.lists[1].books[1].book_image;
                var buy4 = data.results.lists[1].books[1].amazon_product_url;

                var title5 = data.results.lists[0].books[2].title;
                var author5 = data.results.lists[0].books[2].author;
                var overview5 = data.results.lists[0].books[2].description;
                var bookImage5 = data.results.lists[0].books[2].book_image;
                var buy5 = data.results.lists[0].books[2].amazon_product_url;

                var title6 = data.results.lists[1].books[2].title;
                var author6 = data.results.lists[1].books[2].author;
                var overview6 = data.results.lists[1].books[2].description;
                var bookImage6 = data.results.lists[1].books[2].book_image;
                var buy6 = data.results.lists[1].books[2].amazon_product_url;


               
                $('.titleB').append(title);
                $('.authorB').append(author);
                $('.overviewB').append(overview);
                $('.bookImage').attr('src',bookImage);


                $('.titleB2').append(title2);
                $('.authorB2').append(author2);
                $('.overviewB2').append(overview2);
                $('.bookImage2').attr('src',bookImage2);

                $('.titleB3').append(title3);
                $('.authorB3').append(author3);
                $('.overviewB3').append(overview3);
                $('.bookImage3').attr('src',bookImage3);

                $('.titleB4').append(title4);
                $('.authorB4').append(author4);
                $('.overviewB4').append(overview4);
                $('.bookImage4').attr('src',bookImage4);

                $('.titleB5').append(title5);
                $('.authorB5').append(author5);
                $('.overviewB5').append(overview5);
                $('.bookImage5').attr('src',bookImage5);

                $('.titleB6').append(title6);
                $('.authorB6').append(author6);
                $('.overviewB6').append(overview6);
                $('.bookImage6').attr('src',bookImage6);


                /*Redireciona para a página do livro no Amazon quando se pressiona o botão "buy"
                atribuindo um url ao parâmetro href
                */
               document.getElementById('buy').setAttribute('href', buy);
               document.getElementById('buy2').setAttribute('href', buy2);
               document.getElementById('buy3').setAttribute('href', buy3);
               document.getElementById('buy4').setAttribute('href', buy4);
               document.getElementById('buy5').setAttribute('href', buy5);
               document.getElementById('buy6').setAttribute('href', buy6);
               
                       
          
        });    

}









