var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/Countries%20and%20Territories.csv"
var region = getColumn(url, 4);
var GDP = getColumn(url, 9);
var incomeLevel = getColumn (url, 5);
var countries = getColumn (url, 1);
var flag = getColumn (url, 13);


function getResults (selectedIncome, selectedRegion, selectedGDP ) {
    //setting the conditions for the gdp when low is selected and translates it to a nuemerical value so the for loop works 
    var GDPSections = "" 
    if (selectedGDP == "Low"){
        GDPSections = 0
    }
    //setting the conditions for the gdp when medium is selected and translates it to a nuemerical value so the for loop works 
//its not really working rn so play with the numbers 
    else if (selectedGDP == "Medium"){
        GDPSections = 5000
    }

    //setting the conditions for the gdp when high is selected and translates it to a nuemerical value so the for loop works 
    else if (selectedGDP == "High"){
        GDPSections = 17000
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
    //set the INNER HTML of that new element to be the matching country name
    countryName.innerHTML = matchingCountries[i];
    //create a new image element
    var countryFlag = document.createElement("img")
    //set the image source to be the matching image url from the list
    countryFlag.src = matchingImage[i];
    //readjust the image size relative to the output box
    countryFlag.style.width = "50%"

    //append both the name to the output box
    document.getElementById("outputBox").appendChild(countryName);
    //append the image to the output box
    document.getElementById("outputBox").appendChild(countryFlag);
}
}
