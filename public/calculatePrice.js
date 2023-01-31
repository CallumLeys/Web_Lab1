function calculatePrice() {
    var salary = document.getElementById("salary").value;
    var days = document.getElementById("days").value;

    /*
    fetch('api/${salary}/${days}')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Update the UI with the sum
        document.getElementById("finalPrice").innerHTML = "\u00A3" + req.query.days;
      });
      */
    // Calculate the sum
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