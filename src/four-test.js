const data = require("../data/four-test.json")

function fourTest() {
    const valores = Object.values(data.valores)
        .map(value => parseFloat(value.replace('R$', '')))


    const total = Object.values(valores).reduce((acc, currentVal) =>
        acc + currentVal
        , 0)

    const percentuais = valores.map(value => ((value / total) * 100).toFixed(2) + "%")

    console.log(percentuais)
}

fourTest()