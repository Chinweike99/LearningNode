const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

// const d = new Date();
// let day = d.getDay();

// function getWeekDay (){

//     // day <= 4 ? "<h1>Hey! it's a weekday, it is time to work hard<h1>" :
//     // "Hey!, It's the weekend, let us have some fun";
//     if(day <= 4){
//         return (`Hey! it's a weekday, it is time to work hard`);
//     } else {
//         return ("Hey!, It's the weekend, let us have some fun");
//     }
// }

// app.get('/', (req, res) => {
//     res.send(getWeekDay());
// })

// // app.get(getWeekDay);

// app.listen(PORT, () => {
//     console.log(`Listening to port ${PORT}`);
// });

app.set('sdss engine', 'ejs');
app.set('sdss', './sdss');

app.get("/", (req, res) => {
    const d =  new Date();
    let today = d.getDay();
    // console.log(today);

    let type = "a weekday ...";
    let adv = "It's time to work hard"
    
    if (today === 0 || today === 6){
       type = "a weekend";
       adv = "It's time to have fun"
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(PORT, () => {
    console.log(`PORT ${PORT}`);
})