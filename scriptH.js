
var minCalories;
var maxCalories;

var heightC;
var ageC;
var genderC;
var weigthC;

var heightI;
var ageI;
var weigthI;


window.onload = function(){
    
    let buttonFood = document.getElementById("submit").addEventListener("click",getMealPlan);
    let buttonCalNeed = document.getElementById("calculateC").addEventListener("click",calculateCalories);
    let buttonBMI = document.getElementById("calculateB").addEventListener("click",calculateBMI);
  
}

/** 
 * Faz uma busca na API Spoonacular de receitas de comida com um minimo e máximo de calorias definido pelo utilizador, retornando as 
 * seis primeiras receitas, com o seu nome, imagem, e calorias. MAX: 150 por dia!
*/
function getMealPlan(event){
        
    minCalories = document.getElementById("minCalories").value;
    maxCalories = document.getElementById("maxCalories").value;

    event.preventDefault();
    
    const key='14e486a9e2f24438aefb95fb86b720c2';
    const url= `https://api.spoonacular.com/recipes/complexSearch?minCalories=${minCalories}&maxCalories=${maxCalories}&apiKey=${key}`


    /**Mostra os cards das receitas quando esta função é executada*/
    var recipeCards = document.getElementsByClassName("card");
    for (var i=0; i < recipeCards.length; i++) {
        recipeCards[i].setAttribute("style", "display:inherit;");
    }

     /**Aumenta o tamanho(altura) do container quando esta função é executada*/    
     document.getElementById("meal").style.height = "1250px";

    
    
    var id,id2,id3,id4,id5,id6;

        fetch(url)
            .then(function(response){
                let data = response.json();
            return data;
            })
            .then(function(data){

                id=data.results[0].id;
                var title = data.results[0].title;
                var image = data.results[0].image;
                var calories = data.results[0].nutrition.nutrients[0].amount;
                
                id2=data.results[1].id;
                var title2 = data.results[1].title;
                var image2 = data.results[1].image;
                var calories2 = data.results[1].nutrition.nutrients[0].amount;

                id3=data.results[2].id;
                var title3 = data.results[2].title;
                var image3 = data.results[2].image;
                var calories3 = data.results[2].nutrition.nutrients[0].amount;

                id4=data.results[3].id;
                var title4 = data.results[3].title;
                var image4 = data.results[3].image;
                var calories4 = data.results[3].nutrition.nutrients[0].amount;

                id5=data.results[4].id;
                var title5 = data.results[4].title;
                var image5 = data.results[4].image;
                var calories5 = data.results[4].nutrition.nutrients[0].amount;

                id6=data.results[5].id;
                var title6 = data.results[5].title;
                var image6 = data.results[5].image;
                var calories6 = data.results[5].nutrition.nutrients[0].amount;

                console.log(id,id2,id3,id4,id5,id6);
              

            $('.title1').html(`${title}`);
            $('.image1').attr('src',image);
            $('.calories1').html(`Amount: ${calories} KCal`);
        

            $('.title2').html(`${title2}`);
            $('.image2').attr('src',image2);
            $('.calories2').html(`Amount: ${calories2} KCal`);
           

            $('.title3').html(`${title3}`);
            $('.image3').attr('src',image3);
            $('.calories3').html(`Amount: ${calories3} KCal`);

            $('.title4').html(`${title4}`);
            $('.image4').attr('src',image4);
            $('.calories4').html(`Amount: ${calories4} KCal`);


            $('.title5').html(`${title5}`);
            $('.image5').attr('src',image5);
            $('.calories5').html(`Amount: ${calories5} KCal`);

            $('.title6').html(`${title6}`);
            $('.image6').attr('src',image6);
            $('.calories6').html(`Amount: ${calories6} KCal`);


        
            const url2=`https://api.spoonacular.com/recipes/informationBulk?ids=${id},${id2},${id3},${id4},${id5},${id6}&apiKey=14e486a9e2f24438aefb95fb86b720c2`
           
            fetch(url2)
                .then(function(response){
                let data = response.json();
                    return data;
                })
                .then(function(data){
                    var urlRecipe=data[0].spoonacularSourceUrl;
                    var urlRecipe2=data[1].spoonacularSourceUrl;
                    var urlRecipe3=data[2].spoonacularSourceUrl;
                    var urlRecipe4=data[3].spoonacularSourceUrl;
                    var urlRecipe5=data[4].spoonacularSourceUrl;
                    var urlRecipe6=data[5].spoonacularSourceUrl;
                   

                    console.log(urlRecipe);
                    console.log(urlRecipe2);
                    console.log(urlRecipe3);
                    console.log(urlRecipe4);
                    console.log(urlRecipe5);
                    console.log(urlRecipe6);
                


                    document.getElementById('recipe').setAttribute('href', urlRecipe);   
                    document.getElementById('recipe2').setAttribute('href', urlRecipe2);
                    document.getElementById('recipe3').setAttribute('href', urlRecipe3);
                    document.getElementById('recipe4').setAttribute('href', urlRecipe4);
                    document.getElementById('recipe5').setAttribute('href', urlRecipe5);
                    document.getElementById('recipe6').setAttribute('href', urlRecipe6);
                   
                    
        
            });    
        
    }); 
    

}

/** Utiliza a API fitness-calculator para calcular o valor IMC e retornar a informação relativa ao resultado obtido.
 * 
 * 
*/
function calculateBMI(event){

     //Obtém os inputs do utilizador fornecidos no formulário
     heightI = document.getElementById("heightI").value;
     ageI = document.getElementById("ageI").value;
     weigthI = document.getElementById("weigthI").value;


    event.preventDefault();


    fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${ageI}&height=${heightI}&weight=${weigthI}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bf678e5d9bmsh77a5fd8f2ed33d9p171431jsn8dfe8f67d090",
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com"
	}
    })
    .then(response => {
        console.log(response);
        let data = response.json();
            return data;
    })
    .then(function(data){
        console.log(data);
        var bmi = (data.bmi).toFixed(1); //Arredonda para uma casa decimal
        var health = data.health;
        var healthyBMI = data.healthy_bmi_range;
        console.log(bmi,health,healthyBMI);


        $('.ibm').html(`IBM: ${bmi}`);
        $('.health').html(`Health: ${health}`);
        $('.healthyBMI').html(`Ideal BMI Range: ${healthyBMI}`);
    })  
    .catch(err => {
        console.error(err);
    });

}
/** 
 * Utiliza a API fitness-calculator para calcular as calories necessárias diárias, de acordo com o tipo de atividade 
 * física realizada, e o objetivo pretendido(perda, aumento ou manutenção de peso). 
 * 
*/

function calculateCalories(event){


    //Obtém os inputs do utilizador fornecidos no formulário
    heigth = document.getElementById("heigth").value;
    ageC = document.getElementById("ageC").value;
    genderC = document.getElementById("genderC").value;
    weight = document.getElementById("weight").value;
    var intensity = document.getElementById("level").value;
    var goal = document.getElementById("goal").value;
   
   
    event.preventDefault();

    console.log(heigth);
    console.log(weight);
    
   
    fetch(`https://fitness-calculator.p.rapidapi.com/macrocalculator?activitylevel=${intensity}&height=${heigth}&weight=${weight}&gender=${genderC}&age=${ageC}&goal=${goal}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "bf678e5d9bmsh77a5fd8f2ed33d9p171431jsn8dfe8f67d090"
	    }
    })
    .then(response => {
    
        console.log(response);
            let data = response.json();
                return data;
    })
    .then(function(data){

        var calories = Math.round(data.calorie); //Arrendonda o valor das calorias a um inteiro.  

        $('.caloriesNeed').html(`Calories Goal: ${calories}`);

    })

    .catch(err => {
	console.log(err);
    });  

    
}





