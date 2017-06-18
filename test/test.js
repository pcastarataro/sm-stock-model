var StockModel = require('./../index.js')

demoBasic = function() {
    var D = 500 // KG/ANIO
    var b = 100 // $/kg
    var c1 = 25 // $/ (anio*kg)
    var k = 10 // por pedido
    var LT = 0.01 // tiempo
    var basico = StockModel.Basic(D, b, c1, k, LT)
    console.log("----- Basico -----")
    console.log("Qo:   " + basico.QO())
    console.log("No:   " + basico.NO())
    console.log("To:   " + basico.TO())
    console.log("SR:   " + basico.SRO())
    console.log("CTEo: " + basico.CTEO())
}

demoProtection = function() {
    var D = 500 // KG/ANIO
    var b = 100 // $/kg
    var c1 = 25 // $/ (anio*kg)
    var k = 10 // por pedido
    var LT = 0.01 // tiempo
    var Sp = 100
    var proteccion = StockModel.Protection(D, b, c1, k, LT, Sp)
    console.log("----- Proteccion -----")
    console.log("Qo:   " + proteccion.QO())
    console.log("No:   " + proteccion.NO())
    console.log("To:   " + proteccion.TO())
    console.log("SR:   " + proteccion.SRO())
    console.log("CTEo: " + proteccion.CTEO())
}

demoExhaustiveness = function() {
    D = 200
    b = 50
    c1 = 0.10
    c2 = 10
    LT = 1/3
    k = 5
    var agotamiento = StockModel.Exhaustiveness(D, b, c1, c2, k, LT)
    console.log("----- Agotamiento -----")
    console.log("Qo:   " + agotamiento.QO())
    console.log("No:   " + agotamiento.NO())
    console.log("To:   " + agotamiento.TO())
    console.log("SR:   " + agotamiento.SRO())
    console.log("CTEo: " + agotamiento.CTEO())
    console.log("T1:   " + agotamiento.T1())
    console.log("T2: " + agotamiento.T2())
}

demoReplacementNotIntant = function() {
    D = 800
    d = D / 250
    p = 12
    b = 134.67
    c1 = 24.24
    LT = 1/8
    k = 156

    var model = StockModel.ReplacementNotIntant(D, d, p, b, c1, k, LT)
    console.log("----- SMReplacementNotIntant -----")
    console.log("Qo:   " + model.QO())
    console.log("No:   " + model.NO())
    console.log("To:   " + model.TO())
    console.log("SR:   " + model.SRO())
    console.log("CTEo: " + model.CTEO())
    console.log("SO:   " + model.SO())
}

demoBasic()
demoProtection()
demoExhaustiveness()
demoReplacementNotIntant()


