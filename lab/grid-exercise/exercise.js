.grid-header {
    grid-column: auto / span12;
    font-size: 4.8rem;
}

.grid-item{
    grid-column: auto / span 3;
}

.grid-item.hidden{
    display: none;
}

.grid:first-child{

}

let filter1
let filter2

function myFunction(filter1, filter2){
console.log('filter1', color)
console.log('filter2', color)
}

let color = 'red'
let year = '2022'

myFunction(color, year)

document.querySelector('filter')



/*NOTES:
asynchronous function:for example, if u need to go into google sheet for data, 
later need to use schedule, async tells everyone to stop and treat the return
airtable is all about writing async functions

console.log: consoles will return errs, basically allowing browser to talk back 
you used to debug and figure out what's not working and why, can tell you where 
the err is should not be in the final code!!!

define argument inside the function

how to get current index into this function? -- put i inside

API KEY

 airtable.com/create/apikey
 help > api documentation > copy paste the base code in js

query: inquiry, asking a question
*/