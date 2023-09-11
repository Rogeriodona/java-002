console.log("funcionou?")

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valo em real //
    const currencyValueConverted = document.querySelector(".currency-value")  // outras moedas//



    const dolarToday = 4.9
    const euroToday = 5.3


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-USD", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }




    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:
                "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:
            "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




}


convertButton.addEventListener("click", convertValues)