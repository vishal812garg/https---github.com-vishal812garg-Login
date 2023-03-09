const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vishal:vishal@mongodbtutorial.eowucbc.mongodb.net/?retryWrites=true&w=majority", {
     
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // useCreateIndex : true
    
}).then(() => {
    console.log(`connection sucess`)

}).catch((e) => {
    console.log(`error`)
})



