
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
                
           

            $('.title1').append(title);
            $('.image1').attr('src',image);
            $('.calories1').append('Amount: ').append(calories).append(' Kcal');
        

            $('.title2').append(title2);
            $('.image2').attr('src',image2);
            $('.calories2').append('Amount: ').append(calories2).append(' Kcal');
           

            $('.title3').append(title3);
            $('.image3').attr('src',image3);
            $('.calories3').append('Amount: ').append(calories3).append(' Kcal');

            $('.title4').append(title4);
            $('.image4').attr('src',image4);
            $('.calories4').append('Amount: ').append(calories4).append(' Kcal');


            $('.title5').append(title5);
            $('.image5').attr('src',image5);
            $('.calories5').append('Amount: ').append(calories5).append(' Kcal');

            $('.title6').append(title6);
            $('.image6').attr('src',image6);
            $('.calories6').append('Amount: ').append(calories6).append(' Kcal');


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


                    document.getElementById('recipe').setAttribute('href', urlRecipe);   //1 to 3 not working
                    document.getElementById('recipe2').setAttribute('href', urlRecipe2);
                    document.getElementById('recipe3').setAttribute('href', urlRecipe3);
                    document.getElementById('recipe4').setAttribute('href', urlRecipe4);
                    document.getElementById('recipe5').setAttribute('href', urlRecipe5);
                    document.getElementById('recipe6').setAttribute('href', urlRecipe6);
                    
        
            });    
        
    }); 
    

}

/** Utiliza a API fitness-calculator para calcular o valor BMI e retornar a informação relativa ao resultado obtido.
 * 
 * ATENÇÃO: Adicionar introdução de inputs age, height e weight
 * Fazer BMIbox -> colocar ao lado da outra -> Criar variáveis -> etc 
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


        $('.ibm').append("IBM: ").append(bmi);
        $('.health').append("Health: ").append(health);
        $('.healthyBMI').append("Ideal BMI Range: ").append(healthyBMI);
    })  
    .catch(err => {
        console.error(err);
    });

}
/** 
 * Utiliza a API fitness-calculator para calcular as calories necessárias diárias, de acordo com o tipo de atividade física realizada.
 * 
*/

function calculateCalories(event){


    //Obtém os inputs do utilizador fornecidos no formulário
    heigthC = document.getElementById("heigthC").value;
    ageC = document.getElementById("ageC").value;
    genderC = document.getElementById("genderC").value;
    weigthC = document.getElementById("weigthC").value;
   
    event.preventDefault();
    
    fetch(`https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=${heigthC}&age=${ageC}&gender=${genderC}&weigth=${weigthC}`, {
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
        //console.log(data);
        //var bmr = Math.round(data.bmr);
        var one = Math.round(data.data["Sedentary: little or no exercise"]);
        var two = Math.round(data.data["Exercise 1-3 times/week"]);
        var three = Math.round(data.data["Exercise 4-5 times/week"]);
        var four = Math.round(data.data["Intense exercise 6-7 times/week"]);
        var five = Math.round(data.data["Daily exercise or intense exercise 3-4 times/week"]);
        var six = Math.round(data.data["Very intense exercise daily, or physical job"]);
        
        //console.log(one,two,three,four,five,six);


        /*Obtém o valor obtido no select do formulário, no tópico relativo à atividade física realizada
        */
        var intensity = document.getElementById("level").value;
        //console.log(intensity);

        /**
         * De acordo com o value atribuido no formulário, determina qual o valor a mostrar, ou seja, as calorias
         * diárias necessárias de acordo com a atividade física realizada
         */
        if (intensity == 1){
            $('.caloriesNeed').append("Calories Goal: ").append(one).append(" KCal");
        } else if (intensity == 2){
            $('.caloriesNeed').append("Calories Goal: ").append(two).append(" KCal");
        } else if (intensity == 3){
            $('.caloriesNeed').append("Calories Goal: ").append(three).append(" KCal");
        } else if (intensity == 4){
            $('.caloriesNeed').append("Calories Goal: ").append(four).append(" KCal");
        } else if (intensity == 5){
            $('.caloriesNeed').append("Calories Goal: ").append(five).append(" KCal");
        } else {
            $('.caloriesNeed').append("Calories Goal: ").append(six).append(" KCal");
        }
        
    })  
    .catch(err => {
        console.error(err);
    });
   
    

}
