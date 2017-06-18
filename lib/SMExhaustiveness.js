/**
 * HIPÓTESIS
1. Se administra un único producto terminado.
2. El ítem en cuestión es un producto terminado y de demanda independiente.
3. La demanda es conocida y constante.
4. El plazo de entrega ("lead time ") es conocido y constante.
5. La reposición es instantánea es decir, la tasa de reaprovisionamiento es infinita.
6. El horizonte de planeamiento es a largo plazo.
7. El agotamiento está permitido. Es decir, se admite un diferimiento en las entregas pero sin perder las ventas. La empresa, entonces, está dispuesta a hacer frente a la falta de stocks asumiento un costo c2 por unidad de tiempo por cada unidad de producto demandado no satisfecho inmediatamente. Los parámetros de costos son independientes de la cantidad a pedir “q”.
8. No hay restricciones.
9. Todos los parámetros monetarios están expresados en moneda constante.
10. El producto en estudio se mide en una unidad continua (litros, kilogramos, etc.).
11. Se asume que el costo de agotamiento está dado solamente por el costo en el que se incurre por unidad de tiempo de déficit. Es decir, no hay costo fijo de agotamiento, ni costo por cantidad de unidades agotadas independiente del tiempo.
*/
module.exports = function(D, b, c1, c2, k, LT) {

    var CTEO = function() {
        return b * D + Math.sqrt(2*k*D*c1)*Math.sqrt(c2/(c1+c2))
    }

    var QO = function() {
        return Math.sqrt(2 * k * D / c1) * Math.sqrt((c1+c2)/c2)
    }

    var SO = function() {
        return Math.sqrt(2*k*D/c1) * Math.sqrt(c2/(c1+c2))
    }

    var NO = function() {
        return Math.sqrt(c1 * D / 2 / k)
    }

    var TO = function() {
        return Math.sqrt(2 * k / D / c1)
    }

    var SRO = function() {
        return LT * QO() / TO() - QO() * c1 / (c1+c2)
    }

    var T1 = function() {
        return SO()*TO() / QO()
    }

    var T2 = function() {
        return (QO()-SO())*TO()/QO() 
    }

    return {
        CTEO: CTEO,
        QO:QO,
        NO: NO,
        TO: TO,
        SRO: SRO,
        T1: T1,
        T2: T2,
        SO: SO
    }
}