// declare function collect info
function collectInfo(){
    var newName = document.getElementById("cityInput");
    var city = document.getElementById("city");
    city.innerHTML = newName.value;
console.log(newName.value);
    
// using fetch method to get information from openweather api key and then transmit to json and than using for loop to get min and max value for 5 days.

// only new york is coming after that newNmae.value comes on screen --------------
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ newName.value +'&appid=119916d024c3b4dcfbe2a545cb7be3c4')
.then(response => response.json())
.then(data =>{
    for(i=0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min-293.2).toFixed(2)+ "°";
    }
    for(i=0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max-293.2).toFixed(2)+ "°";
    }
    // this link is not working below-------------
    for (var i = 0; i < 5; i++){
        document.getElementById("img" + (i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
    }
    console.log(data);
})
}



function mainScreen(){
    document.getElementById("cityInput").defaultValue = "New York";
    collectInfo();
}
console.log(mainScreen);

var date = new Date();
var workingWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",];

function inspectDay(day){
    if(day + date.getDay()>6){
        return day +
    }
}