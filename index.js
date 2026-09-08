const outputOne = document.querySelector('#response-one'), 
outputTwo = document.querySelector("#response-two"), 
outputTre = document.querySelector('#response-tre'), 
inputField = document.querySelector('.head-input'), 
headBtn = document.querySelector('.button-convert')

let feet = [3.281, 0.3048], gallon = [0.264,  3.785], pound = [2.204, 0.454]

headBtn.addEventListener('click', function () {
    
    //let nameOutputUm = outputUm.getAttribute("name")
    
    if (isValid(inputField)) {
        
    outputOne.textContent = `${inputField.value} Meters = ${(inputField.value * feet[0]).toFixed(3)} Feet | ${inputField.value} Feet =  ${(feet[1] * inputField.value).toFixed(3)} Meters`
       
    outputTwo.textContent = `${inputField.value} Liters = ${(inputField.value * gallon[0]).toFixed(3)} Gallon | ${inputField.value} Gallon = ${(inputField.value * gallon[1]).toFixed(3)} Liters`

    outputTre.textContent = `${inputField.value} Kilogram = ${(inputField.value * pound[0]).toFixed(3)} Pounds | ${inputField.value} Pounds = ${(inputField.value * pound[1]).toFixed(3)} Kilogram`

    }
    
})   

 function isValid (input) {
   
    if (input.value.length == 0) {
        console.log("Adicione um valor válido.")
        return false
    }

    return true

    }
 


