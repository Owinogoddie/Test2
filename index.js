const express = require('express');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');

const annotationRoutes=require('./routes/annotationRoutes')

const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.get('/api/register',(req,res)=>{
  
  res.json({data:'dadadadadada'})
})

app.get('/', (req, res) => {

    res.json({message:'Hello World!'
});
  });




app.use('/api/annotations',annotationRoutes)

mongoose.connect("mongodb+srv://Owinogoddie:goddythedevninja@cluster0.ywulxup.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{  

app.listen(process.env.PORT,()=>{
    console.log(`connected to db and app running on ${process.env.PORT}`)
})

})
.catch((error)=>{
    console.log(error)
})
