var displayed_recipes = [];

function displayLink(desiredRecipes){
  console.log("Displaylink");
  for (let r of displayed_recipes){
    var recipe = document.getElementById(r);
    if(recipe){
      console.log("Trying to hide" + r);
      recipe.style.display = "none";
    }
  }
  displayed_recipes=[];
  for (rec in desiredRecipes){
    var recipe = document.getElementById(rec);
    recipe.style.display = "block";
    console.log("Displaying" + recipe);
    displayed_recipes.push(rec);
  }
  console.log('displayed:' + displayed_recipes);
  debugger;
  console.log('desired' + desiredRecipes);
  debugger;
}


function helloWorld() {
  console.log("hello world");
  var numPeople = document.getElementById("servings").value;
  var maxPrice = document.getElementById("budget").value;
  findRecipes(numPeople, maxPrice);
}

var recipe=[[1.128, 1, "ChickenSoup.txt"],
[1.1775,  1, "FrenchOnionSoup.txt"],
[1.0915, 1, "PotatoSoup.txt"],
[0.938, 1, "VegetableSoup.txt"],
[2.44, 1, "MinestroneSoup.txt"]]

function findRecipes (numPeople, maxPrice){
  var desiredRecipes = {};

  if (numPeople && maxPrice){

    maxPrice*=1;
    for (i=0; i<recipe.length; i++){
      var price = recipe[i][0]*numPeople;
      if (price<=maxPrice){
        desiredRecipes[recipe[i][2]] = price;
      }

    }
  }
  else if (numPeople){
    for (i=0; i<recipe.length; i++){
      var price = recipe[i][0]*numPeople;
      desiredRecipes[recipe[i][2]] = price;
    }
  }
  else if (maxPrice){
    maxPrice *=1;
    for (i=0; i<recipe.length; i++){
      var servings = maxPrice/recipe[i][0];
      desiredRecipes[recipe[i][2]] = servings;
    }
  }
  console.log("Calling display link!");
  displayLink(desiredRecipes);
  console.log("Out of display link!");
  debugger;
}
