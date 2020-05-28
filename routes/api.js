var router = require('express').Router()
var db = require('../db/db')
router.get('/notes', function(request,response){
    db.getNotes().then(function (allNotes){
        response.json(allNotes)
    })

    .catch(err => response.json(err))
    
})

router.post('/notes',(request,response)=> {
db.add(request.body).then(function(userInput){
    response.json(userInput);
    console.log(request.body);
})
.catch(err => response.json(err))
})
module.exports=router