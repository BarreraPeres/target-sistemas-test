// import data from "../data/three-test.json"
const data = require("../data/three-test.json")

function threeTest() {

    const valoresFaturamento = Object.values(data.dias)
        .map(value => parseFloat(value.replace('R$', '')))

    const menorFaturamento = Math.min(...valoresFaturamento)
    const maiorFaturamento = Math.max(...valoresFaturamento)

    console.log("maior valor", maiorFaturamento)
    console.log("menor valor", menorFaturamento)
}

threeTest()