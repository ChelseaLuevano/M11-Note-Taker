const fs = require('fs')
const util = require('util')

// package to create random ID
const uuid = require('uuid/v1');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFile('db/db.json','utf-8')
    }
    
    write(note){
        return writeFile('db/db.json', JSON.stringify(note))
    }

    getAllNotes(){
        return this.read().then((notes)=>{
            let parsedNotes;
            try{
                parsedNotes = [].concat(JSON.parse(notes))
            }
            catch(err){
                parsedNotes = [];
            }
        return parsedNotes;    
        })
    }

    addNote(note){
        const {title, text} = note
        if(!title || !text) {
            throw new Error("Title and Text cannot be blank")
        }
        const newNote = {title, text, id:uuid()}   
        return this.getAllNotes()
            .then((notes)=>[...notes, newNote]) 
            .then((updatedNotes)=> this.write(updatedNotes))
            .then(()=> newNote)
    }

    removeNote(id){
        return this.getAllNotes()
            .then((notes)=> notes.filter((note)=> note.id !== id ))
            .then((filteredNotes)=> this.write(filteredNotes))
    }
}

module.exports = new Store();