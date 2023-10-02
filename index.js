const express = require("express")
const port = 8000

const app = express()




app.listen(port, function(err){
    if(err){
        console.log(`error occurred : ${err}`);
    }else{
        console.log(`Server Started successfully at port ${port}`);
    }
    return;
})