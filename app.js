const express = require ('express')
const path = require("path")
const app = express ();

const viewsPath = path.resolve(__dirname,"./views");
const publiPatch = path.resolve(__dirname, "./public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(publiPatch));


app.listen ( process.env.PORT  || 3000, function (){
  console.log ("La app esta funcionando en la url http://localhost:3000")
})


app.get ("/",(req, res)=>{
  return res.sendFile(`${viewsPath}/index.html`)
})

app.get("/login", (req, res)=>{
  res.sendFile(`${viewsPath}/login.html`)
})

app.get("/register", (req, res)=>{
  res.sendFile(`${viewsPath}/register.html`)
})

app.get("/prueba", (req, res) => {
  res.sendFile(`${viewsPath}/prueba.html`)
})

