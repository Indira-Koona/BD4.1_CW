let express =require("express");
let cors=require("cors");
let sqlite3=require("sqlite3").verbose();
let { open }=require("sqlite");
let app=express();
let PORT = process.env.PORT ||3000;
app.use(cors());
app.use(express.json());


let db;
(async()=>{
  db=await open({
    filename:"./BD4.1_CW/database.sqlite",
    driver:sqlite3.Database,
  });
  })();


  async function fetchAllMovies(){
    let query="select * from movies";
    let response=await db.all(query,[]);
    return { movies:response};
  }
app.get("/movies",async(req,res)=>{
  let results=await fetchAllMovies()
  res.status(200).json(results);
});


app.listen(PORT,()=>console.log("server running on port 3000"));