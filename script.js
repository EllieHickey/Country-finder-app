var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/Countries%20and%20Territories.csv"
var region = getColumn(url, 4);
var GDP = getColumn(url, 9);
var incomeLevel = getColumn (url, 5);
var countries = getColumn (url, 1);

function getResults (selectedIncome, selectedRegion, selectedGDP ) {

    // console.log (selectedIncome);
    // console.log(incomeLevel[0])
    // console.log (selectedRegion);
    // console.log(region[0])
    // console.log (selectedGDP);


    //finds income and if it matches up with the selected value it prints 
    var matchingIncome =[];
    for (var i = 0; i< incomeLevel.length; i++){
        // console.log(region[i])
        if (incomeLevel[i] == selectedIncome && region[i] == selectedRegion ){
            matchingIncome.push(countries[i]);    
        }
    }
    console.log (matchingIncome)
    //finds region and if it matches up with the selected value it prints 
    // var matchingRegion =[];
    // for (var i = 0; i<= region.length; i++){
    //     if (region[i] == selectedRegion){

    //     matchingRegion.push(countries[i]);}
    // }
}

//to do: 
//get the parameters situated 
//divide the GDP into High Mid Low 
//Low <1,200, 10,000 >Mid > 1,200, high >10,000
//region is straight forward