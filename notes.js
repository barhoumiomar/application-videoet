const fs=require ('fs');
 function fetchNotes(){
    try{
      return JSON.parse(fs.readFileSync('notes.txt'))

    }catch(err){
        return []
    }

 }
 function addingNote(title,body){

    var notes=fetchNotes()
    var note={
         title,
         body
     }

     var double =notes.filter (note=> note.title ===title)
     if (double.length ===0){
    notes.push(note);
        fs.writeFileSync("notes.txt",JSON.stringify(notes))
    logNote(note)
    }else{
        console.log("Stop: Title already exists")
    }



 } 
 function removeNote(title){
    var notes=fetchNotes();
    var filtredNotes= notes.filter((note)=> note.title !== title)
    fs.writeFileSync("notes.txt", JSON.stringify(filtredNotes))
 } 
 function readingNote(title){
    var notes=fetchNotes();
    var filtredNotes= notes.filter((note)=> note.title === title)
 logNote(filtredNotes[0])
    //console.log( Title: ${filtredNotes[0].title} Body: ${filtredNotes[0].body})

 }
 function listingNote(){
    var notes=fetchNotes();
    notes.forEach(note=> logNote(note))
    //console.log (notes)

 }
 function logNote(note){
     console.log("**");
     console.log(` Title: ${note.title}`);
     console.log(` Body: ${note.body}`);

 }
 
 module.exports={
     addingNote,
     removeNote,
     readingNote,
     listingNote
 }