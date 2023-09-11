console.log("funcionou?")

const convertButton = document.querySelector(".convert-button")
console.log("convert-button")

function convertValues(){
    console.log("convert-button")
    const inputCurrencyValue = document.querySelector (".input-Currency").value
    console.log(inputCurrencyValue)
}


convertButton.addEventListener("click", convertValues)


