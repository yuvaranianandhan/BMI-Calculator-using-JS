function calculateBMI() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!name || name.length < 3) {
        alert('Please enter a valid name with at least 3 letters.');
        return;
    }

    if (!age || isNaN(age) || age < 16 || age > 100) {
        alert('Please enter a valid age between 16 and 100.');
        return;
    }

    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2><center><u>RESULT</u></center></h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>BMI:</strong> ${bmi.toFixed(2)}</p>
        <p><strong>BMI Category:</strong> ${getBMICategory(bmi)}</p>
        <p><button type="button" onclick="refreshPage()">Try Another!</button></p>
    `;
}
function refreshPage() {
    location.reload();
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

document.getElementById('height').addEventListener('input', function () {
    document.getElementById('heightValue').textContent = `${this.value} cm`;
});

document.getElementById('weight').addEventListener('input', function () {
    document.getElementById('weightValue').textContent = `${this.value} kg`;
});