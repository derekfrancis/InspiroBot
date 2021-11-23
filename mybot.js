const Discord = require('discord.js') ;
const client = new Discord.Client() ; 

var Chance = require('chance');
var chance = new Chance();

var randomString = chance.string() ;

var generate; 


// User Names Dictionary

var userNames = {
  
    Derek : ["animatronic.user#2034", "Derek"],
}


var inspireList = [
   "\“You learn more from failure than from success. Don’t let it stop you. Failure builds character.\” — Unknown ",
   " \"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.\” — Steve Jobs",
   " \“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.\" — Winston Churchill"
]

S
client.on('ready', () => {
    console.log("connected as " + client.user.tag) ; 

    client.user.setActivity("Inspiring People 24x7") ;

    client.guilds.cache.forEach(element => { /// display all the servers or "guilds" that this bot is connect to
        console.log(element.name) ;

        element.channels.cache.forEach( chan => { // display channel for each guild
            console.log(`  ${chan.name} ${chan.type} ${chan.id}`);
        }) ;

    });

    // general channel id : 716423996828024845

    let generalChannel = client.channels.cache.get("697531974558023810") ; // get a channel , channel id as a parameter
    

});

client.on ('message', receivedMessage => {
    if (receivedMessage.author == client.user) {
        return ; 
    }
    if (receivedMessage.content === "are you copying me ?")
        receivedMessage.channel.send("Yes i am copying you, what you going to do ?");
    else {
        var sender = receivedMessage.author.tag.toString() ;
        
        if (receivedMessage.content.startsWith("!")) {
            processCommand(receivedMessage);
        }
    }
}); 



function inspireMesssage(arguments, receivedMessage) {
    var thanks = receivedMessage.content.toLowerCase().indexOf("thank");
   

    if (thanks >= 0 ) {
     
        receivedMessage.react("♥");
        receivedMessage.channel.send("You are most welcome, have a great day");
    
    }else {
      
       
        receivedMessage.react("😃" );
        receivedMessage.react("👍" );

        generate =  chance.integer({ min: 0, max: inspireList.length })
        receivedMessage.channel.send(inspireList[generate]);
     
    }
    
}

function processCommand(receivedMessage) {
    
    let fullCommand = receivedMessage.content.substr(1); // works like java substring command. new string from index 1, inclusive, of the orgininal string.
    let splitCommand = fullCommand.split(" ") ; //Use the " " or whitespace to the split the string into individual words, following every whitespance, and stores them into an array. Therefore, SplitsCommand is an array of string.
    let primaryCommand = splitCommand[0]; // the first element at index 0 is the command, Example, help is the primarycommand from !help.
    let arguments = splitCommand.slice(1) ; // message from at index 1 of the Split Command array is stored in this 

    if(primaryCommand == "help") {
        helpCommand(arguments, receivedMessage);
    }else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage) ; 
    }else if (primaryCommand == "inspire") {
        inspireCommand(arguments, receivedMessage ) ;
    }
}


function helpCommand(arguments, receivedMessage) {
   
    if (arguments.length == 0) {
        receivedMessage.channel.send("Im not sure what you need help with");
    }else {
        receivedMessage.channel.send("it looks like you need help with " + arguments) ; 
    }
    
}

 client.login("OTEyNzQzMjk2OTY5ODc5NjEy.YZ0Ybw.Oi0E_vX-FBLPO6wGuyx48H4gGSg"); //secret token

