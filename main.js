// Selecting elements by their id using #
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let bmiCalc = document.querySelector("#bmi-cal");
let bmiResult = document.querySelector("#bmi-result h4");

// Adding an event listener for the button click
bmiCalc.addEventListener("click", function() {
    let heightInMeters = height.value / 100; // Convert height to meters
    let weightInKg = weight.value;

    if (heightInMeters && weightInKg) { // Ensure values are entered
        // Calculate BMI
        let bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

        // Determine BMI category
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // Display the result
        bmiResult.innerHTML = `Your BMI is: ${bmi} (${category})`;
    } else {
        bmiResult.innerHTML = "Please enter valid values for height and weight.";
    }
});
