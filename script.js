//Grab elements from HTML page

const lengthEl = document.getElementById("length-convert")
const volumeEl = document.getElementById("volume-convert")
const massEl = document.getElementById("mass-convert")
const inputEl = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")


//Conversion Function
function conversionRate(inputNum) {
    lengthEl.innerHTML = `${inputNum.value} meters = ${(inputNum.value * 3.281).toFixed(3)} feet | ${inputNum.value} feet = ${(inputNum.value / 3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `${inputNum.value} liters = ${(inputNum.value * 0.264).toFixed(3)} gallons | ${inputNum.value} gallons = ${(inputNum.value / 0.264).toFixed(3)} liters`
    massEl.innerHTML = `${inputNum.value} kilos = ${(inputNum.value * 2.204).toFixed(3)} pounds | ${inputNum.value} pounds = ${(inputNum.value / 2.204).toFixed(3)} kilos`
}

//Call function on Convert button click
convertBtn.addEventListener("click", function () {
    conversionRate(inputEl)
})


