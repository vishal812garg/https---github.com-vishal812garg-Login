const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyparser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

require("../src/db/Database");
const Register = require("../src/models/Schema");

// const index_path = path.join(__dirname, "../public");

// app.use(express.static(index_path));
 const templets_path = path.join(__dirname, "../templets/views");
 const partials_path = path.join(__dirname, "../templets/partials");



app.set("view engine", "hbs");
app.set("views", templets_path);
app.use(bodyparser.urlencoded({extended:true}));
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) =>{
    res.render("register")
})


app.post("/register", async (req, res) => {
    try{

        // console.log(req.body.Name);
        // res.send(req.body.Name);
         
      const Password =req.body.Password;
      const ConfirPassword = req.body.ConfirPassword; 
      console.log(Password,ConfirPassword);

      if(Password == ConfirPassword) {

       const Registeration = new Register({
 
        Name:req.body.Name,
        LastName:req.body.LastName,
        Phone:req.body.Phone,
        Age:req.body.Age,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirPassword:req.body.ConfirPassword
    })
        const datasave = await Registeration.save();
        console.log(`Save Data + ${datasave}`)
         res.status(201).render("index")
    }else{
        res.send(`Password is incorrect`)
    }
    }
    catch(error){
       res.status(400).send(error) 
    }
}
)


app.listen(PORT, () => console.log(`Server has Started`))