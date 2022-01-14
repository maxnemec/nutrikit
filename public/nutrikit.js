var proteins = ["steak", "ground beef", "chicken", "fish", "soy"];
var fruits = ["orange", "banana", "pineapple", "grapes", "blueberries"];
var vegetables = ["romaine", "green beans", "squash", "spinach", "kale"];
var dairy = ["milk", "yogurt", "cheddar cheese", "skim milk", "cottage cheese"];
var grains = ["bread", "bagel", "pita", "naan", "tortilla"];

localStorage.setItem("proteins", JSON.stringify(proteins));
localStorage.setItem("fruits", JSON.stringify(fruits));
localStorage.setItem("vegetables", JSON.stringify(vegetables));
localStorage.setItem("dairy", JSON.stringify(dairy));
localStorage.setItem("grains", JSON.stringify(grains));

localStorage.setItem("steak", "300");
localStorage.setItem("ground beef", "200");
localStorage.setItem("chicken", "100");
localStorage.setItem("fish", "80");
localStorage.setItem("soy", "50");

localStorage.setItem("orange", "300");
localStorage.setItem("banana", "200");
localStorage.setItem("pineapple", "100");
localStorage.setItem("grapes", "80");
localStorage.setItem("blueberries", "50");

localStorage.setItem("romaine", "30");
localStorage.setItem("green beans", "40");
localStorage.setItem("squash", "100");
localStorage.setItem("spinach", "50");
localStorage.setItem("kale", "10");

localStorage.setItem("milk", "300");
localStorage.setItem("yogurt", "200");
localStorage.setItem("cheddar cheese", "200");
localStorage.setItem("skim milk", "100");
localStorage.setItem("cottage cheese", "80");

localStorage.setItem("bread", "200");
localStorage.setItem("bagel", "300");
localStorage.setItem("pita", "250");
localStorage.setItem("naan", "210");
localStorage.setItem("tortilla", "120");

function getFoods()
{
    foodbox = document.getElementById("foodbox");
    foodGroupList = document.getElementById("foodGroupList");
    currentFoodGroup = foodGroupList.value;
    defaultSelect = document.getElementById("default");

    var foods = JSON.parse(localStorage.getItem(currentFoodGroup));

    foodbox.length = 0;

    for(const food of foods)
    {
    
        var option = document.createElement('option');
        option.value = food;
        option.text = food;
        foodbox.add(option);
    }
    
}

function addItem()
{
    selectedBox = document.getElementById("selectedBox");


    foodbox = document.getElementById("foodbox");
    foodToAdd = foodbox.value;
    totalCaloriesLabel = document.getElementById("totalCalories");
    // console.log(foodToAdd)
    caloriesToAdd = parseInt(localStorage.getItem(foodToAdd));
    currCalories = parseInt(totalCaloriesLabel.innerHTML);

    // console.log(currCalories)
    // console.log(caloriesToAdd)

    totalCaloriesLabel.innerHTML = (currCalories + caloriesToAdd).toString();

    var option = document.createElement("option");
    option.value = foodToAdd;
    option.text = foodToAdd;


    selectedBox.add(option);
}

function removeItem()
{
    selectedBox = document.getElementById("selectedBox");
    foodToRemove = selectedBox.value;
    totalCaloriesLabel = document.getElementById("totalCalories");
    caloriesToRemove = parseInt(localStorage.getItem(foodToRemove));
    currCalories = parseInt(totalCaloriesLabel.innerHTML);
    
    totalCaloriesLabel.innerHTML = (currCalories - caloriesToRemove).toString();

    
    

    for(i = 0; i < selectedBox.length; i++)
    {
        console.log("option: " + selectedBox.options[i].value);
        console.log("foodToRemove: " + foodToRemove);
        if(selectedBox.options[i].value === foodToRemove)
        {
            selectedBox.remove(i);
            break;
        }
    }




}

function updateButton(select)
{
    console.log(select.id);

    button = document.getElementById("updateButton");

    

    if(select.id == "foodbox")
    {
        button.innerHTML = ">>";
        button.setAttribute("onClick", "javascript: addItem();");
    }
    else
    {
        button.innerHTML = "<<";
        button.setAttribute("onClick", "javascript: removeItem();")
    }

    


}
