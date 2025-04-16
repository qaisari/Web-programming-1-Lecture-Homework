// document.addEventListener('DOMContentLoaded', () => {
//     const tableRows = document.querySelectorAll('#dataTable tbody .data-row');
//     const canvas = document.getElementById('dynamicChart');
//     const ctx = canvas.getContext('2d');
//     let currentChart = null; // Variable to hold the current chart instance

//     // Generic labels for the chart's x-axis
//     const chartLabels = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];

//     tableRows.forEach(row => {
//         row.addEventListener('click', () => {
//             // 1. Get data from the clicked row
//             const cells = row.querySelectorAll('td');
//             const rowLabel = cells[0].textContent; // Get label from the first cell
//             const rowData = [];
//             // Start from the second cell to get numerical data
//             for (let i = 1; i < cells.length; i++) {
//                 // Use parseFloat to convert text to number, default to 0 if not a number
//                 rowData.push(parseFloat(cells[i].textContent) || 0);
//             }

//             // 2. Destroy the previous chart if it exists
//             if (currentChart) {
//                 currentChart.destroy();
//             }

//             // 3. Create a new chart
//             currentChart = new Chart(ctx, {
//                 type: 'bar', // Or 'line', 'pie', etc.
//                 data: {
//                     labels: chartLabels.slice(0, rowData.length), // Use labels matching data length
//                     datasets: [{
//                         label: rowLabel, // Use the label from the row
//                         data: rowData,   // Use the data extracted from the row
//                         backgroundColor: 'rgba(0, 128, 0, 0.6)', // Example color
//                         borderColor: 'rgba(0, 128, 0, 1)',
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     maintainAspectRatio: true, // Adjust as needed
//                     scales: {
//                         y: {
//                             beginAtZero: true
//                         }
//                     },
//                     plugins: {
//                         title: {
//                             display: true,
//                             text: `Chart for ${rowLabel}`
//                         }
//                     }
//                 }
//             });
//         });
//     });

//     // Optional: Display a default message or chart initially
//     // You could trigger a click on the first row, or display placeholder text
//     // For example, trigger click on the first row:
//     if (tableRows.length > 0) {
//          // tableRows[0].click(); // Uncomment to show the first row's chart on load
//     } else {
//         // Handle case where there are no data rows
//         console.log("No data rows found in the table.");
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("dataTable");
    for( let i = 1; i < table.rows.length; i++) {
        table.rows[i].addEventListener("click", function () {
            let rowData = [];
            for (let j = 0; j < this.cells.length; j++){
                rowData.push(this.cells[j].innerText);
            }

            //Handle the rowData
            console.log("Clicked row data:", rowData);

            //call a function to handle it
            handleRowClick(rowData);
        });
    }
});
function handleRowClick(data){
    //Do more stuff here
    console.log("handling row:", data);
}
