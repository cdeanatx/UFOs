// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

// build an HTML table out of the array from data.js
function buildTables(data) {
    // clear any existing data from the table
    tbody.html("");

    data.forEach((dataRow) => {
        // create a row in the HTML file for each entry in the array
        let row = tbody.append("tr");
        
        // add mutiple "cells" to the current table row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}