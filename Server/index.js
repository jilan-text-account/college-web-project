import express from "express";
import cors from "cors";
import pg from "pg";

const app=express();
const port=5000;

const db=new pg.Client({
    user:"postgres",
    host:"Localhost",
    database:"college",
    password:"Naik@220",
    port:5432,
  });
  db.connect();

app.use(express.urlencoded({extended: true}));
//app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get("/", async(req,res)=>{
    const result=await db.query("select * from students")
    const students=result.rows
    try {
        res.json(students);
    } catch (error) {
        console.log("error in getting data");
    }
});

app.post("/register", async(req,res)=>{
    const name=req.body.name
    const email=req.body.email
    const age=req.body.age
    try {
        await db.query("insert into students (name, email, age) values($1, $2, $3)",[name, email, age])
        res.json({name, email, age})
    } catch (error) {
        console.log("error");
    }
});

//for prefill data in update user details
app.get("/Student/:id", async(req,res)=>{
    const { id } =req.params;
    try {
        const result=await db.query('select * from students where id=$1', [id]);
        const student=result.rows[0]
        res.json(student)
    } catch (error) {
        console.log(error)
    }
})

app.put('/updateStudent/:id', async (req, res) => {

    const { id } = req.params; 
    const { name, email, age } = req.body; 

    try { 
        const result = await db.query( 'UPDATE students SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *', [name, email, age, id] ); 
        const students=result.rows;
        res.json(students); 
    } catch (err) { 
        console.error(err); 
        res.status(500).send('Server Error'); 
    } });

app.delete('/deletestudent/:id', async (req,res)=>{
    const {id}= req.params;
    try {
        await db.query("delete from students where id=$1", [id]);
    } catch (error) {
        console.log("err");
    }
}) 
app.listen(port, ()=>{
    console.log(`your server is listening ${port}`);
})