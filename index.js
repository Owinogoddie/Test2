const express = require('express');

const mongoose=require('mongoose')
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors())




app.get('/api/works', (req, res) => {

    res.json({message:'Hello World!'
});
  });


// mongoose.connect('mongodb://localhost:27017/netninja-crud')
mongoose.connect("mongodb+srv://Owinogoddie:goddythedevninja@cluster0.ywulxup.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{  

app.listen(process.env.PORT,()=>{
    console.log(`connected to db and app running on ${process.env.PORT}`)
})

})
.catch((error)=>{
    console.log(error)
})

export default app;
