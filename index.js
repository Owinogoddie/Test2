const express = require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors())


app.get('/api/register',(req,res)=>{
  
  res.json({data:'dadadadadada'})
})

app.get('/', (req, res) => {

    res.json({message:'Hello World!'
});
  });

mongoose.connect("mongodb+srv://Owinogoddie:goddythedevninja@cluster0.ywulxup.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{  

app.listen(process.env.PORT,()=>{
    console.log(`connected to db and app running on ${process.env.PORT}`)
})

})
.catch((error)=>{
    console.log(error)
})
