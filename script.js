var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/Countries%20and%20Territories.csv"
var region = getColumn(url, 4);
var GDP = getColumn(url, 9);
var incomeLevel = getColumn (url, 5);
var countries = getColumn (url, 1);
var flag = getColumn (url, 13);
//fertility rate is at index 7

function getResults (selectedIncome, selectedRegion, selectedGDP ) {
    var GDPSections = "" //what do I put into the parenthesis?
    if (selectedGDP == "Low"){
        GDPSections = 0
    }

    else if (selectedGDP == "Medium"){
        GDPSections = 1200
    }
    else if (selectedGDP == "High"){
        GDPSections = 10000
    }

    //finds income and if it matches up with the selected value it prints 
    var matchingCountries =[];
    var matchingImage =[];
    for (var i = 0; i< incomeLevel.length; i++){
// console.log(region[i])
        if (incomeLevel[i] == selectedIncome && region[i] == selectedRegion && GDPSections <= GDP[i]){
            matchingCountries.push(countries[i]);
            matchingImage.push(flag[i]);

     }
    }
    console.log (matchingCountries);
    console.log (matchingImage);
 

document.getElementById("outputBox").innerHTML = "";
//loop through the list of matching countries and add them to the output box
for (var i = 0; i <  matchingCountries.length; i++){
 
    //this time we have to create new image tags and stick them on the screen 1 by 1
// create a new paragraph tag for each matching name
    var countryName = document.createElement("p");
    //set the INNER HTML of that new element to be the matching dog name
    countryName.innerHTML = matchingCountries[i];
    //create a new image element
    var countryFlag = document.createElement("img")
    //set the image source to be the matching image url from the list
    countryFlag.src = matchingImage[i];
    //readjust the image size relative to the output box
    countryFlag.style.width = "50%"

    //append both the name and the image to the output box
    document.getElementById("outputBox").appendChild(countryName);
    //append the image to the output box
    document.getElementById("outputBox").appendChild(countryFlag);
}
}
//when there are no results have something to say that. idk how to do that but i can figure it out
//maybe instead of gdp use fertility rates, the highest number is 6.91