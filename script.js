function collectInfo(){
    var iDontKnow = document.getElementById("input");
    var city = document.getElementById("city");
    city.innerHTML = "iDontKnow.value";
}

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ iDontKnow.value +'&appid=119916d024c3b4dcfbe2a545cb7be3c4')
.then(respnse => respnse.json())
.then(data =>{
    for(i=0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min-293.2)+ "°";
    }
    for(i=0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max-293.2)+ "°";
    }

    for (var i = 0; i < 5; i++){
        document.getElementById("img" + (i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
    }
})
