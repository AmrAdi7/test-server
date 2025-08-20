import express, { request, response } from 'express';

const app = express();

const PORT = 5000;



// end points
app.get("/",(request,response)=> {
    response.send("home route");
})

app.get("/test",(request,response)=> {
    response.json({test: "test"})
})

app.use((req,res)=> {
    res.status(404).json({message: "route not found"})

})


app.listen(PORT, ()=> {
    console.log('server is listening');
})

