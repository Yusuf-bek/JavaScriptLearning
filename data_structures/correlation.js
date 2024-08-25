let someOtherJournal = []

function addToSomeOtherJournal(events, squirrel){
    someOtherJournal.push({events,squirrel})
    // in map when you give directly variable and did not mention key
    // it will get variable name as it is key name

    // here key is 
    // events : events(value of events)
    // squirrel : squirrel(value of squirrel)
}


addToSomeOtherJournal(["do nothinig", "eat", "use bathroom", "workout"], false)
addToSomeOtherJournal(["sleep", "eat", "use bathroom", "eat donut",], true)
addToSomeOtherJournal(["go to bed", "unwashed teeth", "eat donut", "use coconout oil"], true)
addToSomeOtherJournal(["do nothing", "get bored", "use bathroom", 'do some other thing'], false)

console.log("\n\nThis is Journal: \n")
console.log(someOtherJournal)



// Array loop

simpleArray = ["this", "that", "nimadur", "qanaqadur", "qandaydur", "nimalardur", "yanaNimadur"]
for(n of simpleArray){
    console.log(n)
}

// instead of using taking index by counting to its length
// we can use in javascript simpler way like showed up

// this way also works for strings and some other datasructures

for(a of "O'zbekiston"){
    console.log(a)
}

// O
// '
// z
// b
// e
// k
// i
// s
// t
// o
// n

//////////////////////////////////////

// Lets find out every type of events that occured in someOtherJournal



function findAllJournalEvents(){
    allEvents = []
    for(entry of someOtherJournal){
        for(oneEvent of entry.events){
            if(!allEvents.includes(oneEvent)){
                allEvents.push(oneEvent)
            }
        }
    }

    return allEvents
}


console.log(findAllJournalEvents(someOtherJournal))
