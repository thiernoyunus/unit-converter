/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function(){
   const meterResult = (inputEl.value * 3.281).toFixed(3)
   const feetResult = (inputEl.value / 3.281).toFixed(3)
   const litersResult = (inputEl.value * 0.264).toFixed(3)
   const gallonsResult = (inputEl.value / 0.264).toFixed(3)
   const kilosResult = (inputEl.value * 2.204).toFixed(3)
   const poundsResult = (inputEl.value / 2.204).toFixed(3)
   
   lengthResult.textContent = `${inputEl.value} meters = ${meterResult} feet | ${inputEl.value} feet = ${feetResult} meters`
   
   volumeResult.textContent = `${inputEl.value} liters = ${litersResult} gallons | ${inputEl.value} gallons = ${gallonsResult} liters`
   
   massResult.textContent = `${inputEl.value} kilos = ${kilosResult} pounds | ${inputEl.value} feet = ${poundsResult} kilos`
})
