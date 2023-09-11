console.log("funcionou?")

const convertButton = document.querySelector(".convert-button")
console.log("convert-button")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert1 = document.querySelector(".input-currency-to-convert") //valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") //outras moedas


    const dolarToday = 4.93

    const convertedValue = inputCurrencyValues / dolarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueToConverted.innerHTML = convertedValue



    console.log(convertedValue)

}


convertButton.addEventListener("click", convertValues)

