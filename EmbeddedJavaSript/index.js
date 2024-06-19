const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Ensure this points to your views directory

const port = 3000;

app.get("/", (req, res) => {
    const d = new Date();
    let seconds = d.getSeconds();
    let fruits = ["Apple", "Banana", "Berry", "Cherry"];
    let items;

    for (let i=0; i<fruits.length; i++){
    if (seconds %2 === 0){
        items= fruits;
    } else {
        items = "No Items to display";
    };
}
    const data = {
        title: 'EJS Tags',
        seconds: seconds,
        items: fruits,
        htmlContent: "Some Text",
    };
    res.render("footer.ejs", {
        data: data,
        // seconds: seconds,
        // items: items,
    });
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})