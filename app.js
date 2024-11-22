console.log("Starting app.js");
const yargs=require('yargs')
const notes=require('./notes.js');
var title=yargs.argv.title;
 var body=yargs.argv.body;
 var command=yargs.argv._[0];
 if (command==="add"){
     console.log("adding note");
     notes.addingNote(title,body);
 }else if (command==="remove"){
     console.log("removing note");
     notes.removeNote(title);

}else if (command==="read"){
     console.log("reading note");
     notes.readingNote(title);

 }else if (command==="list"){
     console.log("listing note");
     notes.listingNote();
}else{
     console.log("unknown command was used!!");

 }