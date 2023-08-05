
// document.addEventListener("DOMContentLoaded", function () {

//     const incomeSubmitButton = document.getElementById("incomeSubmit");
//     const expenseSubmitButton = document.getElementById("expenseSubmit");
//     const tableIncome = document.getElementById("tableIncome");
//     const tableExpense = document.getElementById("tableExpense");
//     const icatogInput = document.getElementById("icatog");
//     const iamountInput = document.getElementById("iamount");
//     const ecatogInput = document.getElementById("ecatog");
//     const eamountInput = document.getElementById("eamount");
//     let totalIncome = 0;
//     let totalExpense = 0;





//     incomeSubmitButton.addEventListener("click", function () {

//         document.getElementById("tableIncome").style.display = "block";
//         const icatog = icatogInput.value;
//         const iamount = parseFloat(iamountInput.value);

//         if (icatog && !isNaN(iamount)) {
//             const newRow = tableIncome.insertRow(-1);
//             const categoryCell = newRow.insertCell(0);
//             const amountCell = newRow.insertCell(1);

//             categoryCell.textContent = icatog;
//             amountCell.textContent = iamount;

//             icatogInput.value = "";
//             iamountInput.value = "";

//             totalIncome += iamount;
//             intotalamount.textContent = totalIncome;
//             // intotalamount.textContent/ = totalIncome;
//         }
//     });


//     expenseSubmitButton.addEventListener("click", function () {

//         document.getElementById("tableExpense").style.display = "block";

//         const ecatog = ecatogInput.value;
//         const eamount = parseFloat(eamountInput.value);

//         if (ecatog && !isNaN(eamount)) {
//             const newRow = tableExpense.insertRow(-1);
//             const categoryCell = newRow.insertCell(0);
//             const amountCell = newRow.insertCell(1);

//             categoryCell.textContent = ecatog;
//             amountCell.textContent = eamount;

//             ecatogInput.value = "";
//             eamountInput.value = "";

//             totalExpense += eamount;
//             extotalamount.textContent = totalExpense;
//             // extotalamount.textContent = totalExpense;
//         }
//     });
// });


// const incomeData = [];
// const expenseData = [];

// incomeSubmitButton.addEventListener("click", function () {
//     incomeData.push({ category: icatog, amount: iamount });
//     updatePieChart();
// });

// expenseSubmitButton.addEventListener("click", function () {
//     expenseData.push({ category: ecatog, amount: eamount });
//     updatePieChart();
// });

// function updatePieChart() {
//     const totalIncome = incomeData.reduce((total, entry) => total + entry.amount, 0);
//     const totalExpense = expenseData.reduce((total, entry) => total + entry.amount, 0);

//     const xValues = ["Income", "Expense"];
//     const yValues = [totalIncome, totalExpense];
//     const barColors = ["#b91d47", "#2b5797"];

//     const ctx = document.getElementById("myPieChart").getContext("2d");
//     const data = {
//         labels: xValues,
//         datasets: [{
//             backgroundColor: barColors,
//             data: yValues
//         }]
//     };

//     const options = {
//         title: {
//             display: true,
//             text: "Income vs Expense"
//         }
//     };

//     if (typeof myPieChart !== "undefined") {
//         myPieChart.destroy();
//     }

//     myPieChart = new Chart(ctx, {
//         type: "pie",
//         data: data,
//         options: options
//     });
// }



document.addEventListener("DOMContentLoaded", function () {

    const incomeSubmitButton = document.getElementById("incomeSubmit");
    const expenseSubmitButton = document.getElementById("expenseSubmit");
    const tableIncome = document.getElementById("tableIncome");
    const tableExpense = document.getElementById("tableExpense");
    const icatogInput = document.getElementById("icatog");
    const iamountInput = document.getElementById("iamount");
    const ecatogInput = document.getElementById("ecatog");
    const eamountInput = document.getElementById("eamount");
    let totalIncome = 0;
    let totalExpense = 0;
    let myPieChart;
  
    incomeSubmitButton.addEventListener("click", function () {
        document.getElementById("tableIncome").style.display = "block";
        document.getElementById("hi1").style.display = "block";
        document.getElementById("")
        const icatog = icatogInput.value;
        const iamount = parseFloat(iamountInput.value);
  
        if (icatog && !isNaN(iamount)) {
            const newRow = tableIncome.insertRow(-1);
            const categoryCell = newRow.insertCell(0);
            const amountCell = newRow.insertCell(1);
  
            categoryCell.textContent = icatog;
            amountCell.textContent = iamount;
  
            icatogInput.value = "";
            iamountInput.value = "";
  
            totalIncome += iamount;
            intotalamount.textContent = totalIncome;
            updatePieChart();
        }
    });
  
    expenseSubmitButton.addEventListener("click", function () {
        document.getElementById("tableExpense").style.display = "block";
        document.getElementById("hi2").style.display = "block";

        const ecatog = ecatogInput.value;
        const eamount = parseFloat(eamountInput.value);
  
        if (ecatog && !isNaN(eamount)) {
            const newRow = tableExpense.insertRow(-1);
            const categoryCell = newRow.insertCell(0);
            const amountCell = newRow.insertCell(1);
  
            categoryCell.textContent = ecatog;
            amountCell.textContent = eamount;
  
            ecatogInput.value = "";
            eamountInput.value = "";
  
            totalExpense += eamount;
            extotalamount.textContent = totalExpense;
            updatePieChart();
        }
    });
  
    function updatePieChart() {
        const xValues = ["Income", "Expense"];
        const yValues = [totalIncome, totalExpense];
        const barColors = ["#b91d47", "#2b5797"];
  
        const ctx = document.getElementById("myPieChart").getContext("2d");
        const data = {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        };
  
        const options = {
            title: {
                display: true,
                text: "Income vs Expense"
            }
        };
  
        if (typeof myPieChart !== "undefined") {
            myPieChart.destroy();
        }
  
        myPieChart = new Chart(ctx, {
            type: "pie",
            data: data,
            options: options
        });
    }
  });