
function distributeGuestsToTables() {
    let guestsPerTable = Math.floor(totalGuests/totalTables);
    let remainingGuests = totalGuests % totalTables;

    return {
        totalGuests: totalGuests,
        totalTables: totalTables,
        remainingGuests: remainingGuests,
        guestsPerTable: guestsPerTable,
    };
    
}

let totalGuestsInput = prompt("How many guests do you have?");
let totalTablesInput = prompt("How many tables do you want?");

let totalGuests = parseInt(totalGuestsInput);
let totalTables = parseInt(totalTablesInput);

if (isNaN(totalGuestsInput) || isNaN(totalTablesInput) || totalGuestsInput < 0 || totalTablesInput <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");

} 
else {
    let result = distributeGuestsToTables(totalGuestsInput,totalTablesInput);
    alert(`Your ${totalGuestsInput} will be seated as follows: ${result.remainingGuests} tables of ${result.guestsPerTable + 1} , and ${totalTablesInput - result.remainingGuests} tables of ${result.guestsPerTable}.`);
    
}
