const express = require('express');
const port = 5000;

const app = express();



app.get('/', (req, res) => {
    res.send({message: "random idea root page"});
});

const ideasRouter = require('./routes/ideas');
app.use('/api/data',ideasRouter);

app.listen(port, ()=> {
    console.log(`server is listening to the port ${port}`);
});