var fs = require('fs');
var utility = require('util');
var uuidv1 = require('uuid/v1');
var readFile = utility.promisify(fs.readFile);
var writeFile = utility.promisify(fs.writeFile);


class DB{
    read(){
        return readFile ('db/db.json','utf8')
    }
    write(note){
        return writeFile ('db/db.json',JSON.stringify(note))
    }
    getNotes () {
        return this.read().then(notes => {
            let parsedNotes;
            try { parsedNotes =[].concat(JSON.parse(notes)) 

            }
            catch (err){
                parsedNotes = []

            }
            return parsedNotes
        })

    }
    add(note){
        var title = note.title;
        var text = note.text;
        if (!title||!text) {
            throw  new Error ("Please enter contents before saving");
        }

        var newnote = {

            title,
            text,
            id: uuidv1 ()
        }
        return this.getNotes().then(function(allNotes){
            [...allNotes,newnote]
            
        })
        .then(function(combinedNotes){
            this.write(combinedNotes).then(()=>newnote)
            console.log(newnote)
    
        })
       
    }
}
module.exports = new DB()