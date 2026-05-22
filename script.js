update = async function(){
    const city = document.getElementById("cityInput").value;
    const apikey="42c18c2da16001af13f5455fded660d4";
    let url="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apikey;
    const response = await fetch(url);
    const data = await response.json();
    let temp=document.querySelector(".temperature").innerHTML=Math.floor(data.main.temp) + "°C";
    let imgurl="";
    let temperature=data.main.temp;
    if(temperature<5){
        imgurl+="snow";
    }
    else if(temperature>=5 && temperature<15){
        imgurl+="cloudy";
    }
    else if(temperature>=15 && temperature<20){
        arr=["rain","drizzle"];
        let i=Math.floor(Math.random()*1);
        imgurl+=arr[i];
    }
    else if(temperature>=20 && temperature<25){
        imgurl+="mist";
    }
    else{
        imgurl+="clear";
    }
    document.getElementById("weatherImg").src="weather-app-img/images/" + imgurl + ".png";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity-value").innerHTML=data.main.humidity + "%";
    document.querySelector(".windspeed-value").innerHTML=data.wind.speed + " km/h";
}
document.getElementById("searchBtn").addEventListener("click", () => update());