function calculatePrice() {
    var salary = document.getElementById("salary").value;
    var days = document.getElementById("days").value;
    console.log("Calculating price")
    console.log(salary)
    console.log(days)
    let finalPrice = 0;
    dailyRate = salary/365;
    finalPrice = Math.round(dailyRate * days/50) * 50;
    priceFormatted = finalPrice.toLocaleString('en-UK');
    document.getElementById("finalPrice").innerHTML = "\u00A3" + priceFormatted;
}
function updateSalary() {
    var jobOptions = document.getElementById("job-options");
    var selectedSalary = jobOptions.options[jobOptions.selectedIndex].value;
    document.getElementById("salary").value = selectedSalary;
  }