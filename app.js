const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){



    res.sendFile(__dirname + "/index.html");

//     const url = "https://api.openweathermap.org/data/2.5/weather?appid=9d17726e5447c549c2eaf4cfc20d4e83&q=London&units=metrics";
//     https.get(url,function(response){
//         //console.log("response");
//         console.log(response.statusCode);
//         response.on("data",function(data){
//             //console.log(data);
//             //const weatherData = JSON.parse(data)
//             //console.log(weatherData);


//             // const weatherData = JSON.parse(data)
//             // const objects = {
//             //     name: "Chandu",
//             //     place: "Eluru"
//             // }
//             // console.log(JSON.stringify(objects));

//             const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp;
//             const weatherdes = weatherData.weather[0].description;
//             //res.send("The temperature in london is" + temp); // res.send can be use at a single time it basically luke the end so to use more than one use both res.write() then use res.send atlast
//             res.write("The temperature in london is" + temp);
//             res.write("The weather description is "+ weatherdes);
//             res.send();

//         })
//     })
//    // res.send("HI BB");



});

app.post("/",function(req,res){
    console.log("Data receivedd");
    const query = req.body.cityName;
    console.log(req.body.cityName);
    // const query = "London";
    const apikey = "9d17726e5447c549c2eaf4cfc20d4e83";
    const unit = "metrics";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+ apikey +"&q=" + query + "&units=" + unit;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const tempp = weatherData.main.temp;
            const weatherdes = weatherData.weather[0].description;
            console.log(tempp);
            res.write("The temperature in london is" + tempp);
            res.write("The weather description is "+ weatherdes);
            res.send();

        })
    })
});




app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
