function helloWorld() {
    console.log("Hello World"); 
}

function weMove(value) {
    console.log(`We move! at ${value}`);
}


function bmi_calculator() {
    document.getElementById('results').innerHTML = 'Your BMI is: ';   // indirectly clears the screen 
    let mass = document.getElementById('mass').value;       //obtains value using id   //remember to use let since the variable changes
    let height = document.getElementById('height').value;   //obtains value using id   //remember to use let since the variable changes
    console.log(mass);
    console.log(height);
    let answer = mass / (height * height);  //remember to use let since the variable changes
    console.log(answer); 
    document.getElementById('results').append(answer);      //appends value using id
}