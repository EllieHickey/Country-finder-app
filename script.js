
// // this is the url it contains the information for all the country information
// var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/Countries%20and%20Territories.csv"
// // these find index # of the column 
// var region = getColumn(url, 4);
// var GDP = getColumn(url, 9);
// var incomeLevel = getColumn (url, 5);

// // function takes 3 parameters
// // find matching values from the list 
// function getResults (selectedIncome, selectedRegion, selectedGDP ) {
// // prints column 5
// console.log (selectedIncome);
// // prints column 4
// console.log (selectedRegion);
// // prints column 9
// console.log (selectedGDP);


// //finds income and if it matches up with the selected value it prints 

// // stores income levels list 
// var matchingIncome =[];
// //loops through column 5 so incme level 
// for (var i = 0; i<= incomeLevel.length; i++){
// // checks for if income level matches income selected
//     if (incomeLevel[i] == selectedIncome){
// // if Income is true then it gets added to the Matching Income
//     matchingIncome.push(incomeLevel[i]);}
// }
// //finds region and if it matches up with the selected value it prints 

// // this list stores the Regions
// var matchingRegion =[];
// //Loops through list to to find the same Regions
// for (var i = 0; i<= region.length; i++){
// // ckes for if region matches region selected
//     if (region[i] == selectedRegion){
// // if region is matching it adds this to the matchingRegion
//     matchingRegion.push(region[i]);}
// }
// }



//to do: 
//get the parameters situated 
//divide the GDP into High Mid Low 
//Low <1,200, 10,000 >Mid > 1,200, high >10,000
//region is straight forward
// if (GDP <= 1,200){
// GDP == Low
// do it as a while loop 



var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/Countries%20and%20Territories.csv"
var region = getColumn(url, 4);
var GDP = getColumn(url, 9);
var incomeLevel = getColumn (url, 5);
var countries = getColumn (url, 1);
var flag = getColumn (url, 13);

function getResults (selectedIncome, selectedRegion, selectedGDP ) {


    //finds income and if it matches up with the selected value it prints 
    var matchingIncome =[];
    var matchingImage =[];
    for (var i = 0; i< incomeLevel.length; i++){
// console.log(region[i])
        if (incomeLevel[i] == selectedIncome && region[i] == selectedRegion ){
            matchingIncome.push(countries[i]); 
            matchingImage.push(flag[i]); 

     }
    }
    console.log (matchingIncome)
    console.log (matchingImage)
//finds region and if it matches up with the selected value it prints 
// var matchingRegion =[];
// for (var i = 0; i<= region.length; i++){
//     if (region[i] == selectedRegion){

//     matchingRegion.push(countries[i]);}
// }
}

//to do: 
//divide the GDP into High Mid Low 
//Low <1,200, 10,000 >Mid > 1,200, high >10,000





