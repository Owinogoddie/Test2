const express = require('express');
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


app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
